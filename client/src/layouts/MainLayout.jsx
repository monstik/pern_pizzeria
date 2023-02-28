import React, { useEffect } from 'react'
import { Alert, Box, Snackbar } from '@mui/material'
import Header from '../components/Header/Header'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import {
	clearNotification,
	closeSnackbar,
	selectIsSnackbarOpen,
	selectNotificationMessage,
	selectNotificationType,
} from '../features/NotificationSlice'
import { getCategories, getProducts } from '../features/ProductsSlice'
import ProductModal from '../components/Modals/CommonProductModal/ProductModal'

const MainLayout = () => {
	const isSnackbarOpen = useSelector(selectIsSnackbarOpen)
	const notificationMessage = useSelector(selectNotificationMessage)
	const notificationType = useSelector(selectNotificationType)
	const dispatch = useDispatch()
	const location = useLocation()

	useEffect(() => {
		dispatch(getCategories())
		dispatch(getProducts())
		console.log(location)
	}, [])

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',

				// width: 'calc(100vw - 34px)',
			}}
		>
			<Snackbar
				open={isSnackbarOpen}
				autoHideDuration={6000}
				onClose={() => dispatch(closeSnackbar())}
			>
				<Alert
					onClose={() => dispatch(clearNotification())}
					severity={notificationType}
					sx={{ width: '100%' }}
				>
					{notificationMessage}
				</Alert>
			</Snackbar>
			<Header id={'0'} />
			<Box
				sx={{
					width: '100%',
				}}
			>
				<Outlet />
			</Box>
			{location.pathname.includes('/product/') && <Box />}
			<Footer />
		</Box>
	)
}

export default MainLayout
