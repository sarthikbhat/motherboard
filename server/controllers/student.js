const Student = require('../models/student');
const User = require('../models/users');

exports.postAddStudent = async (req, res, next) => {
    const sap_id = req.body.sap_id;
    const division = req.body.division;
    const batch = req.body.batch;
    const semester = req.body.semester;
    const fname = req.body.fname;
    const lname = req.body.lname;
    const email_id = req.body.email_id;
    const password = req.body.password;
    const address = req.body.address;
    const phone_no = req.body.phone_no;
    const year_of_joining = req.body.year_of_joining;
    const user = new User(sap_id,email_id,password,address,phone_no,year_of_joining,fname,lname);
    const rows = await user.save(); 
    const student = new Student(sap_id, division, batch, semester);
    student.save();
    res.redirect('/student');
};
exports.postDeleteStudent = (req, res, next) => {
    const sap_id = req.body.sap_id;
    const user = User.deleteBysap_id(sap_id);
    const student = Student.deleteBysap_id(sap_id);
    res.redirect('/student');
};
exports.postFetchStudents = (req, res, next) => {
    const rows = Student.fetchAll();
};
exports.postFetchBySapId = (req, res, next) => {
    const sap_id =req.body.sap_id;
    const rows = Student.findBysap_id(sap_id);
    res.redirect('/teacher');
};