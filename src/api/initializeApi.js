const loginApi = require("./loginApi.js")
const movieApi = require("./movieApi.js")
const staffApi = require("./staffApi.js")

function initializeApis(app) {
    try {
        console.log("Try to initialize APIs...")

        movieApi(app)
        staffApi(app)
        loginApi(app)

        console.log("APIs are ready")
    }
    catch(err) {
        throw new Error(err)
    }
}

module.exports = initializeApis
