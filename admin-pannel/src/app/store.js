import { configureStore } from '@reduxjs/toolkit'
import productSlice from '../features/productSlice'
import navigationSlice from '../features/navigationSlice'

export const store = configureStore({
	reducer: {
		products: productSlice,
		navigation: navigationSlice,
	},
})
