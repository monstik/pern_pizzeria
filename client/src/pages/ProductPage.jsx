import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
	openCombosProductModal,
	openExtraProductModal,
	openSimpleProductModal,
	selectCurrentProduct,
	selectFilteredProduct,
	setCurrentProduct,
	setSearchProductTerm,
} from '../features/ProductsSlice'
import SimpleProductModal from '../components/Modals/SimpleProductModal/SimpleProductModal'
import ExtraProductModal from '../components/Modals/ExtraProductModal/ExtraProductModal'

const ProductPage = () => {
	const { productTitle } = useParams()
	const dispatch = useDispatch()
	const currentProduct = useSelector(selectCurrentProduct)

	useEffect(() => {
		dispatch(setCurrentProduct(productTitle))

		if (currentProduct.typeModal === 'default') {
			dispatch(openSimpleProductModal())
		} else if (currentProduct.typeModal === 'extended') {
			dispatch(openExtraProductModal())
		} else if (currentProduct.typeModal === 'combos') {
			dispatch(openCombosProductModal)
		}
	}, [])

	return (
		<React.Fragment>
			<SimpleProductModal />
			<ExtraProductModal />
		</React.Fragment>
	)
}

export default ProductPage
