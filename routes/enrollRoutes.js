const { enrollCourses, getEnrollCourseById, getEnrollCourses } = require("../controller/enrollController");
const verifyToken = require("../helper/verifyToken");

const enrollRouter = require("express").Router();

enrollRouter.post("/courseBook", verifyToken, enrollCourses);
enrollRouter.get('/courses/:id', verifyToken, getEnrollCourseById)
enrollRouter.get('/courses', getEnrollCourses)

module.exports = enrollRouter;
