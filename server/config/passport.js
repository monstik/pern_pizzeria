const passport = require('passport')
const { User } = require('../models/models')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const jwtOptions = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: process.env.JWT_ACCESS_SECRET,
}

passport.use(
	'accessToken',
	new JwtStrategy(jwtOptions, async (jwtPayload, done) => {
		// return User.findOne({
		// 	where: {
		// 		id: jwtPayload.id,
		// 	},
		// })
		// 	.then((user) => {
		// 		return done(null, user)
		// 	})
		// 	.catch((error) => {
		// 		console.log('error', error)
		// 		return done(error)
		// 	})

		try {
			const user = await User.findOne({ where: { id: jwtPayload.id } })
			if (user) {
				return done(null, user)
			}
			return done(null, false)
		} catch (err) {
			return done(err, false)
		}
	})
)
