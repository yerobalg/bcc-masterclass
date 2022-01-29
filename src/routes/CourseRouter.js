const courseRouter = require("express").Router();
const CourseController = require("../controllers/CourseController");
const authMid = require("../middlewares/AuthMiddleware");

module.exports = courseRouter
  .post(
    "/",
    authMid.authorizeLogin,
    authMid.authorizeRole([3]),
    CourseController.addNewCourse
  )
  .get("/", authMid.authorizeLogin, CourseController.getAllCourses)
  .delete(
    "/",
    authMid.authorizeLogin,
    authMid.authorizeRole([1]),
    CourseController.deleteAllCourses
  )
  .get(
    "/:courseId",
    authMid.authorizeLogin,
    CourseController.getCourseByCourseId
  )
  .put("/:courseId", authMid.authorizeLogin, CourseController.updateCourse)
  .get(
    "/:instructorId",
    authMid.authorizeLogin,
    CourseController.getInstructorsCourses
  );
