import React, { useEffect } from 'react'
import {
	Box,
	Button,
	Card,
	CardMedia,
	Dialog,
	IconButton,
	Typography,
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import {
	addToCurrentProductWithout,
	closeSimpleProductModal,
	removeFromCurrentProductWithout,
	selectCurrentProduct,
	selectFilteredProduct,
	selectIsOpenSimpleProductModal,
	setCurrentProductSize,
	setSearchProductTerm,
} from '../../../features/ProductsSlice'
import { useNavigate, useParams } from 'react-router-dom'
import ModalImage from '../CommonProductModal/ModalImage/ModalImage'
import ExtendedIngredients from '../CommonProductModal/ExtendIngredients/ExtendedIngredients'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import SizeButtons from '../CommonProductModal/SizeButtons/SizeButtons'
import SkeletonProductImage from '../../../images/skeletoProduct.svg'

const SimpleProductModal = () => {
	const isOpenSimpleProductModal = useSelector(selectIsOpenSimpleProductModal)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const currentProduct = useSelector(selectCurrentProduct)

	const onCloseModal = () => {
		navigate('/pizza-shop')
		dispatch(closeSimpleProductModal())
	}

	return (
		<Dialog
			open={isOpenSimpleProductModal}
			onClose={onCloseModal}
			maxWidth={'xl'}
			PaperProps={{
				style: { borderRadius: 20, overflowY: 'unset', boxShadow: 'none' },
			}}
		>
			<Card
				elevation={0}
				sx={{
					display: 'flex',
					borderRadius: '20px',
				}}
			>
				<CardMedia
					sx={{
						width: '292px',
						height: '292px',

						margin: '48px',
					}}
					component={'img'}
					image={
						currentProduct?.image
							? `http://localhost:5000/${currentProduct.image.split('|')[0]}`
							: SkeletonProductImage
					}
				/>

				<Box
					sx={{
						width: '324px',
						padding: '0',
						margin: '32px',
						display: 'flex',
						flexDirection: 'column',
					}}
				>
					<Box>
						<Typography
							component={'h1'}
							sx={{
								fontSize: '24px',
								lineHeight: '28px',
								width: '90%',
							}}
						>
							{currentProduct?.title}
						</Typography>
						<Typography
							sx={{
								fontSize: '14px',
								color: 'rgb(92, 99, 112)',
								margin: '4px 0 6px 0',
							}}
						>
							{currentProduct?.amount?.split('|')[0]}
						</Typography>
						<Typography
							sx={{
								fontSize: '14px',
								display: 'flex',
								flexWrap: 'wrap',
							}}
						>
							{currentProduct?.ingredients
								?.split(',')
								.map((item) => `${item}, `)}
						</Typography>
					</Box>
					<Box
						sx={{
							position: 'absolute',
							right: '32px',
							top: '32px',
						}}
					>
						<IconButton
							sx={{
								color: '#000',
							}}
						>
							<InfoOutlinedIcon />
						</IconButton>
					</Box>

					<Box
						sx={{
							marginTop: 'auto',
							width: '100%',
							alignSelf: 'end',
						}}
					>
						<Button
							sx={{
								width: '100%',
								backgroundColor: 'rgb(255, 105, 0)',
								color: '#fff',
								padding: '12px 24px',
								borderRadius: '9999px',
								textTransform: 'none',
								fontSize: '16px',

								'&:hover': {
									backgroundColor: 'rgb(232, 97, 0)',
								},
								'&:active': {
									backgroundColor: 'rgb(255, 105, 0)',
									color: 'rgb(255, 165, 102)',
								},
							}}
						>{`Add to basket for ${currentProduct?.price}`}</Button>
					</Box>
				</Box>
			</Card>
			<Box
				sx={{
					position: 'absolute',
					right: '-45px',
					top: '6px',
				}}
			>
				<IconButton onClick={onCloseModal}>
					<svg
						width="25"
						height="25"
						viewBox="0 0 25 25"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M9.84606 12.4986L0.552631 3.20519C-0.1806 2.47196 -0.1806 1.28315 0.552631 0.549923C1.28586 -0.183308 2.47466 -0.183308 3.20789 0.549923L12.5013 9.84335L21.792 0.552631C22.5253 -0.1806 23.7141 -0.1806 24.4473 0.552631C25.1805 1.28586 25.1805 2.47466 24.4473 3.20789L15.1566 12.4986L24.45 21.792C25.1832 22.5253 25.1832 23.7141 24.45 24.4473C23.7168 25.1805 22.528 25.1805 21.7947 24.4473L12.5013 15.1539L3.20519 24.45C2.47196 25.1832 1.28315 25.1832 0.549923 24.45C-0.183308 23.7168 -0.183308 22.528 0.549923 21.7947L9.84606 12.4986Z"
							fill="white"
						></path>
					</svg>
				</IconButton>
			</Box>
		</Dialog>
	)
}

export default SimpleProductModal
