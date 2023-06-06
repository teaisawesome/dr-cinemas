const { Schema } = require('mongoose')

const movieSchema = new Schema(
    {
        title: {
            String,
            required: true
        },
        genre: [String],
        director: String,
        actors: [String],
        releaseDate: Date,
        duration: Number
    }
)

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie