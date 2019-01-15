const fetch = require('node-fetch')
const utils = require('./utilities')
const { jsonServerPath } = require('../../config')

class LibraryService {
  async getLibrary(q, shuffle) {
    const libResponse = await fetch(`${jsonServerPath}/library`)
    let library = await libResponse.json()

    if (q) {
      library = utils.filter(library, q.toLowerCase())
    }
    if (shuffle) {
      library = utils.shuffle(library)
    }

    return library
  }
}

module.exports = new LibraryService()
