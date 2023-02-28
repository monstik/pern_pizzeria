import React, { forwardRef } from 'react'
import { TextField } from '@mui/material'

const CustomTextField = (props, ref) => {
	return (
		<TextField
			{...props}
			required
			type={'tel'}
			inputRef={ref}
			label={'Phone number'}
			sx={{
				width: '100%',
				'& label.Mui-focused': {
					color: 'rgb(255, 105, 0)',
				},

				'& .MuiOutlinedInput-root': {
					'&.Mui-focused fieldset': {
						borderColor: 'rgb(255, 105, 0)',
					},
					'&:hover fieldset': {
						borderColor: 'rgb(255, 105, 0)',
					},
				},
			}}
		/>
	)
}

export default forwardRef(CustomTextField)
