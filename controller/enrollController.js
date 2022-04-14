const Course = require("../model/courseModel");
const Enroll = require("../model/enrollModel")

const enrollCourses = async (req, res) => {
    try {
        const newBooking = await Enroll(req.body);
        const data = await newBooking.save();
        const courseData = await Course.updateOne({
            _id: req.body.courseId
        }, {
            $push: {
                studentRef: req.body.studentId
            }
        })
        return res.status(201).json({
            message: "course created successfully",
            status: "success",
            data,
            courseData
        });
    } catch (err) {
        return res.status(500).json({
            message: err.message,
            status: "Failed",
        });
    }
}

const getEnrollCourseById = async(req, res) => {
    const id = req.params.id;
    try {
        const response = await Enroll.find({studentid: id}).populate('courseId').exec()
        res.status(200).json({
            message: 'course founded',
            status: 'success',
            total: response.length,
            response
        })
    }
    catch(err) {
        res.status(500).json({
           message: err.message,
           status: 'failed'
        })
    }
}
const getEnrollCourses = async(req, res) => {
    try {
        const response = await Enroll.find()
        res.status(200).json({
            message: 'course founded',
            status: 'success',
            total: response.length,
            response
        })
    }
    catch(err) {
        res.status(500).json({
           message: err.message,
           status: 'failed'
        })
    }
}
module.exports = {enrollCourses, getEnrollCourseById, getEnrollCourses}