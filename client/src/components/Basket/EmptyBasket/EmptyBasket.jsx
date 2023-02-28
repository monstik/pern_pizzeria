import React from 'react'
import { Box, Typography } from '@mui/material'
import emptyBasket from '../../../images/emptyBasket.svg'

const EmptyBasket = () => {
	return (
		<Box
			sx={{
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			<Box
				component={'img'}
				src={emptyBasket}
				alt={'empty basket'}
				sx={{
					width: '100%',
					maxWidth: '314px',
				}}
			/>
			<Typography fontSize={21} fontWeight={500} margin={'17px 0'}>
				Oops, it’s empty here!
			</Typography>

			<Typography fontSize={14}>
				Minimal order delivery value is £10.00
			</Typography>
		</Box>
	)
}

export default EmptyBasket
