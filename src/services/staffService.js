const Staff = require('../db/models/staffModel')

const createStaff = async function (username, password, email, firstname, surname, isAdmin) {
    try {
        const newUser = new User({
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