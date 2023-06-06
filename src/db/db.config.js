require('dotenv').config()

module.exports = {
    mongoDbConnection: `mongodb+srv://${process.env.MONGODB_CONNECTION_USERNAME}:${process.env.MONGODB_ATLAS_CONNECTION_PASSWORD}@drcluster.taokyft.mongodb.net/?retryWrites=true&w=majority`
}