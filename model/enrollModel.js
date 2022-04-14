const mongoose = require('mongoose');
const Auth = require('./authModel');
const Course = require('./courseModel');

const enrollSchema  = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Auth,
        required: true
    },
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Course,
        required: true
    },
},{ timestamps: true })

const Enroll = mongoose.model('Enroll', enrollSchema)

module.exports = Enroll;