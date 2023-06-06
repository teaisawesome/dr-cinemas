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
})
.catch((err) => {
    console.log("Error occured during MongoDb Atlas connection:", err)
})

const PORT = process.env.PORT || 8080

app.get("/", (req, res) => {
    res.json({ message: "Welcome to root page!"})
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})
