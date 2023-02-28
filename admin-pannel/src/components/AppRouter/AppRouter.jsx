import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from '../../layouts/MainLayout'
import MainPage from '../../pages/MainPage'
import ProductsPage from '../../pages/ProductsPage'

const AppRouter = () => {
	return (
		<div>
			<Routes>
				<Route element={<MainLayout />}>
					<Route path={'/'} element={<MainPage />} />
				</Route>
				<Route element={<MainLayout />}>
					<Route path={'/products'} element={<ProductsPage />} />
				</Route>
			</Routes>
		</div>
	)
}

export default AppRouter
