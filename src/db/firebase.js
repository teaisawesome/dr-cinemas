const firebase = require('firebase/app')
const firebaseConfig = require('./db.config').firebaseConfig
const { getStorage, ref} = require('firebase/storage')

let firebaseInstance = null

class Firebase {
    constructor() {
        if(!firebaseInstance) {
            this.app = firebase.initializeApp(firebaseConfig)
            const storage = getStorage(this.app)
            this.storageRef = ref(storage, 'gs://dr-cinemas-img-store.appspot.com')
            firebaseInstance = this
        } else {
            return firebaseInstance
        }
    }

    getInstance() {
        return this.app
    }

    getStorageRef() {
        return this.storageRef
    }
}

module.exports = new Firebase()