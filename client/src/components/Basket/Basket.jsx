import React from 'react'
import { Box, Drawer, Typography } from '@mui/material'
import {
	selectIsOpenBasket,
	setIsOpenBasket,
} from '../../features/NavigationBarSlice'
import { useDispatch, useSelector } from 'react-redux'
import EmptyBasket from './EmptyBasket/EmptyBasket'
import CloseIcon from '@mui/icons-material/Close'

const Basket = () => {
	const isOpenBasket = useSelector(selectIsOpenBasket)
	const dispatch = useDispatch()
	return (
		<Drawer
			anchor={'right'}
			onClose={() => dispatch(setIsOpenBasket(false))}
			open={isOpenBasket}
			PaperProps={{
				style: {
					overflowY: 'unset',
				},
			}}
		>
			<Box
				sx={{
					width: '430px',
					height: '100%',
					padding: '30px',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<EmptyBasket />
				<Box
					onClick={() => dispatch(setIsOpenBasket(false))}
					sx={{
						position: 'absolute',
						left: '-50px',
						cursor: 'pointer',
						transition: 'transform .5s',
						width: '24px',
						height: '24px',
						'&:hover': {
							transform: 'rotate(180deg) scale(1.1)',
						},
					}}
				>
					<svg width="25" height="25" viewBox="0 0 25 25" fill="none">
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M9.61 12.199L.54 3.129A1.833 1.833 0 113.13.536l9.07 9.07L21.27.54a1.833 1.833 0 012.592 2.592l-9.068 9.068 9.07 9.07a1.833 1.833 0 01-2.59 2.592l-9.072-9.07-9.073 9.073a1.833 1.833 0 01-2.591-2.592L9.61 12.2z"
							fill="#fff"
						></path>
					</svg>
					{/*<CloseIcon*/}
					{/*	fontSize={'large'}*/}
					{/*	sx={{*/}
					{/*		color: '#fff',*/}
					{/*		cursor: 'pointer',*/}
					{/*		transition: 'transform .45s',*/}
					{/*		'&:hover': {*/}
					{/*			transform: 'rotate(180deg)',*/}
					{/*		},*/}
					{/*	}}*/}
					{/*/>*/}
				</Box>
			</Box>
		</Drawer>
	)
}

export default Basket
