import React from 'react'
import { Box, Card, CardMedia, Tooltip, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import ProductCardsItem from '../../ProductCards/ProductCardsItem/ProductCardsItem'
import ProductText from './ProductText/ProductText'
import { useInView } from 'react-intersection-observer'
import skeletonProductImage from '../../../../img/skeletoProduct.svg'
const ProductListItem = ({
	productId,
	loadingRef,
	title,
	ingredients,
	image,
	price,
	discountPrice,
	amount,
	category,
}) => {
	const { ref, inView } = useInView({
		threshold: 0.2,
		triggerOnce: true,
	})

	return (
		<Box ref={loadingRef}>
			<Card
				ref={ref}
				sx={{
					display: 'flex',
					alignItems: 'center',
					columnGap: '20px',
				}}
			>
				<Box>
					<Box sx={{ width: '60px', height: '60px' }}>
						<Tooltip
							componentsProps={{ tooltip: { sx: { padding: '0px' } } }}
							placement={'right-start'}
							title={
								<Card>
									<CardMedia
										sx={{
											width: '300px',
										}}
										component={'img'}
										image={
											inView
												? `http://localhost:5000/${image}`
												: skeletonProductImage
										}
									/>
								</Card>
							}
						>
							<CardMedia
								sx={{
									width: '60px',
								}}
								component={'img'}
								image={
									inView
										? `http://localhost:5000/${image}`
										: skeletonProductImage
								}
							/>
						</Tooltip>
					</Box>
				</Box>

				<ProductText title={'title'} text={title} />
				<ProductText title={'category'} text={category} />
				<ProductText title={'ingredients'} text={ingredients} />
				<ProductText title={'id'} text={productId} />
				<ProductText title={'price'} text={price} />
				<ProductText title={'discount price'} text={discountPrice} />
				<ProductText title={'amount'} text={amount} />
			</Card>
		</Box>
	)
}

export default ProductListItem
