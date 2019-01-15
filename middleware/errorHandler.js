const errorHandler = (err, req, res, next) => {
	if (res.headersSent) {
		return next(err)
	}

	console.log(err)

	res.status(err.status || 500).send(err.message)
}

module.exports = errorHandler
