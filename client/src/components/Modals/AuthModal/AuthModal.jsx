import React, { useState } from 'react'
import { Box, Button, Dialog, TextField, Typography } from '@mui/material'

import { useDispatch, useSelector } from 'react-redux'
import {
	login,
	registration,
	selectIsAuth,
	selectIsOpenAuthModal,
	setIsOpenAuthModal,
} from '../../../features/UserSlice'
import PhoneInput from 'react-phone-number-input/react-hook-form-input'
import { isValidPhoneNumber } from 'react-phone-number-input'
import CustomTextField from './CustomTextField/CustomTextField'
import { useForm } from 'react-hook-form'

const AuthModal = () => {
	const isOpenAuthModal = useSelector(selectIsOpenAuthModal)
	const dispatch = useDispatch()
	const [authMode, setAuthMode] = useState(false)
	const isAuth = useSelector(selectIsAuth)
	const {
		register,
		control,
		handleSubmit,

		formState: { errors },
	} = useForm()

	const handleOnSubmit = async (data) => {
		if (authMode) {
			dispatch(registration(data))
		} else {
			dispatch(login(data))
		}
	}

	return (
		<Dialog
			open={isAuth ? false : isOpenAuthModal}
			onClose={() => dispatch(setIsOpenAuthModal(false))}
			PaperProps={{
				style: {
					borderRadius: 20,
					overflowY: 'unset',
					boxShadow: 'none',
				},
			}}
		>
			<Box
				sx={{
					width: '400px',
					minHeight: '400px',
					padding: '28px',
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<Typography
					sx={{
						fontSize: '36px',
					}}
				>
					{authMode ? 'Sign up' : 'Sing in'}
				</Typography>

				<Box
					sx={{
						mt: 2,
					}}
					component={'form'}
					onSubmit={handleSubmit(handleOnSubmit)}
				>
					<Box
						sx={{
							height: '90px',
						}}
					>
						<PhoneInput
							international
							country={'UA'}
							name={'phoneNumber'}
							withCountryCallingCode
							control={control}
							rules={{
								required: true,
								validate: isValidPhoneNumber,
							}}
							inputComponent={CustomTextField}
							error={!!errors.phoneNumber}
							helperText={
								errors.phoneNumber
									? errors.phoneNumber.type === 'required'
										? 'phone number is required'
										: 'invalid phone number'
									: undefined
							}
						/>
					</Box>
					<Box
						sx={{
							height: '90px',
						}}
					>
						<TextField
							type={'password'}
							label={'Password'}
							name={'password'}
							{...register('password', { required: true })}
							// rules={{ required: true }}
							error={!!errors.password}
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
					</Box>
					<Button
						disabled={!!errors.phoneNumber || !!errors.password}
						sx={{
							color: '#fff',
							backgroundColor: 'rgb(255, 105, 0)',
							width: '100%',
							borderRadius: '99px',
							'&:hover': {
								backgroundColor: 'rgb(232, 97, 0)',
							},
							'&:active': {
								backgroundColor: 'rgb(255, 105, 0)',
								color: 'rgb(255, 165, 102)',
							},
						}}
						type={'submit'}
					>
						{authMode ? 'Registration' : 'Login'}
					</Button>
				</Box>

				<Box
					sx={{
						display: 'flex',
						columnGap: '10px',
						marginTop: 'auto',
						alignSelf: 'center',
					}}
				>
					<Typography
						sx={{
							fontSize: '18px',
							fontWeight: 500,
						}}
					>
						{authMode
							? 'Have an account already?'
							: "Don't Have an account already?"}
					</Typography>
					<Typography
						sx={{
							cursor: 'pointer',
							color: 'rgb(232, 97, 0)',
							fontWeight: '500',
						}}
						onClick={() => setAuthMode(!authMode)}
					>
						{authMode ? 'Sing in' : 'Sign up'}
					</Typography>
				</Box>
			</Box>
			<Box
				onClick={() => dispatch(setIsOpenAuthModal(false))}
				sx={{
					position: 'absolute',
					right: '-50px',
					cursor: 'pointer',
					transition: 'transform .5s',
					width: '24px',
					height: '24px',
					'&:hover': {
						transform: 'rotate(180deg) scale(1.1)',
					},
				}}
			>
				<svg width="25" height="25" viewBox="0 0 25 25" fill="none">
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M9.61 12.199L.54 3.129A1.833 1.833 0 113.13.536l9.07 9.07L21.27.54a1.833 1.833 0 012.592 2.592l-9.068 9.068 9.07 9.07a1.833 1.833 0 01-2.59 2.592l-9.072-9.07-9.073 9.073a1.833 1.833 0 01-2.591-2.592L9.61 12.2z"
						fill="#fff"
					></path>
				</svg>
			</Box>
		</Dialog>
	)
}

export default AuthModal
