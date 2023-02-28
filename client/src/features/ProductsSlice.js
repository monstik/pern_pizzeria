import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import productItem from '../components/Product/ProductItem/ProductItem'

export const getProducts = createAsyncThunk(
	'productList/getProducts',
	async (_, thunkAPI) => {
		try {
			const response = await axios.get(
				'http://localhost:5000/api/product/categoriesWithProducts'
			)
			console.log(response.data.products)
			return response.data.products
		} catch (e) {
			console.log(thunkAPI.rejectWithValue('error'))
			return thunkAPI.rejectWithValue('error')
		}
	}
)

export const getCategories = createAsyncThunk(
	'category/getCategories',
	async (_, thunkAPI) => {
		try {
			const response = await axios.get(
				'http://localhost:5000/api/product/categories'
			)
			console.log(response.data)
			return response.data.categories
		} catch (e) {
			return thunkAPI.rejectWithValue('error')
		}
	}
)

export const productsSlice = createSlice({
	name: 'products',
	initialState: {
		currentProduct: {},
		currentProductAmount: '',
		currentProductWithout: [],
		searchProductTerm: '',
		currentProductSize: {
			id: 1,
			size: '',
		},

		categories: [],
		products: [],

		isOpenProductModal: false,
		isLoading: false,
		hasError: false,

		isOpenSimpleProductModal: false,
		isOpenExtraProductModal: false,
		isOpenCombosProductModal: false,
	},

	reducers: {
		openSimpleProductModal(state) {
			state.isOpenSimpleProductModal = true
		},

		closeSimpleProductModal(state) {
			state.isOpenSimpleProductModal = false
		},

		openExtraProductModal(state) {
			state.isOpenExtraProductModal = true
		},

		closeExtraProductModal(state) {
			state.isOpenExtraProductModal = false
		},

		openCombosProductModal(state) {
			state.isOpenCombosProductModal = true
		},

		closeCombosProductModal(state) {
			state.isOpenCombosProductModal = false
		},

		setProducts(state, action) {
			state.products = action.payload
		},
		setIsOpenProductModal(state, action) {
			state.isOpenProductModal = action.payload
		},

		setCurrentProductAmount(state, action) {
			state.currentProductAmount = action.payload
		},
		setSearchProductTerm(state, action) {
			state.searchProductTerm = action.payload
		},
		closeProductModal(state, action) {
			state.isOpenProductModal = false
			state.currentProductSize = {
				id: 1,
				size: '',
			}
			state.currentProductWithout = []
		},
		openProductModal(state, action) {
			state.currentProduct = action.payload
			state.isOpenProductModal = true
			state.currentProductSize = {
				id: 1,
				size: action.payload.amount?.split('|')[0],
			}
		},

		setCurrentProduct(state, action) {
			console.log('action.payload', action.payload)
			state.currentProduct = state.products.reduce((acc, section) => {
				const foundProduct = section.products.find(
					(product) =>
						product.title.toLowerCase().trim() == action.payload.toLowerCase()
				)
				return foundProduct ? foundProduct : acc
			}, undefined)
		},

		addToCurrentProductWithout(state, action) {
			// state.currentProductWithout = [
			// 	...state.currentProductWithout,
			// 	action.payload,
			// ]
			state.currentProductWithout.push(action.payload)
		},
		removeFromCurrentProductWithout(state, action) {
			state.currentProductWithout.splice(
				state.currentProductWithout.indexOf(action.payload),
				1
			)
		},
		setCurrentProductSize(state, action) {
			state.currentProductSize = action.payload
		},
	},

	extraReducers: (builder) => {
		builder.addCase(getProducts.pending, (state) => {
			state.isLoading = true
			state.hasError = false
		})
		builder.addCase(getProducts.fulfilled, (state, action) => {
			state.products = action.payload
			state.isLoading = false
			state.hasError = false
		})
		builder.addCase(getProducts.rejected, (state, action) => {
			state.hasError = true
			state.isLoading = false
		})
		builder.addCase(getCategories.fulfilled, (state, action) => {
			state.categories = action.payload
		})
	},
})

export const {
	setProducts,
	setIsOpenProductModal,
	setCurrentProduct,
	closeProductModal,
	openProductModal,
	addToCurrentProductWithout,
	removeFromCurrentProductWithout,
	setCurrentProductAmount,
	setCurrentProductSize,
	setSearchProductTerm,

	openSimpleProductModal,
	closeSimpleProductModal,

	openExtraProductModal,
	closeExtraProductModal,

	openCombosProductModal,
	closeCombosProductModal,
} = productsSlice.actions

export const selectProducts = (state) => state.products.products

export const selectCategories = (state) => state.products.categories
export const selectCurrentProduct = (state) => state.products.currentProduct
export const selectIsLoading = (state) => state.products.isLoading
export const selectCurrentProductAmount = (state) =>
	state.products.currentProductAmount
export const selectCurrentProductWithout = (state) =>
	state.products.currentProductWithout
export const selectIsOpenProductModal = (state) =>
	state.products.isOpenProductModal
export const selectCurrentProductSize = (state) =>
	state.products.currentProductSize

export const selectIsOpenSimpleProductModal = (state) =>
	state.products.isOpenSimpleProductModal
export const selectIsOpenExtraProductModal = (state) =>
	state.products.isOpenExtraProductModal
export const selectIsOpenCombosProductModal = (state) =>
	state.products.isOpenCombosProductModal

export const selectFilteredProduct = (state) => {
	const products = state.products.products

	const searchTerm = state.products.searchProductTerm.toLowerCase()
	console.log('searchTerm', searchTerm)
	const result = products.reduce((acc, section) => {
		const foundProduct = section.products.find(
			(product) => product.title.toLowerCase().trim() == searchTerm
		)
		return foundProduct ? foundProduct : acc
	}, null)

	return result
}
export default productsSlice.reducer
