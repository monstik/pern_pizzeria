import React, { useEffect } from 'react'
import { Box, Skeleton, Typography } from '@mui/material'
import ProductItem from '../ProductItem/ProductItem'
import { useInView } from 'react-intersection-observer'
import { useDispatch } from 'react-redux'
import { setSectionId } from '../../../features/NavigationBarSlice'
import { Element } from 'react-scroll'
const ProductSection = ({ title, products, itemId, isSkeleton }) => {
	const { ref, inView } = useInView({
		threshold: 0.1,
	})
	const dispatch = useDispatch()
	useEffect(() => {
		if (inView) {
			dispatch(setSectionId(itemId))
		}
	}, [inView])
	return (
		// <Element name={id}>
		<Box
			// id={id}
			ref={ref}
			sx={{
				maxWidth: '1280px',
				width: '100%',
				minHeight: '100vh',
			}}
		>
			<Element name={`#${title}`}>
				{isSkeleton ? (
					<Skeleton
						sx={{
							backgroundColor: 'grey.600',
							fontSize: '36px',
							margin: '72px 0 32px 0',
						}}
						variant="text"
						width={200}
					/>
				) : (
					<Typography
						sx={{
							margin: '72px 0 32px 0',
							fontSize: '36px',
							fontWeight: '500',
						}}
					>
						{title}
					</Typography>
				)}
			</Element>
			<Box
				sx={{
					display: 'flex',

					flexWrap: 'wrap',
					columnGap: { xl: '37px', md: '37px' },
					rowGap: { xl: '60px', md: '60px' },
				}}
			>
				{products.map((item, index) => (
					<ProductItem
						key={index}
						isSkeleton={isSkeleton}
						title={item.title}
						ingredients={item.ingredients}
						price={item.price}
						discountPrice={item.discountPrice}
						image={item.image}
						amount={item.amount}
						typeModal={item.typeModal}
					/>
				))}
			</Box>
		</Box>
		// </Element>
	)
}

export default ProductSection
