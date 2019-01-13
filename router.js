const express = require('express')
const { library } = require('./modules')

const router = express.Router()

router.use('/library', library.router)

module.exports = router
