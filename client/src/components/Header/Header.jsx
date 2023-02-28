import React, { useEffect } from 'react'
import { Box, Button, Drawer, Typography } from '@mui/material'
import Menu, { scrollToSection } from './Menu/Menu'
import Logo from './Logo/Logo'
import { useInView } from 'react-intersection-observer'
import { Element } from 'react-scroll'
import { useDispatch, useSelector } from 'react-redux'
import {
	selectIsOpenBasket,
	setIsOpenBasket,
	setSectionId,
} from '../../features/NavigationBarSlice'
import Basket from '../Basket/Basket'
import AuthModal from '../Modals/AuthModal/AuthModal'
import { selectIsAuth, setIsOpenAuthModal } from '../../features/UserSlice'
import { useNavigate } from 'react-router-dom'

const Header = () => {
	const { ref, inView, entry } = useInView({
		/* Optional options */
		threshold: 0,
		initialInView: true,
	})

	const isOpenBasket = useSelector(selectIsOpenBasket)
	const isAuth = useSelector(selectIsAuth)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	useEffect(() => {
		if (inView) {
			dispatch(setSectionId(null))
		}
	}, [inView])
	return (
		<Box
			sx={{
				// height: "40px",
				// width: "40px",

				zIndex: '1000',
				position: 'relative',
			}}
		>
			<Box
				ref={ref}
				sx={{
					display: 'flex',
					alignItems: 'center',
					maxWidth: '1280px',
					margin: '24px auto 16px',
					columnGap: '40px',
				}}
			>
				<Box
					onClick={() => navigate('/pizza-shop')}
					sx={{
						display: 'flex',
						alignItems: 'center',
						'&:hover': {
							cursor: 'pointer',
						},
					}}
				>
					<Element name={'#header'}>
						<Box
							sx={{
								width: '49px',
								height: '49px',
							}}
						>
							<Logo />
						</Box>
					</Element>

					<Typography
						sx={{
							textTransform: 'uppercase',
							fontWeight: 900,
							fontSize: '28px',
							marginLeft: '8px',
						}}
					>
						dodo pizza
					</Typography>
				</Box>

				<Box>
					<Box
						sx={{
							display: 'flex',
						}}
					>
						<Typography
							sx={{
								fontSize: '17px',
								lineHeight: '1.2',
								fontWeight: '500',
							}}
						>
							Gourmet pizza delivery in &nbsp;
						</Typography>
						<Typography
							sx={{
								fontSize: '17px',
								lineHeight: '1.2',
								fontWeight: '500',
								color: 'rgb(232, 97, 0)',
								'&:hover': {
									color: 'rgb(232, 97, 0)',
									cursor: 'pointer',
								},
							}}
						>
							Brighton
						</Typography>
					</Box>
					<Box>
						<Typography
							sx={{
								fontSize: '14px',
								color: '#999',
							}}
						>
							Eat-in / Takeaway / Delivery
						</Typography>
					</Box>
				</Box>
				<Box>
					<Typography
						sx={{
							textDecoration: 'none',
							fontSize: '17px',
							fontWeight: '500',
							lineHeight: '1.2',
							color: '#000',
						}}
						href={'tel:01273567356'}
						component={'a'}
					>
						01273 567356
					</Typography>
					<Typography
						sx={{
							fontSize: '14px',
							color: '#999',
						}}
					>
						Call
					</Typography>
				</Box>
				<Box
					sx={{
						marginLeft: 'auto',
					}}
				>
					{isAuth ? (
						<Button
							onClick={() => navigate('/profile')}
							variant={'contained'}
							disableElevation
							sx={{
								padding: 0,
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								backgroundColor: 'transparent',

								'& div': {
									transition: 'transform .4s ease',
									'& svg path': {
										transition: 'fill 150ms ease 0s',
									},
								},
								'& p': {
									transition: 'fill 150ms ease 0s',
								},

								'&:hover': {
									backgroundColor: 'transparent',

									'& div ': {
										transform: 'translate(0, -4px)',
										'& svg path': {
											fill: 'rgb(232, 97, 0)',
										},
									},

									'& p': {
										color: 'rgb(232, 97, 0)',
									},
								},
							}}
						>
							<Box
								sx={{
									width: '25px',
									height: '25px',
								}}
							>
								<svg fill="none" viewBox="0 0 32 32">
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M16 30a14 14 0 100-28 14 14 0 000 28zm0-3a11 11 0 0010.98-11.62c-2 .15-4.42.1-6.79-.34-3.38-.62-6.93-2.07-8.86-5.06-2.14 1.62-4.24 3.3-6.29 5.04A11 11 0 0016 27z"
										fill="#000"
									></path>
									<path
										d="M11.7 19.7a1 1 0 11-1.4-1.4 1 1 0 011.4 1.4zm11 0a1 1 0 11-1.4-1.4 1 1 0 011.4 1.4z"
										stroke="#000"
										strokeWidth="2"
									></path>
								</svg>
							</Box>
							<Typography
								sx={{
									textTransform: 'none',
									fontSize: '13px',
									fontWeight: 500,
									color: '#000',
								}}
							>
								Profile
							</Typography>
						</Button>
					) : (
						<Button
							variant={'text'}
							sx={{
								borderRadius: '100px',
								height: '32px',
								backgroundColor: 'rgb(243, 243, 247)',
								fontSize: '13px',
								lineHeight: '16px',
								textTransform: 'none',
								padding: '8px 16px',
								color: 'rgb(92, 99, 112)',

								'&:hover': {
									color: 'rgb(0, 0, 0)',
								},
							}}
							// onClick={() => navigate(`main/product/Chicken%20Tikka`)}
							onClick={() => dispatch(setIsOpenAuthModal(true))}
						>
							Log in
						</Button>
					)}
				</Box>
			</Box>

			<Box
				sx={{
					height: '60px',
					width: '100%',
				}}
			>
				<Menu
					isCollapse={!inView}
					openBasket={() => {
						dispatch(setIsOpenBasket(true))
					}}
				/>
			</Box>
			<Basket />
			<AuthModal />
		</Box>
	)
}

export default Header
