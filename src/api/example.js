const express = require('express')
const app = express()

app.use(bodyParser.json())
app.use(cors())

const mongoose = require('mongoose')
const db = 'mongodb+srv://<username>:<password>@drcluster.taokyft.mongodb.net/?retryWrites=true&w=majority'

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: String,
    author: String,
    currDate: { type: Date, default: Date.now }
})

const Blog = mongoose.model('TestBlog', blogSchema)