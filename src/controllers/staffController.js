const jwt = require('jsonwebtoken')
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

const findAllStaff = async (req, res) => {
    try {
        const allStaff = await staffService.getAllStaff()
        res.status(200).json(allStaff)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({
            error:  'Failed to find all staff record.'
        })
    } 
}

const loginStaff = async (req, res) => {
    try {
        const { email, password } = req.body
        const validUser = await staffService.validateStaff(email, password)
        
        console.log(validUser, "VALIDUSER")
        if(!validUser) {
            res.status(403).json({
                error:  'Invalid login'
            })
        }
        else {
            const token = jwt.sign({ email, password }, process.env.SECRET_JOHANSSON, { expiresIn: '20m' })
    
            res.cookie('token', token, {
                maxAge: 900000,
                httpOnly: false,
                path: '/'
            }).status(200).json({
                message: 'Login successful'
            })
        }
    }
    catch (err) {
        console.log(err)
        res.status(500).json({
            error:  'Failed authentication'
        })
    } 
}


module.exports = {
    createStaff,
    findAllStaff,
    loginStaff
}
