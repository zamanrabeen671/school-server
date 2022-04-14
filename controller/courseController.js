const Course = require("../model/courseModel");
const createCourse = async (req, res) => {
  try {
    const newCourse = new Course(req.body);
    const data = await newCourse.save();
    return res.status(200).json({
      message: "enroll successfully",
      status: "success",
      data,
    });
  } catch (err) {
    return res.status(400).json({
      message: err.message,
      status: "Failed",
    });
  }
};

/**
 * get all course
 */

const getAllCourse = async (req, res) => {
  try {
    const course = await Course.find({});
    return res.status(200).json({
      message: "successfull",
      status: "success",
      total: course.length,
      course,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
      status: "Failed",
    });
  }
};

// get all coures by teacher id

const getCourseByTeacherId = async (req, res) => {
  const id = req.params.id;
  try {
    const teacherCourse = await Course.find({ instructor: id });
    return res.status(200).json({
      message: "successfull",
      status: "success",
      total: teacherCourse.length,
      teacherCourse,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
      status: "Failed",
    });
  }
};
module.exports = { createCourse, getAllCourse, getCourseByTeacherId };
