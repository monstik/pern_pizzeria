import React, { useEffect } from 'react'
import { Box, Button, Typography } from '@mui/material'
import PersonalDataForm from '../components/PersonalData/PersonalDataForm/PersonalDataForm'
import Logo from '../components/Header/Logo/Logo'
import { Element } from 'react-scroll'
import { scrollToSection } from '../components/Header/Menu/Menu'
import { useDispatch } from 'react-redux'
import { logout } from '../features/UserSlice'
import { useNavigate } from 'react-router-dom'

const ProfilePage = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	useEffect(() => {
		scrollToSection('#personal-data', 400)
	}, [])

	const handlerLogout = () => {
		navigate('/pizza-shop')
		dispatch(logout())
	}

	return (
		<Box
			sx={{
				margin: '0 auto',
				maxWidth: '1280px',
				minHeight: '60vh',
				pb: 5,
			}}
		>
			<Box
				sx={{
					marginTop: '40px',
				}}
			>
				<Element name={'#personal-data'}>
					<Typography
						sx={{
							fontSize: '24px',
						}}
					>
						Personal data
					</Typography>
				</Element>
			</Box>
			<Box>
				<PersonalDataForm />
			</Box>
			<Box>
				<Button
					sx={{
						mt: 4,
						backgroundColor: 'rgb(255, 105, 0)',
						color: 'rgb(255, 255, 255)',
						borderRadius: '100px',
						fontSize: '16px',
						lineHeight: '24px',
						padding: '8px 24px',
						textTransform: 'none',
						height: '40px',
						minWidth: '90px',
						'&:hover': {
							backgroundColor: 'rgb(232, 97, 0)',
						},

						'&:active': {
							backgroundColor: 'rgb(255, 105, 0)',
							color: 'rgb(255, 165, 102)',
						},
					}}
					variant={'text'}
					onClick={handlerLogout}
				>
					Logout
				</Button>
			</Box>
		</Box>
	)
}

export default ProfilePage
