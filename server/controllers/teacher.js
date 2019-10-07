const Teacher = require('../models/teacher');
const User = require('../models/users');

exports.postAddTeacher = (req, res, next) => {
  const sap_id = req.body.sap_id;
  const designation = req.body.designation;
  const mentor = req.body.mentor;
  const class_teacher = req.body.class_teacher;
  const salary = req.body.salary;
  const fname = req.body.fname;
  const lname =req.body.lname;
  const email_id = req.body.email_id;
  const password = req.body.password;
  const address = req.body.address;
  const phone_no = req.body.phone_no;
  const year_of_joining = req.body.year_of_joining;
  const user = new User(sap_id,email_id,password,address,phone_no,year_of_joining,fname,lname);
  user.save(); 
  const teacher = new Teacher(sap_id, designation, mentor, class_teacher, salary);
  teacher.save();
  res.redirect('/teacher');
};
exports.postDeleteTeacher = (req, res, next) => {
  const sap_id = req.body.sap_id;
  User.deleteBysap_id(sap_id);
  Teacher.deleteBysap_id(sap_id);
  res.redirect('/teacher');
};
exports.postFetchTeachers = (req, res, next) => {
  Teacher.fetchAll(function(err,rows){
    if(err) throw err;
    console.log(rows);
  });
  res.redirect('/teacher');
};
exports.postFetchBySapId = (req, res, next) => {
  const sap_id = req.body.sap_id;
  Teacher.findBysap_id(sap_id,function(err,rows){
    if(err) throw err;
    console.log(rows);
  });
  res.redirect('/teacher');
};