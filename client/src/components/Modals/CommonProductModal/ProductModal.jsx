import React, { useEffect } from 'react'
import {
	Box,
	Button,
	Card,
	Dialog,
	IconButton,
	Typography,
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import {
	addToCurrentProductWithout,
	closeProductModal,
	removeFromCurrentProductWithout,
	selectCurrentProductSize,
	selectFilteredProduct,
	selectIsOpenProductModal,
	setIsOpenProductModal,
	setSearchProductTerm,
	setCurrentProductSize,
} from '../../../features/ProductsSlice'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import SizeButtons from './SizeButtons/SizeButtons'
import ExtendedIngredients from './ExtendIngredients/ExtendedIngredients'
import ModalImage from './ModalImage/ModalImage'
import { useNavigate, useParams } from 'react-router-dom'

const ProductModal = () => {
	const isOpenProductModal = useSelector(selectIsOpenProductModal)
	const currentProductSize = useSelector(selectCurrentProductSize)
	const filteredProduct = useSelector(selectFilteredProduct)
	const dispatch = useDispatch()
	const { productTitle } = useParams()
	const navigate = useNavigate()

	useEffect(() => {
		dispatch(setSearchProductTerm(productTitle))
		console.log(filteredProduct)
		dispatch(setIsOpenProductModal(true))
	}, [productTitle])

	const onCloseModal = () => {
		navigate('/pizza-shop')
		dispatch(closeProductModal())
	}

	return (
		<Dialog
			open={isOpenProductModal}
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
				<ModalImage
					productImages={filteredProduct?.image}
					productSize={currentProductSize?.id}
					modalType={filteredProduct?.typeModal}
				/>

				<Box
					sx={{
						width: filteredProduct?.typeModal === 'default' ? '324px' : '380px',
						padding: filteredProduct?.typeModal === 'default' ? '0' : '30px',
						margin: filteredProduct?.typeModal === 'default' ? '32px' : '0',
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
							{filteredProduct?.title}
						</Typography>

						{filteredProduct?.amount?.split('|').length > 1 ? (
							<Typography
								sx={{
									fontSize: '14px',
									color: 'rgb(92, 99, 112)',
									margin: '4px 0 6px 0',
								}}
							>
								{filteredProduct?.amount?.split('|')[currentProductSize.id]}
							</Typography>
						) : (
							<Typography
								sx={{
									fontSize: '14px',
									color: 'rgb(92, 99, 112)',
									margin: '4px 0 6px 0',
								}}
							>
								{filteredProduct?.amount?.split('|')[0]}
							</Typography>
						)}

						{filteredProduct?.typeModal === 'default' ? (
							<Typography
								sx={{
									fontSize: '14px',
									display: 'flex',
									flexWrap: 'wrap',
								}}
							>
								{filteredProduct?.ingredients
									?.split(',')
									.map((item) => `${item}, `)}
							</Typography>
						) : (
							<ExtendedIngredients
								ingredients={filteredProduct?.ingredients.split(',')}
								addIngredientWithout={(currentWithout) =>
									dispatch(addToCurrentProductWithout())
								}
								removeIngredientWithout={(currentWithout) =>
									dispatch(removeFromCurrentProductWithout())
								}
							/>
						)}
					</Box>
					<Box
						sx={{
							position: 'absolute',
							right: filteredProduct?.typeModal === 'default' ? '32px' : '28px',
							top: filteredProduct?.typeModal === 'default' ? '32px' : '28px',
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
					{filteredProduct?.typeModal !== 'default' && (
						<SizeButtons
							sizes={filteredProduct?.amount}
							currentSize={currentProductSize.id}
							setCurrentSize={(id, size) =>
								dispatch(setCurrentProductSize({ id, size }))
							}
						/>
					)}

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
						>{`Add to basket for ${filteredProduct?.price}`}</Button>
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

export default ProductModal
