import React, { useEffect } from 'react'
import MainLayout from '../layouts/MainLayout'
import { Box, Button } from '@mui/material'
import PromoteSwiper from '../components/PromoteSwiper/PromoteSwiper'
import ProductSection from '../components/Product/ProductSection/ProductSection'
import { useDispatch, useSelector } from 'react-redux'
import {
	selectActiveSectionId,
	setSectionId,
} from '../features/NavigationBarSlice'
import { menuData } from '../components/Header/Menu/Menu'
import ProductItem from '../components/Product/ProductItem/ProductItem'
import { Element } from 'react-scroll'
import {
	getCategories,
	getProducts,
	selectCategories,
	selectIsLoading,
	selectProducts,
} from '../features/ProductsSlice'
import ProductModal from '../components/Modals/CommonProductModal/ProductModal'
import {
	Outlet,
	Route,
	Routes,
	useLocation,
	useNavigate,
} from 'react-router-dom'
const skeletonList = [
	{
		skeletonProducts: [{}, {}, {}, {}, {}, {}, {}, {}],
	},
	{
		skeletonProducts: [{}, {}, {}, {}, {}, {}, {}, {}],
	},
	{
		skeletonProducts: [{}, {}, {}, {}, {}, {}, {}, {}],
	},
	{
		skeletonProducts: [{}, {}, {}, {}, {}, {}, {}, {}],
	},
	{
		skeletonProducts: [{}, {}, {}, {}, {}, {}, {}, {}],
	},
	{
		skeletonProducts: [{}, {}, {}, {}, {}, {}, {}, {}],
	},
]

const MainPage = () => {
	const id = useSelector(selectActiveSectionId)
	const categories = useSelector(selectCategories)
	const products = useSelector(selectProducts)
	const isLoading = useSelector(selectIsLoading)
	const dispatch = useDispatch()

	return (
		<Box
			sx={{
				// height: '5300px',
				marginBottom: '40px',
			}}
		>
			<PromoteSwiper />
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				{isLoading
					? skeletonList.map((item, index) => (
							<ProductSection
								key={index}
								isSkeleton={true}
								products={item.skeletonProducts}
							/>
					  ))
					: products.map((item) => (
							<ProductSection
								title={item.title}
								products={item.products}
								itemId={item.id.toString()}
								key={item.id}
							/>
					  ))}
			</Box>
			<Outlet />

			{/*<ProductModal />*/}
		</Box>
	)
}

export default MainPage
