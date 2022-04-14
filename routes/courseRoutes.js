const {
  createCourse,
  getAllCourse,
  getCourseByTeacherId,
} = require("../controller/courseController");
const verifyToken = require("../helper/verifyToken");

const courseRouter = require("express").Router();
/**
 * To create a course a teacher must be
 * logged in
 * token must be sent by the header with Authorization key
 * example: 
 
  headers: {
    'Authorization': token,
    'content-type': 'text/json'
  }

 */
courseRouter.post("/create", verifyToken, createCourse);

// public routes
courseRouter.get("/", verifyToken, getAllCourse);

// public routes
courseRouter.get("/:id", verifyToken, getCourseByTeacherId);

module.exports = courseRouter;
