module.exports = class UserLoginDto {
	phoneNumber
	name
	email
	id
	isActivated
	basketId
	constructor(model) {
		this.phoneNumber = model.phoneNumber
		this.name = model.name
		this.email = model.email
		this.id = model.id
		this.isActivated = model.isActivated
		this.basketId = model.basketId
	}
}
