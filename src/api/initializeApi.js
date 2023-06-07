const movieApi = require("./movieApi.js")

function initializeApis(app) {
    try {
        console.log("Try to initialize APIs...")

        movieApi(app)

        console.log("APIs are ready")
    }
    catch(err) {
        throw new Error(err)
    }
}

module.exports = initializeApis
