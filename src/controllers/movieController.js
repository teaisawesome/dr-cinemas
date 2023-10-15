const movieService = require("../services/movieService")
const firebase = require('../db/firebase')
const { uploadBytes, ref } = require("@firebase/storage")

const storageRef = firebase.getStorageRef()

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

const createMovieImage = async (req, res) => {
    try {
        const imageBuffer = req.file.buffer
        const originalFileName = req.file.originalname

        const fileRef = ref(storageRef,`image/${originalFileName}`)
        await uploadBytes(fileRef, imageBuffer)

        res.status(200).json({ message: 'Kép sikeresen feltöltve Firebase adatbázisba!'})
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Failed to create new movie image record.'})
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

const findAllMovieGenre = async (req, res) => {
    try {
        const movieGenres = await movieService.getAllMovieGenre()
        res.status(200).json(movieGenres)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Failed to find all movie genre.'})
    }
}

module.exports = {
    createMovie,
    createMovieImage,
    findAllMovie,
    findAllMovieGenre
}