const Movie = require('../db/models/movieModel')

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

module.exports = {
    createMovie
}