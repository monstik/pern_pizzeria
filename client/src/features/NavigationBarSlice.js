import { createSlice } from '@reduxjs/toolkit'

const navigationBarSlice = createSlice({
	name: 'navigationBar',
	initialState: {
		activeSectionId: null,
		activeSectionName: '',
		scrollSectionId: '#header',
		isOpenBasket: false,
	},
	reducers: {
		setSectionId(state, action) {
			state.activeSectionId = action.payload
		},

		setIsOpenBasket(state, action) {
			state.isOpenBasket = action.payload
		},

		setScrollSectionId(state, action) {
			state.scrollSectionId = action.payload
		},
	},
})

export const { setSectionId, setIsOpenBasket, setScrollSectionId } =
	navigationBarSlice.actions

export const selectActiveSectionId = (state) =>
	state.navigationBar.activeSectionId
export const selectIsOpenBasket = (state) => state.navigationBar.isOpenBasket
export const selectScrollSectionId = (state) =>
	state.navigationBar.scrollSectionId

export default navigationBarSlice.reducer
