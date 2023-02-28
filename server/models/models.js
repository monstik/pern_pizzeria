const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	name: { type: DataTypes.STRING, defaultValue: 'Dania' },
	email: { type: DataTypes.STRING, defaultValue: 'example@gmail.com' },
	phoneNumber: { type: DataTypes.STRING, unique: true },
	password: { type: DataTypes.STRING, allowNull: true },
	isActivated: { type: DataTypes.BOOLEAN, defaultValue: false },
	activationLink: { type: DataTypes.STRING },
	role: { type: DataTypes.STRING, defaultValue: 'USER' },
})

const Token = sequelize.define('token', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	refreshToken: { type: DataTypes.TEXT, allowNull: false, required: true },
})

const Basket = sequelize.define('basket', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const BasketProduct = sequelize.define('basketProduct', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	options: { type: DataTypes.STRING, defaultValue: '' },
	count: { type: DataTypes.INTEGER, defaultValue: 1 },
})

const Rating = sequelize.define('rating', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	rate: { type: DataTypes.INTEGER, allowNull: false },
})

const Product = sequelize.define('product', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	title: { type: DataTypes.STRING },
	amount: { type: DataTypes.STRING },
	price: { type: DataTypes.FLOAT, defaultValue: 0 },
	discountPrice: { type: DataTypes.FLOAT, defaultValue: 0 },
	image: { type: DataTypes.STRING, defaultValue: 'uploads/defaultProduct.svg' },
	typeModal: { type: DataTypes.STRING, defaultValue: 'default' },
	ingredients: {
		type: DataTypes.STRING,
	},
})

const Toppings = sequelize.define('toppings', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	title: { type: DataTypes.STRING },
	image: { type: DataTypes.STRING },
})

const ProductToppings = sequelize.define('productToppings', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const ProductCategories = sequelize.define('product_categories', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	title: { type: DataTypes.STRING, allowNull: false, unique: true },
})

Basket.hasOne(User)
User.belongsTo(Basket)

User.hasOne(Token)
Token.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

ProductCategories.hasMany(Product)
Product.belongsTo(ProductCategories)

Product.hasMany(ProductToppings)
ProductToppings.belongsTo(Product)

Toppings.hasMany(ProductToppings)
ProductToppings.belongsTo(Toppings)

Basket.hasMany(BasketProduct)
BasketProduct.belongsTo(Basket)

Product.hasMany(BasketProduct)
BasketProduct.belongsTo(Product)

module.exports = {
	User,
	Token,
	Basket,
	BasketProduct,
	Rating,
	Product,
	ProductCategories,
	Toppings,
	ProductToppings,
}
