import React from 'react'
import { Box, Link, Typography } from '@mui/material'
import { Link as RRDLink } from 'react-router-dom'

const FooterLinkBlock = ({ title, subtitle, linkTo }) => {
	return (
		<Box
			sx={{
				minWidth: '130px',
				margin: '0 60px 50px 0',
			}}
		>
			<Typography
				sx={{
					marginBottom: '7px',
					lineHeight: '1.2',
				}}
			>
				{title}
			</Typography>
			<Link
				component={RRDLink}
				to={linkTo}
				underline={'none'}
				sx={{
					color: '#fff',
					opacity: '.7',
					fontSize: '15px',
					'&:hover': {
						opacity: '1',
					},
				}}
			>
				{subtitle}
			</Link>
		</Box>
	)
}

export default FooterLinkBlock
