const path = require('path');

const express = require('express');
const teacherController = require('../controllers/teacher');
const studentController = require('../controllers/student');
const reportController = require('../controllers/attendance-report');
const grievanceController = require('../controllers/grievances');
const attendanceController = require('../controllers/attendance');
const UserController = require('../controllers/user');
const {verify} = require('../auth/auth');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('index');
});
router.get('/teacher',(req,res)=>{
    res.render('teacher');
});
router.get('/student',(req,res)=>{
    res.render('student');
});
router.get('/take-attendance',(req,res)=>{
    res.render('take-attendance',{
        students:[]
    })
});
router.get('/attendance-report',(req,res)=>{
    res.render('attendance-report',{
        students:[]
    })
});

router.post('/add-teacher', teacherController.postAddTeacher);
router.post('/delete-teacher', teacherController.postDeleteTeacher);
router.post('/fetch-all-teacher',teacherController.postFetchTeachers);
router.post('/find-teacher',teacherController.postFetchBySapId);
router.post('/generate-list',teacherController.postGenerateList);
router.post('/add-student',studentController.postAddStudent);
router.post('/delete-student', studentController.postDeleteStudent);
router.post('/fetch-all-student',studentController.postFetchStudents);
router.post('/find-student',studentController.postFetchBySapId);

router.post('/add-grievances',grievanceController.postAddGrievance);
router.post('/att-report',reportController.genReport);
router.post('/postAttendance',attendanceController.postAttendance);

router.post('/login',UserController.login);
router.get('/check/verification',
    verify,
    (req,res,next)=>{
        console.log(req.userId);
        res.status(200).json({message:"Success"});
    }
);
router.post('/send/otp',UserController.sendOTP);
router.post('/otp/verify',UserController.verifyOTP);
router.post('/password/change',UserController.changePassword);
module.exports = router;