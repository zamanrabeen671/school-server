const mongoose = require("mongoose");
const Auth = require("./authModel");

const courseSchema = new mongoose.Schema({
    coursetitle: {
        type: String,
        required: true
    },
    expirationDate: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    instructor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Auth,
        required: true,
    },
    studentRef: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: Auth
        }
    ]

}, { timestamps: true })

const Course = mongoose.model('Course', courseSchema)
module.exports = Course;