const mongoose = require('mongoose');
const Auth = require('./authModel');
const MCQ = require('./mcqModel');

const examSchema = mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Auth
    },
    mcqExamId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: MCQ
    },
    studentAnswer: [
        {
            quizId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: MCQ
            },
            answer: {
                type: String,
                required: true
            }
        }
    ]
}, {timestamps: true})

const Exam = mongoose.model('Exam', examSchema);

module.exports = Exam;