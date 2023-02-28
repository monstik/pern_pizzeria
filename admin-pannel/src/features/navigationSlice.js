import { createSlice } from '@reduxjs/toolkit'

export const navigationSlice = createSlice({
	name: 'navigation',
	initialState: {
		pageTitle: '',
	},
	reducers: {
		setPageTitle(state, action) {
			state.pageTitle = action.payload
		},
	},
})

export const { setPageTitle } = navigationSlice.actions

export const selectPageTitle = (state) => state.navigation.pageTitle

export default navigationSlice.reducer
