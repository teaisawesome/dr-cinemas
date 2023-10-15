require('dotenv').config()

const firebaseConfig = {
    apiKey: `${process.env.FB_API_KEY}`,
    authDomain: `${process.env.FB_AUTH_DOMAIN}`,
    projectId: "dr-cinemas-img-store",
    storageBucket: "dr-cinemas-img-store.appspot.com",
    messagingSenderId: `${process.env.FB_MESSAGING_SENDER_ID}`,
    appId: `${process.env.FB_APP_ID}`,
    measurementId: `${process.env.FB_MESAUREMENT_ID}`
}

module.exports = {
    mongoDbConnection: `mongodb+srv://${process.env.MONGODB_CONNECTION_USERNAME}:${process.env.MONGODB_ATLAS_CONNECTION_PASSWORD}@drcluster.taokyft.mongodb.net/dr-cinemas?retryWrites=true&w=majority`,
    firebaseConfig: firebaseConfig
}