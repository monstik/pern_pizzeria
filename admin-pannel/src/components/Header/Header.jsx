import React from 'react'
import { styled, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import MuiDrawer from '@mui/material/Drawer'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'

import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import { useNavigate } from 'react-router-dom'
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList'
import HomeIcon from '@mui/icons-material/Home'
import { Tooltip } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { selectPageTitle, setPageTitle } from '../../features/navigationSlice'

const drawerWidth = 240

const openedMixin = (theme) => ({
	width: drawerWidth,
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: 'hidden',
})

const closedMixin = (theme) => ({
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: 'hidden',
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up('sm')]: {
		width: `calc(${theme.spacing(8)} + 1px)`,
	},
})

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-end',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
}))

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(['width', 'margin'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		marginRight: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}))

const Drawer = styled(MuiDrawer, {
	shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
	width: drawerWidth,
	flexShrink: 0,
	whiteSpace: 'nowrap',
	boxSizing: 'border-box',
	...(open && {
		...openedMixin(theme),
		'& .MuiDrawer-paper': openedMixin(theme),
	}),
	...(!open && {
		...closedMixin(theme),
		'& .MuiDrawer-paper': closedMixin(theme),
	}),
}))

const routes = [
	{
		title: 'Home',
		route: '/',
		icon: <HomeIcon />,
	},
	{
		title: 'Products',
		route: '/products',
		icon: <FeaturedPlayListIcon />,
	},
	{
		title: 'Products',
		route: '/products',
		icon: <FeaturedPlayListIcon />,
	},
]

export default function Header() {
	const theme = useTheme()
	const [open, setOpen] = React.useState(false)
	const navigate = useNavigate()
	const pageTitle = useSelector(selectPageTitle)
	const dispatch = useDispatch()
	const handleDrawerOpen = () => {
		setOpen(true)
	}

	const handleDrawerClose = () => {
		setOpen(false)
	}

	const itemClickHandler = (title, route) => {
		dispatch(setPageTitle(title))
		navigate(route)
	}

	return (
		<Box sx={{ display: 'flex' }}>
			<AppBar
				position="fixed"
				// sx={{
				// 	display: 'flex',
				// 	justifyContent: 'flex-end',
				// 	width: '100%',
				// }}
				open={open}
			>
				<Toolbar
					sx={{
						display: 'flex',
					}}
				>
					<Typography
						variant="h6"
						sx={{
							marginLeft: '40px',
						}}
						noWrap
						component="div"
					>
						{pageTitle}
					</Typography>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						sx={{
							marginRight: -1.5,
							marginLeft: 'auto',
							...(open && { display: 'none' }),
						}}
					>
						<MenuIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
			<Drawer variant="permanent" anchor={'right'} open={open}>
				<DrawerHeader>
					<IconButton onClick={handleDrawerClose}>
						<ChevronRightIcon />
					</IconButton>
				</DrawerHeader>
				<Divider />
				<List>
					{routes.map((item, index) => (
						<ListItem key={index} disablePadding sx={{ display: 'block' }}>
							<Tooltip placement={'left'} title={item.title}>
								<ListItemButton
									onClick={() => itemClickHandler(item.title, item.route)}
									sx={{
										minHeight: 48,
										justifyContent: open ? 'initial' : 'center',
										px: 2.5,
									}}
								>
									<ListItemIcon
										sx={{
											minWidth: 0,
											mr: open ? 3 : 'auto',
											justifyContent: 'center',
										}}
									>
										{item.icon}
									</ListItemIcon>
									<ListItemText
										primary={item.title}
										sx={{ opacity: open ? 1 : 0 }}
									/>
								</ListItemButton>
							</Tooltip>
						</ListItem>
					))}
				</List>
				<Divider />
				<List>
					{['All mail', 'Trash', 'Spam'].map((text, index) => (
						<ListItem key={text} disablePadding sx={{ display: 'block' }}>
							<ListItemButton
								sx={{
									minHeight: 48,
									justifyContent: open ? 'initial' : 'center',
									px: 2.5,
								}}
							>
								<ListItemIcon
									sx={{
										minWidth: 0,
										mr: open ? 3 : 'auto',
										justifyContent: 'center',
									}}
								>
									{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
								</ListItemIcon>
								<ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Drawer>
			{/*<Box component="main" sx={{ flexGrow: 1, p: 3 }}>*/}
			{/*	<DrawerHeader />*/}
			{/*	<Typography paragraph>*/}
			{/*		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do*/}
			{/*		eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus*/}
			{/*		dolor purus non enim praesent elementum facilisis leo vel. Risus at*/}
			{/*		ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum*/}
			{/*		quisque non tellus. Convallis convallis tellus id interdum velit*/}
			{/*		laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed*/}
			{/*		adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies*/}
			{/*		integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate*/}
			{/*		eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo*/}
			{/*		quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat*/}
			{/*		vivamus at augue. At augue eget arcu dictum varius duis at consectetur*/}
			{/*		lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien*/}
			{/*		faucibus et molestie ac.*/}
			{/*	</Typography>*/}
			{/*	<Typography paragraph>*/}
			{/*		Consequat mauris nunc congue nisi vitae suscipit. Fringilla est*/}
			{/*		ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar*/}
			{/*		elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse*/}
			{/*		sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat*/}
			{/*		mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis*/}
			{/*		risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas*/}
			{/*		purus viverra accumsan in. In hendrerit gravida rutrum quisque non*/}
			{/*		tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant*/}
			{/*		morbi tristique senectus et. Adipiscing elit duis tristique*/}
			{/*		sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis*/}
			{/*		eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla*/}
			{/*		posuere sollicitudin aliquam ultrices sagittis orci a.*/}
			{/*	</Typography>*/}
			{/*</Box>*/}
		</Box>
	)
}
