require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const router = require('./routes')
const errorsMiddleware = require('./middlewares/error-middleware')
require('./config/passport')
const PORT = process.env.PORT || 5000
const oneHour = 3600000

const app = express()
app.use(
	cors({
		origin: ['http://localhost:3000', 'http://localhost:3001'],
		credentials: true,
	})
)
app.use(express.json())
app.use(cookieParser())
app.use(
	'/uploads',
	express.static('uploads', {
		maxAge: 36000000,
	})
)
app.use('/api', router)
app.use(errorsMiddleware)

// app.get('/', (req, res) => {
// 	res.status(200).json({ message: 'pohui' })
// })

app.set('Cache-Control', `max-age=${oneHour}`)

const start = async () => {
	try {
		await sequelize.authenticate()
		await sequelize.sync()
		app.listen(process.env.PORT, () => console.log(`server started on ${PORT}`))
	} catch (e) {
		console.log(e)
	}
}

start()
