import React, { useEffect, useRef, useState } from 'react'
import { Box, Button, Collapse, Slide } from '@mui/material'
import MenuItem from './MenuItem'
import Logo from '../Logo/Logo'
import { useDispatch, useSelector } from 'react-redux'
import {
	selectActiveSectionId,
	selectScrollSectionId,
	setScrollSectionId,
	setSectionId,
} from '../../../features/NavigationBarSlice'
import { scroller, animateScroll as scroll } from 'react-scroll'
import {
	selectCategories,
	setIsOpenProductModal,
} from '../../../features/ProductsSlice'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
export const menuData = [
	{
		id: 'deals',
		name: 'Deals',
		route: 'deals',
	},
	{
		id: 'deliveryArea',
		name: 'Delivery Area',
		route: 'deliveryArea',
	},
]

export const scrollToSection = (sectionId, duration = 1000) => {
	scroller.scrollTo(sectionId, {
		duration: duration,
		delay: 200,
		smooth: true,
		offset: -100,
	})
}

const Menu = ({ isCollapse = false, openBasket }) => {
	const id = useSelector(selectActiveSectionId)
	const categories = useSelector(selectCategories)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const hashParam = useLocation()

	useEffect(() => {
		if (hashParam.hash) scrollToSection(hashParam.hash)
	}, [hashParam])

	const handlerScroll = (route, sectionId) => {
		console.log(route)
		// navigate({ pathname: '/pizza-shop', search: `#test` })
		if (route[0] === '#') {
			navigate(`/pizza-shop?${route}`)
		} else {
			navigate(route)
			dispatch(setSectionId(sectionId))
		}

		// navigate('/profile')
		// navigate(`/pizza-shop${sectionId}`)

		// dispatch(setScrollSectionId(sectionId))
	}

	const handlerLogoClick = () => {
		scroll.scrollToTop({
			duration: 600,
			delay: 200,
			smooth: true,
			offset: -125,
		})
		navigate('/pizza-shop')
	}

	// useEffect(() => {
	// 	scrollToSection(id)
	// }, [id])

	return (
		<Box
			sx={{
				position: isCollapse ? 'fixed' : 'relative',
				display: 'flex',
				alignItems: 'center',

				height: 'inherit',
				top: '0',
				backgroundColor: 'rgba(255, 255, 255, 0.75)',
				backdropFilter: 'blur(20px)',
				width: isCollapse ? 'calc(100vw - 1px)' : '100%',

				boxShadow: isCollapse ? 'rgb(6 5 50 / 10%) 0px 4px 30px' : 'none',
			}}
		>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					maxWidth: '1280px',
					width: '100%',
					height: 'inherit',
					margin: '0 auto',
					overflow: 'hidden',
				}}
			>
				<Collapse orientation={'horizontal'} in={isCollapse} collapsedSize={0}>
					<Slide
						direction={'right'}
						in={isCollapse}
						sx={{
							width: '40px',
							height: '40px',
							marginRight: '15px',
							'&:hover': {
								cursor: 'pointer',
							},
						}}
					>
						<Box onClick={handlerLogoClick}>
							<Logo />
						</Box>
					</Slide>
				</Collapse>

				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						columnGap: '20px',
					}}
				>
					{categories.map((item) => (
						<MenuItem
							onClick={() => handlerScroll(`#${item.title}`, item.id)}
							isActive={id == item.id}
							name={item.title}
							key={item.id}
							route={`/pizza-shop/#${item.id}`}
						/>
					))}
					{menuData.map((item, index) => (
						<MenuItem
							onClick={() => handlerScroll(item.route, item.id)}
							isActive={id == item.id}
							name={item.name}
							key={index}
						/>
					))}
				</Box>
				<Box
					sx={{
						marginLeft: 'auto',
					}}
				>
					<Button
						variant={'text'}
						sx={{
							textTransform: 'none',
							borderRadius: '9999px',
							backgroundColor: 'rgb(255, 105, 0)',
							color: 'rgb(255, 255, 255)',
							height: '40px',
							minWidth: '90px',

							fontSize: '16px',
							lineHeight: '24px',
							padding: '8px 24px',

							'&:hover': {
								backgroundColor: 'rgb(232, 97, 0)',
							},

							'&:active': {
								backgroundColor: 'rgb(255, 105, 0)',
								color: 'rgb(255, 165, 102)',
							},
						}}
						onClick={openBasket}
					>
						My order
					</Button>
				</Box>
			</Box>
		</Box>
	)
}

export default Menu
