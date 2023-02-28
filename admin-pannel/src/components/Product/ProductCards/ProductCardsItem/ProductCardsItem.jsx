import React, { useState } from 'react'
import {
	Box,
	Card,
	CardContent,
	CardHeader,
	CardMedia,
	SpeedDial,
	SpeedDialAction,
	SpeedDialIcon,
	Typography,
	Zoom,
} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import DeleteIcon from '@mui/icons-material/Delete'
import skeletonProductImage from '../../../../img/skeletoProduct.svg'
import { useInView } from 'react-intersection-observer'

const actions = [
	{
		name: 'remove',
		icon: <DeleteIcon />,
	},
	{
		name: 'edit',
		icon: <EditIcon />,
	},
]

const ProductCardsItem = ({
	loadingRef,
	title,
	image,
	ingredients,
	price,
	discountPrice,
	amount,
	category,
}) => {
	const [mouseHover, setMouseHover] = useState(false)
	const { ref, inView } = useInView({
		threshold: 0.2,
		triggerOnce: true,
	})
	return (
		<Card
			ref={loadingRef}
			onMouseEnter={() => setMouseHover(true)}
			onMouseLeave={() => setMouseHover(false)}
			elevation={4}
			sx={{
				position: 'relative',
				borderRadius: '20px',
				overflow: 'hidden!important',
				width: '550px',
				height: '320px',
				transition: '.3s',
				'&:hover': {
					// transform: 'scale(1.02)',
				},
			}}
		>
			{/*<Box sx={{ height: 20, transform: 'translateZ(0px)', flexGrow: 1 }}>*/}
			<Zoom in={mouseHover}>
				<Box
					sx={{
						position: 'absolute',
						top: 16,
						right: 16,
						height: '50px',
						// height: '60px!important',
					}}
				>
					<SpeedDial
						ariaLabel="SpeedDial"
						sx={{
							'& .MuiSpeedDial-fab': {
								// backgroundColor: '#000',
							},
						}}
						icon={
							<SpeedDialIcon openIcon={<EditIcon />} icon={<MoreVertIcon />} />
						}
						direction={'down'}
						// onClose={handleClose}
						// onOpen={handleOpen}
						// open={open}
					>
						{actions.map((action) => (
							<SpeedDialAction
								key={action.name}
								icon={action.icon}
								tooltipTitle={action.name}
								// onClick={handleClose}
							/>
						))}
					</SpeedDial>

					{/*</Box>*/}
				</Box>
			</Zoom>

			<CardHeader
				sx={{
					paddingBottom: '0',
				}}
				title={
					<Typography
						sx={{
							fontSize: '1.6rem',
							marginBottom: '0',
							// height: '1.2rem',

							display: '-webkit-box',
							maxHeight: '2.1rem',
							height: '2.1rem',
							WebkitLineClamp: '1',
							WebkitBoxOrient: 'vertical',
							overflow: 'hidden',
							// wordWrap: 'nowrap',
							textOverflow: 'ellipsis',
						}}
					>
						{title}
					</Typography>
				}
			></CardHeader>
			<CardContent
				sx={{
					display: 'flex',
					columnGap: '20px',
				}}
			>
				<CardMedia
					ref={ref}
					component={'img'}
					sx={{
						width: '190px',
						height: '190px',
						borderRadius: '20px',
					}}
					image={
						inView ? `http://localhost:5000/${image}` : skeletonProductImage
					}
				/>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						rowGap: '5px',
					}}
				>
					<Box
						sx={{
							display: 'flex',
							columnGap: '10px',
						}}
					>
						<Typography fontSize={'14px'}>Category:</Typography>
						<Typography fontSize={'14px'} color={'#42a5f5'}>
							{category}
						</Typography>
					</Box>
					<Box
						sx={{
							display: 'flex',
							columnGap: '10px',
						}}
					>
						<Typography fontSize={'14px'}>Amount:</Typography>
						<Typography fontSize={'14px'} color={'#42a5f5'}>
							{amount}
						</Typography>
					</Box>
					<Box
						sx={{
							display: 'flex',
							columnGap: '10px',
						}}
					>
						<Typography fontSize={'14px'}>Price:</Typography>
						<Typography fontSize={'14px'} color={'#42a5f5'}>
							{price}
						</Typography>
					</Box>
					<Box
						sx={{
							display: 'flex',
							columnGap: '10px',
						}}
					>
						<Typography fontSize={'14px'}>DiscountPrice:</Typography>
						<Typography fontSize={'14px'} color={'#42a5f5'}>
							{discountPrice}
						</Typography>
					</Box>

					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							rowGap: '5px',
						}}
					>
						<Typography fontSize={'14px'}>Ingredients:</Typography>
						<Typography
							sx={{
								display: '-webkit-box',
								fontSize: '14px',
								lineHeight: '1.2rem',
								maxHeight: '4.6rem',
								WebkitLineClamp: '3',
								WebkitBoxOrient: 'vertical',
								overflow: 'hidden',
							}}
							color={'#42a5f5'}
						>
							{ingredients}
						</Typography>
					</Box>
				</Box>
			</CardContent>
		</Card>
	)
}

export default ProductCardsItem
