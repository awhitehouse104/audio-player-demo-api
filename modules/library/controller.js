const fetch = require('node-fetch')
const { jsonServerPath } = require('../../config')

class LibraryController {
  async get(req, res) {
    try {
      const libResponse = await fetch(`${jsonServerPath}/library`)
      const library = await libResponse.json()

      return res.send(library)
    } catch (error) {
      return res.status(500).send(error.message)
    }
  }
}

module.exports = new LibraryController()
