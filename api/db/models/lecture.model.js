const mongoose = require('mongoose');

const LectureSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    _courseId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    modified: {
        type: String,
        default: new Date().toLocaleString('he-IL', {timeZone:'Asia/Jerusalem'})
    }
})

const Lecture = mongoose.model('Lecture', LectureSchema);

module.exports = { Lecture };