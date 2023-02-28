import React from 'react'
import { Navigate, Outlet, Route, Routes, HashRouter } from 'react-router-dom'
import MainLayout from '../../layouts/MainLayout'
import MainPage from '../../pages/MainPage'
import ProfilePage from '../../pages/ProfilePage'
import ProductModal from '../Modals/CommonProductModal/ProductModal'
import { Box } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectIsAuth } from '../../features/UserSlice'
import ProductPage from '../../pages/ProductPage'

const AppRouter = () => {
	// const isOpenProductModal = useSelector(selectIsOpenProductModal)
	const isAuth = useSelector(selectIsAuth)
	return (
		<div>
			{/*<HashRouter>*/}
			<Routes>
				<Route path="/" element={<MainLayout />}>
					{/*<Route*/}
					{/*	path="/"*/}
					{/*	element={*/}
					{/*		<Box>*/}
					{/*			<Outlet />*/}
					{/*		</Box>*/}
					{/*	}*/}
					{/*>*/}
					<Route path="pizza-shop" element={<MainPage />}>
						<Route path="product/:productTitle" element={<ProductPage />} />
						{/*<Route path="product/:productTitle" element={<ProductModal />} />*/}
					</Route>

					<Route
						path="profile"
						element={isAuth ? <ProfilePage /> : <Navigate to={'/pizza-shop'} />}
					/>
					<Route
						path="deals"
						element={isAuth ? <ProfilePage /> : <Navigate to={'/pizza-shop'} />}
					/>
					<Route
						path="deliveryArea"
						element={isAuth ? <ProfilePage /> : <Navigate to={'/pizza-shop'} />}
					/>
					{/*</Route>*/}
					{/*<Route path="product/:productTitle" element={<ProductModal />} />*/}
				</Route>
			</Routes>
			{/*</HashRouter>*/}
		</div>
	)
}

export default AppRouter
