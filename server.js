const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const mongoDbAtlasConnection = require('./src/db/db.config.js')
const initializeApis  = require('./src/api/initializeApi.js')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: process.env.ALLOWED_ORIGIN
}))

// CORS beállítások
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Origin', process.env.ALLOWED_ORIGIN);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Authorization')

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

const PORT = process.env.SERVER_PORT || 8080

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to root page!'})
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})
