import logo from './logo.svg'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '@fontsource/roboto/900.css'

import { CssBaseline } from '@mui/material'
import AppRouter from './components/AppRouter/AppRouter'
import { useEffect } from 'react'
import { getProducts } from './features/ProductsSlice'
import { useDispatch } from 'react-redux'

function App() {
	return (
		<div>
			<CssBaseline />
			<AppRouter />
		</div>
	)
}

export default App
