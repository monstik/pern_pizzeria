const UserService = require('../services/userService')

class UserController {
	async registration(req, res, next) {
		try {
			const { phoneNumber, password } = req.body
			const userData = await UserService.registration(phoneNumber, password)

			res.cookie('refreshToken', userData.refreshToken, {
				maxAge: 30 * 24 * 60 * 60 * 1000,
				httpOnly: true,
			})

			return res.json({
				user: userData.user,
				accessToken: userData.accessToken,
			})
		} catch (e) {
			next(e)
		}
	}

	async login(req, res, next) {
		try {
			const { phoneNumber, password } = req.body
			const userData = await UserService.login(phoneNumber, password)

			res.cookie('refreshToken', userData.refreshToken, {
				maxAge: 30 * 24 * 60 * 60 * 1000,
				httpOnly: true,
			})

			res.json({
				user: userData.user,
				accessToken: userData.accessToken,
			})
		} catch (e) {
			next(e)
		}
	}

	async logout(req, res, next) {
		try {
			const { refreshToken } = req.cookies
			console.log('refreshToken', refreshToken)
			const token = await UserService.logout(refreshToken)
			res.clearCookie('refreshToken')
			return res.status(200).json({})
		} catch (e) {
			next(e)
		}
	}

	async activate(req, res, next) {
		try {
			const activationLink = req.params.link
			await UserService.activate({ activationLink })
			return res.redirect(process.env.CLIENT_URL)
		} catch (e) {
			next(e)
		}
	}

	async refresh(req, res, next) {
		try {
			const { refreshToken } = req.cookies

			const userData = await UserService.refresh(refreshToken)
			res.cookie('refreshToken', userData.refreshToken, {
				maxAge: 30 * 24 * 60 * 60 * 1000,
				httpOnly: true,
			})

			return res.json({
				user: userData.user,
				accessToken: userData.accessToken,
			})
		} catch (e) {
			next(e)
		}
	}

	async check(req, res, next) {
		try {
			const { refreshToken } = req.cookies
			console.log('refreshToken', refreshToken)
			const authHeader = req.headers.authorization
			const accessToken = authHeader.split(' ')[1]

			const checkToken = await UserService.check(accessToken, refreshToken)

			return res.json(checkToken)
		} catch (e) {
			next(e)
		}
	}

	async updatePersonalData(req, res, next) {
		try {
			const { name, phoneNumber, email } = req.body
			const user = await UserService.updateData(
				req.user.id,
				name,
				phoneNumber,
				email
			)
			return res.json(user)
		} catch (e) {
			console.log('error', e)
			next(e)
		}
	}
}

module.exports = new UserController()
