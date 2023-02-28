const { Basket, BasketProduct } = require('../models/models')

class BasketService {
	async getBasket(basketId) {
		const basket = await Basket.findAll({
			where: { id: basketId },
			include: BasketProduct,
		})

		return { basket }
	}

	async addProduct(basketId, productId, options) {
		const newProduct = await BasketProduct.create({
			basketId,
			productId,
			options,
		})

		return { newProduct }
	}
}

module.exports = new BasketService()
