const mongoose = require('mongoose')

const TeacherSchema = mongoose.Schema({
  name: String,
  title: String,
  email: String
})

module.exports = mongoose.model('Teacher', TeacherSchema)