const mongoose = require('mongoose')
const bcrypt = require("bcryptjs")

const staffSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    firstname: String,
    surname: String,
    isAdmin: Boolean
})

staffSchema.pre("save", function (next) {
    const staff = this

    if (this.isModified("password") || this.isNew) {
        bcrypt.genSalt(10, function (saltError, salt) {
          if (saltError) {
            return next(saltError)
          } else {
            bcrypt.hash(staff.password, salt, function(hashError, hash) {
              if (hashError) {
                return next(hashError)
              }
    
              staff.password = hash
              next()
            })
          }
        })
      } else {
        return next()
      }
})

const Staff = mongoose.model('Staff', staffSchema)

module.exports = Staff