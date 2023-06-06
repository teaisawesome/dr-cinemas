module.exports = function(app) {
    const movieController = require('../controllers/movieController')

    // POST - Create new movie
    app.post('/movies', movieController.createMovie)
}