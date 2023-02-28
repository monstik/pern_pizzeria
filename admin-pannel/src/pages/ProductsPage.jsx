import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts, selectProducts } from '../features/productSlice'
import ProductCardsItem from '../components/Product/ProductCards/ProductCardsItem/ProductCardsItem'
import ProductCards from '../components/Product/ProductCards/ProductCards'
import ProductList from '../components/Product/ProductList/ProductList'
import ProductTopNavigation from '../components/Product/ProductTopNavigation/ProductTopNavigation'
import { useInView } from 'react-intersection-observer'

const ProductsPage = () => {
	const products = useSelector(selectProducts)
	const dispatch = useDispatch()
	const [displayVariant, setDisplayVariant] = useState(true)

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				width: '100%',
				// height: '100vh',
				marginTop: '80px',
			}}
		>
			<Box
				sx={{
					maxWidth: '1280px',
					width: '100%',
				}}
			>
				<ProductTopNavigation
					setDisplayVariant={setDisplayVariant}
					displayVariant={displayVariant}
				/>
				<Box
					sx={{
						height: '80vh',
					}}
				>
					{displayVariant ? (
						<ProductList products={products} limit={10} />
					) : (
						<ProductCards products={products} limit={10} />
					)}
				</Box>
			</Box>
		</Box>
	)
}

export default ProductsPage
