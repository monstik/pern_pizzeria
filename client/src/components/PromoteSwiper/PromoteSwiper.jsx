import React, { useEffect } from 'react'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Box, Card, CardMedia, Paper } from '@mui/material'
import { useInView } from 'react-intersection-observer'
import { useDispatch } from 'react-redux'
import { setSectionId } from '../../features/NavigationBarSlice'
const color = 'red'
const PromoteSwiper = () => {
	const { ref, inView, entry } = useInView({
		/* Optional options */
		threshold: 0.3,
	})
	const dispatch = useDispatch()
	useEffect(() => {
		if (inView) {
			dispatch(setSectionId(null))
		}
	}, [inView])
	return (
		<Box
			ref={ref}
			sx={{
				'& .swiper-button-next': {
					width: '100px',
					height: '100%',
					top: '0',

					zIndex: '2',

					'&:hover': {
						'&.swiper-button-next::after': {
							backgroundColor: '#000',
						},
						'&.swiper-button-next::before': {
							backgroundColor: '#fff',
						},
					},
				},

				'& .swiper-button-prev': {
					width: '100px',
					height: '100%',
					top: '0',

					zIndex: '2',

					'&:hover': {
						'&.swiper-button-prev::after': {
							backgroundColor: '#000',
						},
						'&.swiper-button-prev::before': {
							backgroundColor: '#fff',
						},
					},
				},

				'& .swiper-button-prev::before': {
					width: '15px',
					height: '15px',
					left: '45px',
					zIndex: 5,
					clipPath:
						'polygon(65% 13%, 29% 50%, 60% 86%, 44% 100%, 0% 50%, 50% 0)',
					position: 'absolute',
					transition: '0.3s',
					// borderStyle: "solid",
					// borderWidth: "9.5px 10.5px 9.5px 0",
					// borderColor: "transparent",
					backgroundColor: 'transparent',
					content: '""',
				},

				'& .swiper-button-prev::after': {
					borderRadius: '100px',
					position: 'absolute',
					transition: '0.3s',
					content: '""',
					zIndex: 3,
					width: '40px',
					height: '40px',
					opacity: '0.8',
				},

				'& .swiper-button-next::before': {
					width: '15px',
					height: '15px',
					right: '45px',
					zIndex: 5,
					clipPath:
						'polygon(55% 2%, 100% 51%, 53% 100%, 35% 88%, 73% 50%, 34% 6%)',
					position: 'absolute',
					transition: '0.3s',
					// borderStyle: "solid",
					// borderWidth: "9.5px 10.5px 9.5px 0",
					// borderColor: "transparent",
					backgroundColor: 'transparent',
					content: '""',
				},

				'& .swiper-button-next::after': {
					borderRadius: '100px',
					position: 'absolute',
					transition: '0.3s',
					zIndex: 3,
					width: '40px',
					height: '40px',
					content: '""',
					opacity: '0.8',
				},

				'& .swiper-slide-active': {
					opacity: '1!important',
					transition: 'opacity .3s',
				},
				'& .swiper-slide': {
					// border: "10px solid red",
					opacity: '0.4',
					transition: 'opacity .3s',
					// "&:hover": {
					//   "& .swiper-pagination-bullet": {
					//     opacity: "0!important",
					//   },
					// },
				},

				'& .swiper': {
					'&:hover': {
						'& .swiper-pagination-bullet': {
							opacity: '1',
						},
					},
				},
				'& .swiper-pagination-bullets': {
					bottom: '25px',
				},
				'& .swiper-pagination-bullet': {
					transition: '0.3s',
					margin: '0 6px!important',
					backgroundColor: 'rgb(84, 76, 72)',
					opacity: '0',
					width: '12px',
					height: '12px',
				},
				'& .swiper-pagination-bullet-active': {
					backgroundColor: 'rgb(197, 202, 206)',
				},
			}}
		>
			<Swiper
				slidesPerView={'1.13'}
				loop
				centeredSlides
				centerInsufficientSlides
				spaceBetween={10}
				pagination={{ clickable: true }}
				navigation={true}
				modules={[Navigation, Pagination]}
				// background-image: linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 100%);
			>
				<SwiperSlide>
					<Card
						elevation={9}
						sx={{
							margin: '10px 10px 20px 10px',
							borderRadius: '20px',
							cursor: 'pointer',
						}}
					>
						<CardMedia
							sx={{
								height: '370px',

								// width: "1280px",
								// opacity: "0.4",
							}}
							image={
								'https://cdn.dodostatic.net/static/Img/Banners/g_1585151781_c99578ca77704409877b1247091a82d0.jpeg'
							}
						/>
					</Card>
				</SwiperSlide>
				<SwiperSlide>
					<Card
						elevation={9}
						sx={{
							margin: '10px 10px 20px 10px',
							borderRadius: '20px',
							cursor: 'pointer',
						}}
					>
						<CardMedia
							sx={{
								height: '370px',

								// width: "1280px",
								// opacity: "0.4",
							}}
							image={
								'https://cdn.dodostatic.net/static/Img/Banners/g_1586870121_6c84774c9d1443499e05b7a8bdfe8a9a.jpeg'
							}
						/>
					</Card>
				</SwiperSlide>
			</Swiper>
		</Box>
	)
}

export default PromoteSwiper
