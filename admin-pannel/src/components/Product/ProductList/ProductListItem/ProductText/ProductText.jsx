import React from 'react'
import { Box, Tooltip, Typography } from '@mui/material'

const ProductText = ({ title, text }) => {
	return (
		<Box
			sx={{
				// width: '100px',
				// overflow: 'hidden',
				width: '130px',
				textOverflow: 'ellipsis',
				overflow: 'hidden',
				whiteSpace: 'nowrap',
				display: 'flex',
				justifyContent: 'center',
			}}
		>
			<Tooltip
				componentsProps={{
					tooltip: { sx: { backgroundColor: '#222831' } },
				}}
				title={
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
						}}
					>
						<Typography
							sx={{
								textTransform: 'capitalize',
							}}
						>
							{title}:
						</Typography>
						<Typography>{text}</Typography>
					</Box>
				}
			>
				<Typography
					sx={{
						maxWidth: '130px',
						width: 'max-content',
						textOverflow: 'ellipsis',
						whiteSpace: 'nowrap',
						overflow: 'hidden',
					}}
				>
					{text}
				</Typography>
			</Tooltip>
		</Box>
	)
}

export default ProductText
