const mongoose = require('mongoose')

const CourseSchema = mongoose.Schema({
  course: String,
  duration: String
})

module.exports = mongoose.model('Course', CourseSchema)