const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
})

const Course = mongoose.model('Course', CourseSchema);

module.exports = { Course };