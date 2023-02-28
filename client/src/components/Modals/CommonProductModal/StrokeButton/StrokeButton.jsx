import React, { useState } from 'react'
import { Box, Button, Typography } from '@mui/material'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined'
const StrokeButton = ({ text, id, onAdd, onDelete }) => {
	const [isChecked, setIsChecked] = useState(false)
	const onButtonClick = () => {
		if (isChecked) {
			onDelete()
		} else {
			onAdd()
		}
		setIsChecked(!isChecked)
	}

	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				columnGap: '2px',
			}}
		>
			<Typography
				onClick={onButtonClick}
				sx={{
					color: isChecked ? 'grey' : '#000',
					cursor: 'pointer',
					textDecoration: isChecked ? 'line-through' : 'underline dotted',
					textUnderlineOffset: '5px',
					fontSize: '13px',
					fontWeight: '500',
				}}
				variant={'text'}
			>
				{text.replace(/\|/, '')}
			</Typography>
			{isChecked ? (
				<Box
					onClick={onButtonClick}
					sx={{
						cursor: 'pointer',
						width: '14px',
						height: '14px',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<svg
						width="14"
						height="14"
						viewBox="0 0 14 14"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<circle
							cx="7"
							cy="7"
							r="6.6"
							stroke="#737272"
							strokeWidth="0.8"
						></circle>
						<path
							d="M4.687 9.41667C4.687 9.41667 5.58895 9.41667 8.1095 9.41667C10.63 9.41667 10.6303 5.46995 8.1095 5.46995C5.58871 5.46995 5.88146 5.46995 4.82073 5.46995M3.5 5.46995L5.55039 6.90736L4.82073 5.46995M3.5 5.46995L5.55039 4L4.82073 5.46995M3.5 5.46995C3.5 5.46995 4.19855 5.46995 4.82073 5.46995"
							stroke="#737272"
							strokeLinecap="round"
							strokeLinejoin="round"
						></path>
					</svg>
				</Box>
			) : (
				<Box
					onClick={onButtonClick}
					sx={{
						cursor: 'pointer',
						width: '14px',
						height: '14px',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<svg
						width="14"
						height="14"
						viewBox="0 0 14 14"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<circle
							cx="7"
							cy="7"
							r="6.6"
							stroke="#737272"
							strokeWidth="0.8"
						></circle>
						<path
							d="M5 5L9 9"
							stroke="#737272"
							strokeWidth="1.2"
							strokeLinecap="round"
							strokeLinejoin="round"
						></path>
						<path
							d="M9 5L5 9"
							stroke="#737272"
							strokeWidth="1.2"
							strokeLinecap="round"
							strokeLinejoin="round"
						></path>
					</svg>
				</Box>
			)}
		</Box>
	)
}

export default StrokeButton
