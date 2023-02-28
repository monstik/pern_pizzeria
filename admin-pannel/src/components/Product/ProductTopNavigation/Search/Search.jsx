import React, { useEffect, useState } from 'react'
import { TextField } from '@mui/material'
import { setSearch } from '../../../../features/productSlice'
import { useDispatch } from 'react-redux'

const Search = () => {
	const dispatch = useDispatch()
	const [typingTimeout, setTypingTimout] = useState(0)
	const [searchProduct, setSearchProduct] = useState('')

	const onSearchChange = (event) => {
		clearTimeout(typingTimeout)
		setSearchProduct(event.target.value)
		const newTimer = setTimeout(() => {
			dispatch(setSearch(event.target.value))
		}, 500)

		setTypingTimout(newTimer)
	}

	return (
		<TextField
			inputProps={{
				style: {
					height: '17px',
				},
			}}
			size={'small'}
			id="filled-search"
			label="Search..."
			type="search"
			variant="outlined"
			value={searchProduct}
			onChange={onSearchChange}
		/>
	)
}

export default Search
