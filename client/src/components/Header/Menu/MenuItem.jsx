import React from 'react'
import { Box, Link, Typography } from '@mui/material'

import { Link as RouterLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectActiveSectionId } from '../../../features/NavigationBarSlice'
const MenuItem = ({ onClick, name, route, isActive }) => {
	return (
		<Link
			onClick={onClick}
			sx={{
				textDecoration: 'none',
				color: isActive ? 'rgb(255, 105, 0)' : '#000',
				cursor: 'pointer',
				transition: '.3s ease',
				'&:hover': {
					color: 'rgb(255, 105, 0)',
				},
			}}
		>
			<Typography
				sx={{
					fontSize: '14px',
				}}
			>
				{name}
			</Typography>
		</Link>
	)
}

export default MenuItem
