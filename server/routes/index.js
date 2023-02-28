const Router = require('express')
const router = new Router()

const userRouter = require('./userRouter')
const deviceRouter = require('./deviceRouter')
const productRouter = require('./productRoute')
const basketRouter = require('./basketRouter')

router.use('/user', userRouter)
router.use('/device', deviceRouter)
router.use('/product', productRouter)
router.use('/basket', basketRouter)

module.exports = router
