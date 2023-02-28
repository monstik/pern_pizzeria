import { createTheme } from '@mui/material'

export const lightTheme = createTheme({
	palette: {
		mode: 'light',
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 768,
			md: 1024,
			lg: 1280,
			xl: 1600,
		},
	},
})
