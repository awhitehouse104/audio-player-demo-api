const express = require('express')
const cors = require('cors')
const { name, version } = require('./package')
const socket = require('./socket')
const router = require('./router')
const { errorHandler } = require('./middleware')

const app = express()
const server = require('http').Server(app)
const port = 3000

app.use(cors({ credentials: true, origin: 'http://localhost:5000' }))

app.use('/api', router)

app.use(errorHandler)

socket.register(server)

server.listen(port, () => console.log(`${name} version ${version} listening on port ${port}`))
