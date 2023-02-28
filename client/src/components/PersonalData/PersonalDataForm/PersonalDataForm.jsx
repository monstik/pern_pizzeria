import React, { useEffect, useMemo } from 'react'
import {
	Box,
	Button,
	IconButton,
	InputAdornment,
	TextField,
	Tooltip,
	Typography,
} from '@mui/material'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'

import { useForm } from 'react-hook-form'
import TextFieldWithButtonInside from './TextFieldWithButtonInside/TextFieldWithButtonInside'
import {
	selectAccessToken,
	selectUser,
	updatePersonalData,
} from '../../../features/UserSlice'
import { useDispatch, useSelector } from 'react-redux'
import { selectNotificationMessage } from '../../../features/NotificationSlice'
const PersonalDataForm = () => {
	const user = useSelector(selectUser)
	const notification = useSelector(selectNotificationMessage)
	const accessToken = useSelector(selectAccessToken)
	const dispatch = useDispatch()
	const {
		register,
		handleSubmit,
		watch,
		reset,

		formState: { errors },
	} = useForm({
		defaultValues: {
			name: user?.name || '',
			phoneNumber: user?.phoneNumber || '',
			email: user?.email || '',
		},
		// defaultValues: useMemo(() => {
		// 	return {
		// 		name: user?.name || '',
		// 		phoneNumber: user?.phoneNumber || '',
		// 		email: user?.email || '',
		// 	}
		// }, [user]),
	})
	const watchAllFields = watch()
	// useEffect(() => {
	// 	const subscription = watch((value, { name, type }) =>
	// 		console.log('ebat', value, name, type)
	// 	)
	// 	return () => subscription.unsubscribe()
	// }, [watch])
	//
	useEffect(() => {
		reset(user)
	}, [user, notification])

	const onSubmit = (data) => {
		console.log(data)
	}
	const handleSave = async (data) => {
		console.log('blyat', data)
		dispatch(updatePersonalData(data))
		reset(user)
	}
	return (
		<Box
			component={'form'}
			// onSubmit={handleSubmit(handleSave)}
		>
			<Box>
				<Box
					sx={{
						marginTop: '20px',
					}}
				>
					<Typography
						sx={{
							mb: 1,
						}}
					>
						Name
					</Typography>
					<TextFieldWithButtonInside
						handleSave={handleSubmit(handleSave)}
						canSave={watchAllFields.name !== user.name}
						handleCancel={reset}
						register={register('name', { required: true })}
					/>
				</Box>

				<Box
					sx={{
						marginTop: '20px',
					}}
				>
					<Typography
						sx={{
							mb: 1,
						}}
					>
						Phone number
					</Typography>
					<TextFieldWithButtonInside
						handleSave={handleSubmit(handleSave)}
						canSave={watchAllFields.phoneNumber !== user.phoneNumber}
						handleCancel={reset}
						register={register('phoneNumber', { required: true })}
					/>
				</Box>

				<Box
					sx={{
						marginTop: '20px',
					}}
				>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
						}}
					>
						<Typography>Email</Typography>
						<Tooltip
							placement={'top'}
							arrow
							title={
								<Typography
									sx={{
										fontSize: '14px',
									}}
								>
									We will notify about new products and promotions
								</Typography>
							}
						>
							<IconButton>
								<InfoOutlinedIcon fontSize={'small'} />
							</IconButton>
						</Tooltip>
					</Box>

					<TextFieldWithButtonInside
						handleSave={handleSubmit(handleSave)}
						canSave={watchAllFields.email !== user.email}
						handleCancel={reset}
						register={register('email', { required: true })}
					/>
				</Box>
			</Box>
		</Box>
	)
}

export default PersonalDataForm
