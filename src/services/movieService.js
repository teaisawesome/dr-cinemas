const Movie = require('../db/models/movieModel')
const MovieGenre = require('../db/models/movieGenreModel')

const createMovie = async function (title, genre, director, actors, releaseDate, duration) {
    try {
        const newMovie = new Movie({
            title,
            genre,
            director,
            actors,
            releaseDate,
            duration
        })

        const savedMovie = await newMovie.save()
        
        return savedMovie
    }
    catch (err) {
        throw new Error("Movie Service - create movie error occured:", err)
    }
}

const getAllMovie =  async function () {
    try {
        const allMovie = await Movie.find({})

        return allMovie
    }
    catch(err) {
        throw new Error("Movie Service - find all movie error occured:", err)
    }
}

const getAllMovieGenre = async function () {
    try {
        const allMovieGenre = await MovieGenre.find({})

        return allMovieGenre
    }
    catch(err) {
        throw new Error("Movie Service - find all movie GENRE error occured:", err)
    }
}

module.exports = {
    createMovie,
    getAllMovie,
    getAllMovieGenre
}