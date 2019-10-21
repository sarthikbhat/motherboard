const Teacher = require('../models/teacher');
const User = require('../models/users');

exports.postAddTeacher = async (req, res, next) => {
  const sap_id = req.body.sap_id;
  const designation = req.body.designation;
  const mentor = req.body.mentor;
  const class_teacher = req.body.class_teacher;
  const salary = req.body.salary;
  const fname = req.body.fname;
  const lname =req.body.lname;
  const email_id = req.body.email_id;
  const address = req.body.address;
  const phone_no = req.body.phone_no;
  const year_of_joining = req.body.year_of_joining;
  const user = new User(sap_id,email_id,address,phone_no,year_of_joining,fname,lname);
  await user.save(); 
  const teacher = new Teacher(sap_id, designation, mentor, class_teacher, salary);
  await teacher.save();
  return res.status(200).json({message:"Teacher added successfuly"});
};
exports.postDeleteTeacher = async (req, res, next) => {
  let sap_id = req.body.sap_id;
  await User.deleteBysap_id(sap_id);
  await Teacher.deleteBysap_id(sap_id);
  res.status(200).json({message:`Teacher deleted with sap_id ${sap_id}`});
};

exports.postFetchTeachers = async (req, res, next) => {
  var rows =[];
  try{
      rows = await Teacher.fetchAll();
  }catch(e){
      console.log(e);
  }
  return res.status(200).json({teachers:rows});
};
exports.postFetchBySapId = async (req, res, next) => {
  // const sap_id = req.body.sap_id;
  // const rows = await Teacher.findBysap_id(sap_id);
  // return res.status(200).json({teacher:rows});
  var rows = [];
    const sap_id =req.body.sap_id;
    try{
         rows = await Teacher.findBysap_id(sap_id);
    }catch(e){
        console.log(e);
    }
    console.log(rows)
    res.status(200).json({teacher:rows});
};
exports.postGenerateList = async (req, res, next) => {
  const semester = req.body.semester;
  const division = req.body.division;
  // Teacher.GenerateList(semester,division,function(err,rows){
  //   if(err) throw err;
  //   res.render('take-attendance',{
  //     students:rows
  //   })
  // });
  const rows = await Teacher.GenerateList(semester,division);
  return res.satus(200).json({students:rows});
};