const register = server => {
  const io = require('socket.io')(server)

  io.on('connection', socket => {
    // someone started playing a song
    socket.on('play', id => {
      // broadcast to all other clients
      socket.broadcast.emit('playing', id)
    })

    // someone stopped playing a song
    socket.on('end', id => {
      // broadcast to all other clients
      socket.broadcast.emit('ending', id)
    })
  })
}

module.exports = { register }
