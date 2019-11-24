const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  name: String,
  username: {
    type: String,
    unique: true
  },
  email: String,
  password: String,
  create_at: Date
})

module.exports = mongoose.model('user', UserSchema)