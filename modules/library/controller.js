const libraryService = require('./service')

class LibraryController {
  async get(req, res, next) {
    const { q, shuffle } = req.query

    try {
      let library = await libraryService.getLibrary(q, shuffle)

      return res.send(library)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = new LibraryController()
