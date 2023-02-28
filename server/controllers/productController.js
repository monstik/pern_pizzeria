const ProductService = require('../services/productService')

class ProductController {
	async getAllProducts(req, res, next) {
		try {
			const { page, limit, order, orderDirection, term } = req.query
			const products = await ProductService.getAllProducts(
				page,
				limit,
				order,
				orderDirection,
				term
			)

			return res.json(products)
		} catch (e) {
			next(e)
		}
	}

	async searchProducts(req, res, next) {
		try {
			const { page, limit, order, orderDirection, term } = req.query

			const products = await ProductService.searchProducts(
				term,
				page,
				limit,
				order,
				orderDirection
			)

			return res.json(products)
		} catch (e) {
			next(e)
		}
	}

	async getAllCategoriesWithProducts(req, res, next) {
		try {
			const products = await ProductService.getAllCategoriesWithProducts()

			return res.json(products)
		} catch (e) {
			next(e)
		}
	}

	async getCategories(req, res, next) {
		try {
			const categories = await ProductService.getCategories()

			return res.json(categories)
		} catch (e) {
			next(e)
		}
	}

	async createProduct(req, res, next) {
		try {
			const { title, ingredients, categoryId, amount, price, typeModal } =
				req.body
			let image = ''
			req.files.map((item) => {
				image += `uploads/${item.filename} |`
			})

			const product = await ProductService.createProduct(
				title,
				image,
				ingredients,
				categoryId,
				amount,
				price,
				typeModal
			)

			return res.json(product)
		} catch (e) {
			next(e)
		}
	}

	async createCategory(req, res, next) {
		try {
			const { title } = req.body
			await ProductService.createCategory(title)
			return res.json({ message: 'category was created' })
		} catch (e) {
			next(e)
		}
	}
}

module.exports = new ProductController()
