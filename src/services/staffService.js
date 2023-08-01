const Staff = require('../db/models/staffModel')
const bcrypt = require('bcryptjs')

const createStaff = async function (username, password, email, firstname, surname, isAdmin) {
    try {
        const newStaff = new Staff({
            username,
            password,
            email,
            firstname,
            surname,
            isAdmin
        })

        const savedStaff = await newStaff.save()
        
        return savedStaff
    }
    catch (err) {
        throw new Error("Staff Service - create staff error occured:", err)
    }
}

const getAllStaff = async () => {
    try {
        const allStaff = await Staff.find({})

        return allStaff
    }
    catch (err) {
        throw new Error("Staff Service - read all staff error occured:", err)
    }
}

const validateStaff = async (email, password) => {
    try {
        const staff = await Staff.findOne({ email: email })

        if(!staff) {
            return false
        }

        return new Promise((resolve, reject) => {
            bcrypt.compare(password, staff.password, function(err, isMatch) {
                if (err) {
                    reject(err)
                } else {
                    resolve(isMatch)
                }
            })
        })
    }
    catch (err) {
        throw new Error("Staff Service - validateStaff error occured:", err)
    }
}

module.exports = {
    createStaff,
    getAllStaff,
    validateStaff
}