const jwt = require('jsonwebtoken')

const cookieJwtAuth = (req, res) => {
    const token = req.cookies.token
    try {
        jwt.verify(token, process.env.SECRET_JOHANSSON)
        return 'token GOOD'
    } catch (err) {
        res.clearCookie('token')
        res.redirect('/login')
    }
}

module.exports = {
    cookieJwtAuth
}