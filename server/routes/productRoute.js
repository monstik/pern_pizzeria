const Router = require('express')
const productController = require('../controllers/productController')
const upload = require('../middlewares/upload-middleware')

const router = new Router()

// router.get('/getProducts', () => {})
router.post(
	'/createProduct',
	upload.array('uploadedImages', 3),
	productController.createProduct
)
router.post('/createCategory', productController.createCategory)
router.get(
	'/categoriesWithProducts',
	productController.getAllCategoriesWithProducts
)

router.get('/products', productController.getAllProducts)
router.get('/searchProducts', productController.searchProducts)
router.get('/categories', productController.getCategories)

module.exports = router
