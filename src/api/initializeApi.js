const movieApi = require("./movieApi.js")
const staffApi = require("./staffApi.js")

function initializeApis(app) {
    try {
        console.log("Try to initialize APIs...")

        movieApi(app)
        staffApi(app)

        console.log("APIs are ready")
    }
    catch(err) {
        throw new Error(err)
    }
}

module.exports = initializeApis
