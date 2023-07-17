const Staff = require('../db/models/staffModel')

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

module.exports = {
    createStaff,
    getAllStaff
}