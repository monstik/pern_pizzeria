const {
	Product,
	ProductCategories,
	Toppings,
	ProductToppings,
} = require('../models/models')
const { QueryTypes } = require('sequelize')

const sequelize = require('sequelize')

const ApiError = require('../exeptions/api-error')
const { Op } = require('sequelize')

const db = require('../db')

class ProductService {
	async createProduct(
		title,
		image,
		ingredients,
		categoryId,
		amount,
		price,
		typeModal
	) {
		// const imagePath = `${process.env.API_URL}/${image}`

		const newProduct = await Product.create({
			title,
			image,
			ingredients,
			productCategoryId: categoryId,
			amount,
			price,
			typeModal,
		})

		return {
			product: newProduct,
		}
	}

	async createCategory(title) {
		const candidate = await ProductCategories.findOne({ where: { title } })

		if (candidate) {
			throw ApiError.BadRequest('this category is exist')
		}

		await ProductCategories.create({ title })
	}

	async getAllCategoriesWithProducts() {
		const products = await ProductCategories.findAll({
			include: {
				model: Product,
				order: ['createdAt'],
				include: {
					model: ProductToppings,
					include: Toppings,
				},
			},
			order: ['createdAt', [Product, 'createdAt']],
		})
		return {
			products,
		}
	}

	async getAllProducts(
		page = 0,
		limit = 10,
		order = 'id',
		orderDirection = 'ASC',
		term = ''
	) {
		const { rows, count } = await Product.findAndCountAll({
			include: { model: ProductCategories },
			where: { title: { [Op.iLike]: '%' + term + '%' } },
			order: [
				[order, orderDirection],
				['id', 'ASC'],
			],
			offset: page * limit,
			limit,
		})

		return {
			products: rows,
			count,
		}
	}

	async searchProducts(
		term,
		page = 0,
		limit = 10,
		order = 'id',
		orderDirection = 'ASC'
	) {
		const { count, rows } = await Product.findAndCountAll({
			where: { title: { [Op.iLike]: '%' + term + '%' } },
			include: {
				model: ProductCategories,
			},

			offset: page * limit,
			limit,

			order: [
				[order, orderDirection],
				['id', 'ASC'],
			],
		})

		return {
			products: rows,
			count,
		}
	}

	async createTopping() {
		// const topping = await Toppings.create({
		// 	title: 'test',
		// 	image: 'test',
		// })
		// const productToppings = await ProductToppings.create({
		// 	toppingId: 0,
		// 	productId: 25,
		// })
	}

	// decodeOptions(){
	// const testString =
	// 	'&Mushrooms, &hard cheese, &truffle oil, creamy sauce, mozzarella'
	//
	// 	const arrayFromTestString = testString.split(',')[0][0]
	// }

	async getCategories() {
		const categories = await ProductCategories.findAll({})
		return {
			categories,
		}
	}
}

module.exports = new ProductService()
