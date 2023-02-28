import React from 'react'
import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'

const MainLayout = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<Header />
			<Box
				sx={{
					width: '100%',
				}}
			>
				<Outlet />
			</Box>
		</Box>
	)
}

export default MainLayout
