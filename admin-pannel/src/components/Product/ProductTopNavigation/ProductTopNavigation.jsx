import React from 'react'
import {
	Box,
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	Tooltip,
} from '@mui/material'
import ListIcon from '@mui/icons-material/List'
import ViewModuleIcon from '@mui/icons-material/ViewModule'
import SortIcon from '@mui/icons-material/Sort'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'

import { useDispatch, useSelector } from 'react-redux'
import {
	selectOrder,
	selectOrderDirection,
	selectSearch,
	setOrder,
	setOrderDirection,
	setSearch,
} from '../../../features/productSlice'
import Search from './Search/Search'

const ProductTopNavigation = ({ setDisplayVariant, displayVariant }) => {
	const order = useSelector(selectOrder)
	const dispatch = useDispatch()
	const orderDirection = useSelector(selectOrderDirection)

	const orderDirectionHandler = () => {
		if (orderDirection === 'ASC') return dispatch(setOrderDirection('DESC'))

		dispatch(setOrderDirection('ASC'))
	}

	return (
		<Box
			sx={{
				marginBottom: '15px',
				display: 'flex',
				justifyContent: 'flex-end',
				alignItems: 'center',
				columnGap: '20px',
			}}
		>
			<Box>
				<Search />
				{/*<TextField*/}
				{/*	inputProps={{*/}
				{/*		style: {*/}
				{/*			height: '17px',*/}
				{/*		},*/}
				{/*	}}*/}
				{/*	size={'small'}*/}
				{/*	id="filled-search"*/}
				{/*	label="Search..."*/}
				{/*	type="search"*/}
				{/*	variant="outlined"*/}
				{/*	value={search}*/}
				{/*	onChange={(event) => dispatch(setSearch(event.target.value))}*/}
				{/*/>*/}
			</Box>
			<Box
				sx={{
					minWidth: '110px',
				}}
			>
				<FormControl fullWidth>
					<InputLabel id="order-products">Order by</InputLabel>
					<Select
						sx={{
							height: '35px',
						}}
						MenuProps={{ disableScrollLock: true }}
						labelId="order-products"
						id="order-products-select"
						value={order}
						label="Order by"
						// defaultValue={'Name'}
						// displayEmpty
						onChange={(event) => dispatch(setOrder(event.target.value))}
					>
						<MenuItem value={'title'}>Name</MenuItem>
						<MenuItem value={'productCategoryId'}>Category</MenuItem>
						<MenuItem value={'id'}>Index</MenuItem>
						<MenuItem value={'createdAt'}>Date</MenuItem>
					</Select>
				</FormControl>
			</Box>
			<Box>
				<Tooltip
					title={'Order direction'}
					disableInteractive
					disableFocusListener
				>
					<Button
						variant={'contained'}
						onClick={orderDirectionHandler}
						sx={{
							minWidth: '0',
							minHeight: '0',
							padding: '0',
							// width: '34px',
							height: '34px',
						}}
					>
						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							{orderDirection === 'DESC' ? (
								<ArrowUpwardIcon fontSize={'medium'} />
							) : (
								<ArrowDownwardIcon fontSize={'medium'} />
							)}
							<SortIcon
								sx={{
									transform: 'scaleY(-1)',
								}}
								fontSize={'medium'}
							/>
						</Box>
					</Button>
				</Tooltip>
			</Box>
			<Box>
				<Tooltip
					title={'Display variant'}
					disableInteractive
					disableFocusListener
				>
					<Button
						variant={'contained'}
						onClick={() => setDisplayVariant(!displayVariant)}
						sx={{
							minWidth: '0',
							minHeight: '0',
							padding: '0',
							width: '34px',
							height: '34px',
						}}
					>
						{displayVariant ? (
							<ListIcon fontSize={'large'} />
						) : (
							<ViewModuleIcon fontSize={'large'} />
						)}
					</Button>
				</Tooltip>
			</Box>
		</Box>
	)
}

export default ProductTopNavigation
