const express = require('express')
const router = express.Router()

// Import controllers
const UserControllers = require('./controllers/UserController')
const CourseController = require('./controllers/CourseController')
const TeacherController = require('./controllers/TeacherController')

// User Routes
router.get('/users', UserControllers.index)
router.get('/user', UserControllers.show)
router.post('/users', UserControllers.store)
router.put('/users', UserControllers.update)
router.delete('/users', UserControllers.destroy)

// Course Routes
router.get('/courses', CourseController.index)
router.get('/course', CourseController.show)
router.post('/courses', CourseController.store)
router.put('/courses', CourseController.update)
router.delete('/courses', CourseController.destroy)

// Teacher Routes
router.get('/teachers', TeacherController.index)
router.get('/teacher', TeacherController.show)
router.post('/teachers', TeacherController.store)
router.put('/teachers', TeacherController.update)
router.delete('/teachers', TeacherController.destroy)


module.exports = router