import React, { useState } from 'react'
import { Box, Button, InputAdornment, TextField } from '@mui/material'

const TextFieldWithButtonInside = ({
	handleSave,
	handleCancel,
	register,
	canSave,
	label,
}) => {
	const [isChecked, setIsChecked] = useState(false)

	const handleButtonSave = () => {
		if (canSave) {
			handleSave()
			setIsChecked(false)
		}

		// console.log('test')
	}

	const handleChangeButton = () => {
		setIsChecked(true)
	}

	const handleButtonCancel = (e) => {
		handleCancel()

		setIsChecked(false)
	}

	return (
		<Box
			sx={{
				display: 'flex',
			}}
		>
			<TextField
				size={'small'}
				disabled={!isChecked}
				sx={{
					'& input': {
						cursor: !isChecked && 'not-allowed',
					},

					'& .MuiInputBase-input.Mui-disabled input ': {
						cursor: !isChecked && 'not-allowed',
					},

					'& .MuiOutlinedInput-root': {
						border: 'none',
						borderRadius: '10px',
						backgroundColor: !isChecked && 'rgb(243, 243, 247)',
					},

					'& .MuiOutlinedInput-root.Mui-focused  .MuiOutlinedInput-notchedOutline':
						{ borderColor: 'rgb(255, 105, 0)' },
				}}
				{...register}
				InputProps={{
					style: {
						padding: '0',
						width: '340px',
					},

					endAdornment: (
						<InputAdornment position="end">
							{isChecked ? (
								<Button
									variant="Text"
									color="primary"
									// type={canSave ? 'submit' : 'button'}
									onClick={handleButtonSave}
									sx={{
										textTransform: 'none',
										color: canSave ? 'rgb(255, 105, 0)' : 'rgb(171, 173, 186)',
									}}
								>
									Save
								</Button>
							) : (
								<Button
									variant="Text"
									color="primary"
									onClick={handleChangeButton}
									sx={{
										textTransform: 'none',
										color: 'rgb(255, 105, 0)',
									}}
								>
									Change
								</Button>
							)}
						</InputAdornment>
					),
				}}
			/>
			{isChecked && (
				<Button
					variant="Text"
					color="primary"
					onClick={handleButtonCancel}
					sx={{
						textTransform: 'none',
						color: 'rgb(255, 105, 0)',
					}}
				>
					Cancel
				</Button>
			)}
		</Box>
	)
}

export default TextFieldWithButtonInside
