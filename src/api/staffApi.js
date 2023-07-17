module.exports = function(app) {
    const staffController = require('../controllers/staffController')

    app.get('/staff', staffController.findAllStaff)
    app.post('/staff', staffController.createStaff)

}