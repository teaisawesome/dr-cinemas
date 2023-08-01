module.exports = function(app) {
    const staffController = require('../controllers/staffController')

    app.post('/login', staffController.loginStaff)
}