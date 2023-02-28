const BasketService = require('../services/basketService')

class BasketController {
	async getBasket(req, res, next) {
		try {
			const basket = await BasketService.getBasket(req.user.basketId)
			return res.json(basket)
		} catch (e) {
			next(e)
		}
	}

	async addProduct(req, res, next) {
		try {
			const { productId, options } = req.body
			const newProduct = await BasketService.addProduct(
				req.user.id,
				productId,
				options
			)
			return res.json(newProduct)
		} catch (e) {
			next(e)
		}
	}
}

module.exports = new BasketController()
