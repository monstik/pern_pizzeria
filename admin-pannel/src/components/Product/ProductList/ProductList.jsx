import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { grey } from '@mui/material/colors'
import ProductListItem from './ProductListItem/ProductListItem'
import { useInView } from 'react-intersection-observer'
import {
	clearProducts,
	getProducts,
	selectOrder,
	selectOrderDirection,
	selectSearch,
} from '../../../features/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import { setPageTitle } from '../../../features/navigationSlice'

const ProductList = ({ products, limit = 10 }) => {
	const dispatch = useDispatch()
	const order = useSelector(selectOrder)
	const orderDirection = useSelector(selectOrderDirection)
	const [page, setPage] = useState(1)
	const search = useSelector(selectSearch)
	const [skipFirstRender, setSkipFirstRender] = useState(false)

	const { ref, inView } = useInView({
		threshold: 0,
	})

	const cleanUp = () => {
		dispatch(clearProducts())
	}

	useEffect(() => {
		dispatch(
			getProducts({ page: 0, limit: 10, order, orderDirection, term: search })
		)
		dispatch(setPageTitle('Product'))
		return () => cleanUp()
	}, [])

	useEffect(() => {
		if (inView) {
			setPage(page + 1)
			dispatch(
				getProducts({
					page: page,
					limit: 10,
					order,
					orderDirection,
					term: search,
				})
			)
		}
	}, [inView])

	useEffect(() => {
		if (skipFirstRender) {
			cleanUp()
			setPage(1)
			dispatch(
				getProducts({ page: 0, limit: 10, order, orderDirection, term: search })
			)
		}

		setSkipFirstRender(true)
	}, [orderDirection, order, search])

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: '10px',
				width: '100%',
				height: '100%',
				padding: '5px',

				overflowY: 'scroll',

				'&::-webkit-scrollbar': {
					width: '0.4em',
				},
				'&::-webkit-scrollbar-track': {
					boxShadow: 'inset 0 0 6px rgba(4,4,0,0.1)',
					webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
					borderRadius: '20px',
					backgroundColor: grey[800],
				},
				'&::-webkit-scrollbar-thumb': {
					backgroundColor: '#42a5f5',
					height: '80px',
					borderRadius: '20px',
				},
			}}
		>
			{products.map((product, index) => {
				if (index === limit * page - 3) {
					return (
						<ProductListItem
							loadingRef={ref}
							key={product.title + product.id + product.title}
							title={product.title}
							ingredients={product.ingredients?.replace(/\|/g, '')}
							image={product.image?.split('|')[0]}
							price={product.price}
							productId={product.id}
							discountPrice={product.discountPrice}
							amount={product.amount}
							category={product.product_category.title}
						/>
					)
				}

				return (
					<ProductListItem
						key={product.title + product.id + product.title}
						title={product.title}
						ingredients={product.ingredients?.replace(/\|/g, '')}
						image={product.image?.split('|')[0]}
						price={product.price}
						productId={product.id}
						discountPrice={product.discountPrice}
						amount={product.amount}
						category={product.product_category.title}
					/>
				)
			})}
		</Box>
	)
}

export default ProductList
