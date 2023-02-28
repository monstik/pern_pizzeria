import React from 'react'
import { Box, CardMedia } from '@mui/material'
import SkeletonProductImage from '../../../../images/skeletoProduct.svg'
import CustomCacheImage from '../../../CustomCacheImage/CustomCache'

const ModalImage = ({ modalType, productImages, productSize }) => {
	return modalType === 'default' ? (
		<CardMedia
			sx={{
				width: '292px',
				height: '292px',

				margin: '48px',
			}}
			component={'img'}
			image={
				productImages?.split('|')[0]
					? `http://localhost:5000/${productImages?.split('|')[0]}`
					: SkeletonProductImage
			}
		/>
	) : (
		<Box
			sx={{
				width: '500px',
				height: '500px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<CardMedia
				sx={{
					// width: '292px',
					// height: '292px',
					transition: '.3s',
					// maxWidth: '100px',
					// maxHeight: '100px',
					width: ['60%', '70%', '80%'][productSize],
				}}
				component={'img'}
				image={
					productImages?.split('|')[productSize]
						? `http://localhost:5000/${productImages?.split('|')[productSize]}`
						: SkeletonProductImage
				}
			/>
			{/*<CustomCacheImage*/}
			{/*	src={*/}
			{/*		productImages?.split('|')[productSize] === undefined*/}
			{/*			? SkeletonProductImage*/}
			{/*			: `http://localhost:5000/${*/}
			{/*					productImages?.split('|')[productSize]*/}
			{/*			  }`*/}
			{/*	}*/}
			{/*	alt={'product'}*/}
			{/*/>*/}
			{/*	<CustomCacheImage*/}
			{/*		useSuspense={false}*/}
			{/*		src={*/}
			{/*			productImages === undefined*/}
			{/*				? SkeletonProductImage*/}
			{/*				: productImages.split('|')[0]*/}
			{/*		}*/}
			{/*		alt={'test'}*/}
			{/*	/>*/}
			{/*</CardMedia>*/}
		</Box>
	)
}

export default ModalImage
