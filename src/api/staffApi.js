module.exports = function(app) {
    const staffController = require('../controllers/staffController')

    app.post('/staff', staffController.createStaff)
}