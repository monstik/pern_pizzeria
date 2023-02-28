import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
	name: 'notification',
	initialState: {
		notificationMessage: '',
		notificationType: 'error',
		isSnackbarOpen: false,
	},
	reducers: {
		setNotification: (state, action) => {
			state.notificationMessage = action.payload.notificationMessage
			state.notificationType = action.payload.notificationType
			state.isSnackbarOpen = true
		},
		clearNotification: (state) => {
			state.notificationMessage = null
			state.notificationType = 'error'
			state.isSnackbarOpen = false
		},

		closeSnackbar: (state) => {
			state.isSnackbarOpen = false
		},
	},
	extraReducers: (builder) => {
		// builder.addMatcher(
		// 	(action) => action.type.endsWith('/rejected'),
		// 	(state, action) => {
		// 		state.error = action.error.message
		// 	}
		// )
	},
})

export const { setNotification, clearNotification, closeSnackbar } =
	notificationSlice.actions
export const selectNotificationMessage = (state) =>
	state.notification.notificationMessage
export const selectNotificationType = (state) =>
	state.notification.notificationType
export const selectIsSnackbarOpen = (state) => state.notification.isSnackbarOpen

export default notificationSlice.reducer
