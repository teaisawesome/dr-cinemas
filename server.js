const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const mongoDbAtlasConnection = require('./src/db/db.config.js')
const initializeApis  = require('./src/api/initializeApi.js')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

// CORS beállítások
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', process.env.ALLOWED_ORIGIN); // Engedélyezett eredet (domain)
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Engedélyezett kérésmetódusok
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Engedélyezett fejlécek
    next();
});

mongoose.connect(mongoDbAtlasConnection.mongoDbConnection)
.then((succ)=> {
    console.log('Successfully connected to MongoDb Atlas!')
    initializeApis(app)
})
.catch((err) => {
    console.log('Error occured during MongoDb Atlas connection:', err)
})

const PORT = process.env.PORT || 8080

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to root page!'})
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})
