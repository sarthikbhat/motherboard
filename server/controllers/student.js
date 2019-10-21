const Student = require('../models/student');
const User = require('../models/users');
const db = require("../util/database.js");
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
    await user.save();
    const student = new Student(sap_id, division, batch, semester);
    await student.save();
    return res.status(200).json({message:"Student added successfuly"});
};
exports.postDeleteStudent = async (req, res, next) => {
    let sap_id = req.body.sap_id;
    await User.deleteBysap_id(sap_id);
    await Student.deleteBysap_id(sap_id);
    res.status(200).json({message:`Student deleted with sap_id ${sap_id}`});
};
exports.postFetchStudents = async (req, res, next) => {
    var rows =[];
    try{
        rows = await Student.fetchAll();
    }catch(e){
        console.log(e);
    }
    return res.status(200).json({students:rows});
};
exports.postFetchBySapId = async (req, res, next) => {
    var rows = [];
    const sap_id =req.body.sap_id;
    try{
         rows = await Student.findBysap_id(sap_id);
    }catch(e){
        console.log(e);
    }
    console.log(rows)
    res.status(200).json({student:rows});
};