const path = require('path');

const express = require('express');
const teacherController = require('../controllers/teacher');
const studentController = require('../controllers/student');
const reportController = require('../controllers/attendance-report');

const router = express.Router();

router.post('/add-teacher', teacherController.postAddTeacher);
router.post('/delete-teacher', teacherController.postDeleteTeacher);
router.post('/fetch-all-teacher',teacherController.postFetchTeachers);
router.post('/find-teacher',teacherController.postFetchBySapId);
router.post('/generate-list',teacherController.postGenerateList);
router.post('/add-student',studentController.postAddStudent);
router.post('/delete-student', studentController.postDeleteStudent);
router.post('/fetch-all-student',studentController.postFetchStudents);
router.post('/find-student',studentController.postFetchBySapId);

router.post('/att-report',reportController.genReport);

module.exports = router;