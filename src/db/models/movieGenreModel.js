const mongoose = require('mongoose')

const movieGenreSchema = new mongoose.Schema({
        genreName: String
    }
)

const movieGenre = mongoose.model('Genre', movieGenreSchema)

module.exports = movieGenre