const Exam = require("../model/examModel");
const MCQ = require("../model/mcqModel");

const examination = async(req, res) => {
    try{
        const  newExam = await new Exam(req.body);
        const response  = await newExam.save();
        const attendStudent = await MCQ.updateOne({
            _id: req.body.mcqExamId
        }, {
            $push: {
                studentId: req.body.studentId
            }
        })
        return res.status(201).json({
            message: 'exam successfully end',
            status: 'success',
            response,
            attendStudent
        })
    }catch(err) {
        res.status(501).json({
            message: err.message,
            status: 'failed'
        })
    }
}

const participentExam = async(req, res) => {
    const id = req.params.id
    try {
        const response = await Exam.find({studentId: id}).select('_id studentId mcqExamId updatedAt').populate({path: 'mcqExamId', select: 'examName expirationDate status'}).exec()
        res.status(200).json({
            message: 'particepend exma found',
            status: 'success',
            total: response.length,
            response
        })
    }catch(err) {
        res.status(500).json({
            message: err.message,
            status: 'failed'
        })
    }
}
module.exports = {examination, participentExam}