const movieService = require("../services/movieService")

const createMovie = async (req, res) => {
    try {
        const { title, genre, director, actors, releaseDate, duration } = req.body
        const newMovie = await movieService.createMovie(title, genre, director, actors, releaseDate, duration)
        res.status(200).json(newMovie)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Failed to create new movie record.'})
    }
}

const findAllMovie = async (req, res) => {
    try {
        const movies = await movieService.getAllMovie()
        res.status(200).json(movies)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Failed to find all movie.'})
    }
}

module.exports = {
    createMovie,
    findAllMovie
}