const jwt = require('jsonwebtoken')
const { Token } = require('../models/models')

class TokenService {
	async generateTokens(payload) {
		const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
			expiresIn: '15m',
		})
		const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
			expiresIn: '30d',
		})

		return {
			accessToken,
			refreshToken,
		}
	}

	async removeToken(refreshToken) {
		const tokenData = await Token.destroy({
			where: { refreshToken: refreshToken },
		})

		return tokenData
	}

	async findToken(refreshToken) {
		const tokenData = await Token.findOne({
			where: { refreshToken: refreshToken },
		})
		return tokenData
	}

	async saveToken(userId, refreshToken) {
		const tokenData = await Token.findOne({ where: { userId } })

		if (tokenData) {
			tokenData.refreshToken = refreshToken
			return tokenData.save()
		}

		const token = await Token.create({
			userId,
			refreshToken,
		})

		return token
	}

	validateAccessToken(accessToken) {
		try {
			const userData = jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET)
			return userData
		} catch (e) {
			return null
		}
	}

	validateRefreshToken(refreshToken) {
		try {
			const userData = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET)
			return userData
		} catch (e) {
			return null
		}
	}
}

module.exports = new TokenService()
