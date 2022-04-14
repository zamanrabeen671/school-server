const mongoose = require('mongoose');
const Auth = require('./authModel');

const mcqSchema = mongoose.Schema({
    examName: {
        type: String,
        required: true
    },
    expirationDate: {
        type: Date,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Auth
    },
    studentId: [
        {
            type: mongoose.Types.ObjectId,
            ref: Auth,
        }
    ],
    status: {
        type: String,
        enum: ['new', 'on-going', 'finish'],
    },
    question: [
        {
            quizname: {
                type: String,
                required: true
            },
            quiz: [
                {
                    type: String,
                    required: true
                }
            ],
            answer: {
                type: String,
                required: true
            }
        }
    ]
})

const MCQ = mongoose.model('McqQuestion', mcqSchema)

module.exports = MCQ;