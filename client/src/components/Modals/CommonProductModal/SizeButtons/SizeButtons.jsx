import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Box, Button, Typography } from '@mui/material'

const SizeButtons = ({ sizes, setCurrentSize, currentSize }) => {
	return (
		<Box
			sx={{
				position: 'relative',
				height: '32px',
				backgroundColor: 'rgb(243, 243, 247)',
				borderRadius: '20px',
				display: 'flex',
				margin: '12px 0',
			}}
		>
			<Box
				sx={{
					position: 'absolute',
					width: '32.7%',
					// height: '100%',
					padding: '2px',
					boxShadow: 'rgb(6 5 50 / 19%) 0px 6px 20px',
					backgroundColor: '#fff',
					transition: '.4s',
					borderRadius: '20px',
					transform: `translateX(${currentSize}00%)`,
					zIndex: '1',
					top: '3px',
					bottom: '3px',
					right: '3px',
					left: '3px',

					// top: '0px',
					// left: '0px',
					// bottom: '0px',
				}}
			></Box>
			{sizes?.split('|').map((item, index) => (
				<Box
					sx={{
						width: 'calc(33.3333%)',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						cursor: 'pointer',
						zIndex: '2',
					}}
					key={index}
					onClick={() => setCurrentSize(index, item)}
				>
					<Typography
						sx={{
							fontSize: '12px',
							userSelect: 'none',
						}}
					>
						{item.split(',')[0]}
					</Typography>
				</Box>
			))}
		</Box>
	)
}

export default SizeButtons
