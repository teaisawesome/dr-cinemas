const mongoose = require('mongoose')

const staffSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    firstname: String,
    surname: String,
    isAdmin: Boolean
})

const Staff = mongoose.model('Staff', staffSchema)

module.exports = Staff