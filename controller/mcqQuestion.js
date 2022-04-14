const MCQ = require("../model/mcqModel")

const mcqQuestion = async (req, res) => {

    try {
        const newQuestion = new MCQ(req.body);
        const response = newQuestion.save();
        return res.status(201).json({
            message: 'question create successfully',
            status: 'success'
        })
    }
    catch (err) {
        return res.status(501).json({
            message: err.message,
            success: 'faild'
        })
    }
}

const getAllMcqQuestion = async(req, res) => {
    try {
        const question = await MCQ.find({});

        res.status(200).json({
            message: 'successfull',
            status: 'success',
            total: question.length,
            mcq: question
        })
    }catch(err) {
        res.status(500).json({
            message: err.message,
            status: 'failed'
        })
    }
}

const getQustionByTecher = async(req, res) => {
    const id = req.params.id;
    try {
        const question = await MCQ.find({author: id}).select('_id examName expirationDate author studentId status');

        res.status(200).json({
            message: 'successfull',
            status: 'success',
            total: question.length,
            mcq: question
        })
    }catch(err) {
        res.status(500).json({
            message: err.message,
            status: 'failed'
        })
    }
}

module.exports = {mcqQuestion, getAllMcqQuestion, getQustionByTecher}