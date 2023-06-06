const express = require("express")
const bodyParser = require("body-parser") // :magyarázat
const mongoose = require("mongoose")

const mongoDbAtlasConnection = require("./src/db/db.config.js")

const app = express()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect(mongoDbAtlasConnection.mongoDbConnection)
.then((succ)=> {
    console.log("Successfully connected to MongoDb Atlas!")
    initApis()
    console.log("APIs are ready!")
})
.catch((err) => {
    console.log("Error occured during MongoDb Atlas connection:", err)
})

function initApis() {
    require("./src/api/movieApi.js")(app)
}

const PORT = process.env.PORT || 8080

app.get("/", (req, res) => {
    res.json({ message: "Welcome to root page!"})
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})
