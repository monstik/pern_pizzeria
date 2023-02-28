import React from 'react'
import { Box, Typography } from '@mui/material'
import StrokeButton from '../StrokeButton/StrokeButton'
import {
	addToCurrentProductWithout,
	removeFromCurrentProductWithout,
} from '../../../../features/ProductsSlice'

const ExtendedIngredients = ({
	ingredients,
	addIngredientWithout,
	removeIngredientWithout,
}) => {
	return (
		<Box
			sx={{
				display: 'flex',
				columnGap: '6px',
				rowGap: '3px',
				flexWrap: 'wrap',
			}}
		>
			{ingredients?.map((item, index) =>
				item.trimStart()[0] === '|' ? (
					<StrokeButton
						key={index}
						onAdd={
							() => addIngredientWithout(item.replace(/\|/, ''))
							// dispatch(
							// 	addToCurrentProductWithout(item.replace(/\|/, ''))
							// )
						}
						onDelete={
							() => removeIngredientWithout(item.replace(/\|/, ''))
							// dispatch(
							// 	removeFromCurrentProductWithout(
							// 		item.replace(/\|/, '')
							// 	)
							// )
						}
						text={item}
					/>
				) : (
					<Typography
						key={index}
						sx={{
							fontSize: '14px',
							color: '#000',
						}}
					>
						{`${item}, `}
					</Typography>
				)
			)}
		</Box>
	)
}

export default ExtendedIngredients
