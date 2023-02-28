const Router = require('express')
const basketController = require('../controllers/basketController')
const authMiddleware = require('../middlewares/auth-middleware')
const router = new Router()

router.get('/', authMiddleware, basketController.getBasket)
router.post('/addProduct', authMiddleware, basketController.addProduct)

module.exports = router
