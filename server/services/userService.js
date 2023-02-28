const { User, Basket } = require('../models/models')
const bcrypt = require('bcrypt')
const uuid = require('uuid')
const MailService = require('../services/mailService')
const TokenService = require('../services/tokenService')
const UserLoginDto = require('../dtos/user/userLoginDto')
const ApiError = require('../exeptions/api-error')

class UserService {
	async registration(phoneNumber, password) {
		const candidate = await User.findOne({
			where: { phoneNumber: phoneNumber },
		})

		if (candidate) {
			throw ApiError.BadRequest(
				`Користувач з немером ${phoneNumber} вже зареєстрований`
			)
		}

		const hashPassword = await bcrypt.hash(password, 3)
		const activationLink = uuid.v4()

		const basket = await Basket.create()
		const user = await User.create({
			phoneNumber,
			password: hashPassword,
			activationLink,
			basketId: basket.id,
		})

		// await MailService.sendActivationMail(
		// 	email,
		// 	`${process.env.API_URL}/api/user/activate/${activationLink}`
		// )

		const userLoginDto = new UserLoginDto(user)
		const tokens = await TokenService.generateTokens({ ...userLoginDto })

		await TokenService.saveToken(user.id, tokens.refreshToken)
		return {
			...tokens,
			user: userLoginDto,
		}
	}

	async login(phoneNumber, password) {
		const candidate = await User.findOne({
			where: { phoneNumber: phoneNumber },
		})

		if (!candidate) {
			throw ApiError.BadRequest(
				`Користувач з номером ${phoneNumber} не зареєстрований`
			)
		}

		const isPasswordEquals = await bcrypt.compare(password, candidate.password)

		if (!isPasswordEquals) {
			throw ApiError.BadRequest('Невірний пароль')
		}

		const userLoginDto = new UserLoginDto(candidate)

		const tokens = await TokenService.generateTokens({ ...userLoginDto })
		await TokenService.saveToken(candidate.id, tokens.refreshToken)

		return {
			...tokens,
			user: userLoginDto,
		}
	}

	async logout(refreshToken) {
		const token = await TokenService.removeToken(refreshToken)

		return token
	}

	async activate(activationLink) {
		const user = await User.findOne(activationLink)

		if (!user) {
			throw ApiError.BadRequest('Некорректна силка активації')
		}

		user.isActivated = true
		await user.save()
	}

	async refresh(refreshToken) {
		if (!refreshToken) {
			throw ApiError.UnauthorizedError()
		}

		const userData = await TokenService.validateRefreshToken(refreshToken)
		const tokenFromDB = await TokenService.findToken(refreshToken)

		if (!userData || !tokenFromDB) {
			throw ApiError.UnauthorizedError()
		}
		console.log('userDataId', userData)
		const user = await User.findByPk(userData.id)
		const userDto = new UserLoginDto(user)

		const tokens = await TokenService.generateTokens({ ...userDto })
		await TokenService.saveToken(userDto.id, tokens.refreshToken)
		return {
			...tokens,
			user: userDto,
		}
	}

	async check(accessToken, refreshToken) {
		if (!refreshToken) {
			throw ApiError.UnauthorizedError()
		}

		const userData = await TokenService.validateAccessToken(accessToken)

		if (!userData) {
			throw ApiError.UnauthorizedError()
		}

		return {
			isAuth: true,
		}
	}

	async updateData(userId, name, phoneNumber, email) {
		const user = await User.findOne({ where: { id: userId } })
		if (name && name !== user.name) {
			user.name = name
		}

		if (phoneNumber && phoneNumber !== user.phoneNumber) {
			const checkUniq = await User.findOne({
				where: { phoneNumber: phoneNumber },
			})
			if (checkUniq) {
				throw ApiError.BadRequest(
					`Номер телефона ${phoneNumber} уже есть в системе`
				)
			}

			user.phoneNumber = phoneNumber
		}

		if (email && email !== user.email) {
			user.email = email
		}

		await user.save()
		await user.reload()

		const updatedUser = new UserLoginDto(user)

		return { user: updatedUser }
		// return {user: }
	}
}

module.exports = new UserService()
