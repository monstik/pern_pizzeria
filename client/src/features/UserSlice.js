import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { setSectionId } from './NavigationBarSlice'
import { setNotification } from './NotificationSlice'
import { PURGE, REHYDRATE } from 'redux-persist'

export const login = createAsyncThunk('user/login', async (_, thunkAPI) => {
	try {
		const response = await axios.post(
			'http://localhost:5000/api/user/login',
			{
				phoneNumber: _.phoneNumber,
				password: _.password,
			},
			{ withCredentials: true }
		)
		return {
			user: response.data.user,
			accessToken: response.data.accessToken,
		}
	} catch (e) {
		thunkAPI.dispatch(
			setNotification({
				notificationMessage: e?.response?.data?.message || 'server error',

				notificationType: 'error',
			})
		)
		return thunkAPI.rejectWithValue(
			e?.response?.data?.message || 'server error'
		)
	}
})

export const logout = createAsyncThunk('user/logout', async (_, thunkAPI) => {
	try {
		const response = await axios.post(
			'http://localhost:5000/api/user/logout',
			{},
			{
				withCredentials: true,
			}
		)
		return response.data
	} catch (e) {
		thunkAPI.dispatch(
			setNotification({
				notificationMessage: e?.response?.data?.message || 'server error',

				notificationType: 'error',
			})
		)
		return thunkAPI.rejectWithValue(
			e?.response?.data?.message || 'server error'
		)
	}
})

export const registration = createAsyncThunk(
	'user/registration',
	async (_, thunkAPI) => {
		try {
			const response = await axios.post(
				'http://localhost:5000/api/user/registration',
				{
					phoneNumber: _.phoneNumber,
					password: _.password,
				}
			)
			thunkAPI.dispatch(
				login({ phoneNumber: _.phoneNumber, password: _.password })
			)
			return {
				user: response.data.user,
				accessToken: response.data.accessToken,
			}
		} catch (e) {
			thunkAPI.dispatch(
				setNotification({
					notificationMessage: e?.response?.data?.message || 'server error',

					notificationType: 'error',
				})
			)
			return thunkAPI.rejectWithValue(
				e?.response?.data?.message || 'server error'
			)
		}
	}
)

export const updatePersonalData = createAsyncThunk(
	'user/updatePersonalData',
	async ({ name, phoneNumber, email }, thunkAPI) => {
		try {
			const { accessToken } = thunkAPI.getState().user
			const response = await axios.put(
				'http://localhost:5000/api/user/updatePersonalData',
				{
					name,
					phoneNumber,
					email,
				},
				{
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
				}
			)

			thunkAPI.dispatch(
				setNotification({
					notificationMessage: 'Data has been successfully updated',
					notificationType: 'success',
				})
			)

			return response.data.user
		} catch (e) {
			thunkAPI.dispatch(
				setNotification({
					notificationMessage: e?.response?.data?.message || 'server error',
					notificationType: 'error',
				})
			)
			return thunkAPI.rejectWithValue(
				e?.response?.data?.message || 'server error'
			)
		}
	}
)

export const checkAuth = createAsyncThunk(
	'user/checkAuth',
	async (payload, thunkAPI) => {
		try {
			const { accessToken } = thunkAPI.getState().user
			const response = await axios.get('http://localhost:5000/api/user/check', {
				withCredentials: true,
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			})

			return response.data
		} catch (e) {
			thunkAPI.dispatch(
				setNotification({
					notificationMessage: e?.response?.data?.message || 'server error',

					notificationType: 'error',
				})
			)
			return thunkAPI.rejectWithValue(
				e?.response?.data?.message || 'server error'
			)
		}
	}
)

export const checkAuthMiddleware = (storeAPI) => (next) => (action) => {
	const { accessToken } = storeAPI.getState().user
	const tokenChecked = localStorage.getItem('tokenChecked')

	if (tokenChecked === 'false' && accessToken) {
		// Выполняем проверку токена
		localStorage.setItem('tokenChecked', 'true')
		storeAPI.dispatch(checkAuth())

		console.log('test')
		// Устанавливаем флаг tokenChecked в true
		localStorage.setItem('tokenChecked', 'true')
	}

	const result = next(action)

	if (action.type === PURGE) {
		// Сбрасываем флаг tokenChecked при выходе из приложения
		localStorage.setItem('tokenChecked', 'false')
	}
	if (action.type === REHYDRATE) {
		// Сбрасываем флаг tokenChecked при выходе из приложения
		console.log('regy')
		localStorage.setItem('tokenChecked', 'false')
	}

	return result
}
export const userSlice = createSlice({
	name: 'user',
	initialState: {
		user: {},
		accessToken: '',
		isAuth: false,
		isOpenAuthModal: false,
	},

	reducers: {
		setIsOpenAuthModal(state, action) {
			state.isOpenAuthModal = action.payload
		},
	},

	extraReducers: (builder) => {
		builder.addCase(login.pending, (state) => {})
		builder.addCase(login.fulfilled, (state, action) => {
			state.user = action.payload.user
			state.accessToken = action.payload.accessToken
			state.isAuth = true
			state.isOpenAuthModal = false
		})

		builder.addCase(registration.pending, (state) => {})
		builder.addCase(registration.fulfilled, (state, action) => {
			state.user = action.payload.user
			state.accessToken = action.payload.accessToken
			state.isAuth = true
			state.isOpenAuthModal = false
		})
		builder.addCase(registration.rejected, (state, action) => {})
		builder.addCase(checkAuth.rejected, (state, action) => {
			state.user = {}
			state.accessToken = ''
			state.isAuth = false
			state.isOpenAuthModal = false
		})
		builder.addCase(logout.fulfilled, (state) => {
			state.user = {}
			state.isAuth = false
			state.isOpenAuthModal = false
		})

		builder.addCase(updatePersonalData.fulfilled, (state, action) => {
			state.user = action.payload
		})
	},
})

export const { setIsOpenAuthModal } = userSlice.actions

export const selectIsOpenAuthModal = (state) => state.user.isOpenAuthModal
export const selectUser = (state) => state.user.user
export const selectAccessToken = (state) => state.user.accessToken
export const selectIsAuth = (state) => state.user.isAuth

export default userSlice.reducer
