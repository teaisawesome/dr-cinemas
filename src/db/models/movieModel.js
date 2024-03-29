const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
        title: String,
        genre: [String],
        director: String,
        actors: [String],
        releaseDate: Date,
        duration: Number
    }
)

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie