const express = require('express')
const { name, version } = require('./package')
const router = require('./router')

const app = express()
const port = 3000

app.use('/api', router)

app.listen(port, () => console.log(`${name} version ${version} listening on port ${port}`))
