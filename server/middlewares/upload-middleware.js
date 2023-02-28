const multer = require('multer')
const uuid = require('uuid')

const storage = multer.diskStorage({
	destination(req, file, cb) {
		cb(null, 'uploads/')
	},
	filename(req, file, cb) {
		const uniqFileName = uuid.v4()
		const fileType = file.originalname.split('.')
		cb(null, `${uniqFileName}.${fileType[fileType.length - 1]}`)
	},
})

const fileFilter = (req, file, cb) => {
	// if (file.mimetype === 'image/') {
	// 	cb(null, true)
	// 	console.log('я тут')
	// }
	// cb(null, false)
	cb(null, true)
}

module.exports = multer({
	storage: storage,
	fileFilter: fileFilter,
})
