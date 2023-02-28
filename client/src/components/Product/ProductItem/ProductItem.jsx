import React, { useState } from 'react'
import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	Paper,
	Skeleton,
	Typography,
} from '@mui/material'

import SkeletonProductImage from '../../../images/skeletoProduct.svg'
import { useDispatch } from 'react-redux'
import {
	openProductModal,
	setCurrentProduct,
	setCurrentProductAmount,
	setIsOpenProductModal,
	setSearchProductTerm,
} from '../../../features/ProductsSlice'
import { useInView } from 'react-intersection-observer'
import CustomCacheImage from '../../CustomCacheImage/CustomCache'
import { useNavigate, useSearchParams } from 'react-router-dom'

const ProductItem = ({
	title,
	ingredients,
	price,
	discountPrice,
	image,
	amount,
	typeModal,
	isSkeleton = false,
}) => {
	const [mouseHover, setMouseHover] = useState(false)
	const dispatch = useDispatch()
	const { inView, ref } = useInView({
		threshold: 0.1,
		triggerOnce: true,
	})
	const navigate = useNavigate()

	const onProductClick = () => {
		navigate(`product/${title}`)
		// dispatch(
		// 	openProductModal({
		// 		title,
		// 		ingredients: ingredients?.split(','),
		// 		price,
		// 		discountPrice,
		// 		image,
		// 		amount,
		// 		typeModal,
		// 	})
		// )
	}

	return (
		<Card
			ref={ref}
			onClick={onProductClick}
			onMouseEnter={() => setMouseHover(true)}
			onMouseLeave={() => setMouseHover(false)}
			sx={{
				width: { xl: '292px', md: '292px' },
				height: '500px',
				// backgroundColor: mouseHover ? "red" : "green",
				borderRadius: '15px',
				transition: '.4s',
				boxShadow: mouseHover
					? '0px 13px 76px -17px rgba(0,0,0,0.45)'
					: '0px 13px 76px -17px rgba(0,0,0,0.15)',
				boxSizing: 'border-box',
				position: 'relative',
				'&:hover': {
					cursor: 'pointer',
					transform: 'scale(1.05)',
				},
			}}
		>
			{/*<CardMedia*/}
			{/*	component={CustomCacheImage}*/}
			{/*	// sx={{*/}
			{/*	//   height: "100%",*/}
			{/*	// }}*/}

			{/*	sx={{*/}
			{/*		minHeight: '292px',*/}
			{/*		minWidth: '292px',*/}

			{/*		// margin: isSkeleton ? '0' : '5% 0 0 5%',*/}
			{/*		objectFit: 'cover',*/}
			{/*		margin: '10px auto 0 ',*/}
			{/*	}}*/}
			{/*	src={`http://localhost:5000/${image?.split('|')[0]}`}*/}
			{/*	alt={'product'}*/}
			{/*	// useCache={true}*/}
			{/*	// image={*/}
			{/*	// 	inView*/}
			{/*	// 		? isSkeleton*/}
			{/*	// 			? SkeletonProductImage*/}
			{/*	// 			: `http://localhost:5000/${image?.split('|')[0]}`*/}
			{/*	// 		: SkeletonProductImage*/}
			{/*	// }*/}
			{/*/>*/}
			<CardMedia
				sx={{
					minHeight: '292px',
					minWidth: '292px',
					'& img': {
						width: '100%',
						height: '100%',

						minHeight: '292px',
						minWidth: '292px',

						// margin: isSkeleton ? '0' : '5% 0 0 5%',
						objectFit: 'cover',
						margin: '10px auto 0 ',
					},
				}}
			>
				{inView ? (
					<CustomCacheImage
						useSuspense={true}
						src={
							image?.split('|')[0] === undefined
								? SkeletonProductImage
								: `http://localhost:5000/${image?.split('|')[0]}`
						}
						alt={title}
					/>
				) : (
					<img src={SkeletonProductImage} alt={'skeleton'} />
				)}
			</CardMedia>
			<Box
				sx={{
					padding: '10px',

					// position: "relative",
				}}
			>
				{isSkeleton ? (
					<Skeleton
						sx={{ backgroundColor: 'grey.600', fontSize: '1rem' }}
						variant="text"
						width={140}
					/>
				) : (
					<Typography
						sx={{
							fontSize: '20px',
							fontWeight: '500',
							margin: '8px 0',
						}}
					>
						{title}
					</Typography>
				)}

				{isSkeleton ? (
					<Box>
						<Skeleton variant="text" sx={{ fontSize: '1rem' }} />
						<Skeleton variant="text" sx={{ fontSize: '1rem' }} />
						<Skeleton variant="text" sx={{ fontSize: '1rem' }} />
					</Box>
				) : (
					<Typography
						sx={{
							fontSize: '14px',
							lineHeight: '1.4em',
							color: 'rgb(92, 99, 112)',
							// textOverflow: "ellipsis ",
							// overflow: "hidden",
							// whiteSpace: "nowrap",
							// height: "4.2em",
							//

							display: '-webkit-box',
							maxHeight: '4.2em',
							WebkitLineClamp: '3',
							WebkitBoxOrient: 'vertical',
							overflow: 'hidden',
						}}
					>
						{/*{ingredients?.replace(//g, ' ')}*/}
						{ingredients?.replace(/\|/g, '')}
					</Typography>
				)}
			</Box>
			<CardActions
				sx={{
					// position: "absolute",
					position: 'absolute',
					bottom: '3px',
					display: 'flex',
					justifyContent: 'space-between',
					width: '100%',
				}}
			>
				{isSkeleton ? (
					<Skeleton
						sx={{ backgroundColor: 'grey.600', fontSize: '1rem' }}
						variant="text"
						width={100}
					/>
				) : (
					<Typography
						sx={{
							fontSize: '19px',
							fontWeight: '600',
						}}
					>
						{price}
					</Typography>
				)}

				<Button
					sx={{
						width: '120px',
						height: '40px',
						borderRadius: '100px',
						fontSize: '16px',
						backgroundColor: 'rgb(255, 240, 230)',
						color: 'rgb(209, 87, 0)',
						'&:hover': {
							backgroundColor: 'rgb(255, 210, 179)',
						},
						'&:active': {
							boxShadow: 'none',
							backgroundColor: 'rgb(255, 240, 230)',
							color: 'rgb(255, 210, 179)',
							// color: "rgb(255, 240, 230)",
							// borderColor: "rgb(209, 87, 0)",
						},

						textTransform: 'none',
					}}
				>
					Select
				</Button>
			</CardActions>
		</Card>
	)
}

export default ProductItem
