const staffService = require("../services/staffService")

const createStaff = async (req, res) => {
    try {
        const { username, password, email, firstname, surname, isAdmin } = req.body
        const newStaff = await staffService.createStaff(username, password, email, firstname, surname, isAdmin)
        res.status(200).json(newStaff)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({
            error:  'Failed to create new staff record.'
        })
    } 
}

module.exports = {
    createStaff
}
