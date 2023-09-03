module.exports = function(app) {
    const movieController = require('../controllers/movieController')

    app.get('/movies', movieController.findAllMovie)
    app.get('/movie-genres', movieController.findAllMovieGenre)
    // POST - Create new movie
    app.post('/movies', movieController.createMovie)
}