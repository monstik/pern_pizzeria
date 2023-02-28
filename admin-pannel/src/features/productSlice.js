import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProducts = createAsyncThunk(
	'productList/getProducts',
	async ({ page, limit, order, orderDirection, term }, thunkAPI) => {
		try {
			const response = await axios.get(
				`http://localhost:5000/api/product/products?page=${page}&limit=${limit}&order=${order}&orderDirection=${orderDirection}&term=${term}`
			)
			return response.data.products
		} catch (e) {
			console.log(e)
			return thunkAPI.rejectWithValue('error')
		}
	}
)

export const searchProducts = createAsyncThunk(
	'productList/searchProducts',
	async ({ term, page, limit, order, orderDirection }, thunkAPI) => {
		try {
			const response = await axios.get(
				`http://localhost:5000/api/product/searchProducts?page=${page}&limit=${limit}&order=${order}&orderDirection=${orderDirection}&term=${term}`
			)
			return response.data.products
		} catch (e) {
			console.log(e)
			return thunkAPI.rejectWithValue('error')
		}
	}
)

export const productSlice = createSlice({
	name: 'products',
	initialState: {
		currentProduct: {},
		products: [],
		isLoading: false,
		isError: false,
		error: '',
		order: 'id',
		orderDirection: 'ASC',
		search: '',
	},

	reducers: {
		setCurrentProduct(state, action) {
			state.currentProduct = action.payload
		},

		clearProducts(state) {
			state.products = []
		},

		setOrder(state, action) {
			state.order = action.payload
		},
		setOrderDirection(state, action) {
			state.orderDirection = action.payload
		},

		setSearch(state, action) {
			state.search = action.payload
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getProducts.pending, (state) => {
			state.isLoading = true
		})
		builder.addCase(getProducts.fulfilled, (state, action) => {
			// state.products = [...state.products, ...action.payload]
			state.products.push(...action.payload)
			// state.products = action.payload
			state.isLoading = false
		})
		builder.addCase(getProducts.rejected, (state, action) => {
			state.isError = true
			state.error = action.payload
		})

		builder.addCase(searchProducts.fulfilled, (state, action) => {
			state.products.push(...action.payload)
		})
	},
})

export const {
	setCurrentProduct,
	clearProducts,
	setOrder,
	setOrderDirection,
	setSearch,
} = productSlice.actions

export const selectProducts = (state) => state.products.products
export const selectCurrentProduct = (state) => state.products.currentProduct
export const selectOrder = (state) => state.products.order
export const selectOrderDirection = (state) => state.products.orderDirection
export const selectSearch = (state) => state.products.search

export default productSlice.reducer
