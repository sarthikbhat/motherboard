const db = require('../util/database');

module.exports = class Teacher {
  constructor(sap_id, designation,mentor,class_teacher,salary) {
    this.sap_id = parseInt(sap_id,10);
    this.designation = designation;
    this.salary = salary;
    this.mentor = mentor;
    this.class_teacher = class_teacher;
  }
  save(){
    var sql = "INSERT INTO teachers(sap_id, designation, mentor, class_teacher,salary) VALUES ("+db.escape(this.sap_id)+","+db.escape(this.designation)+","+db.escape(this.mentor)+","+db.escape(this.class_teacher)+","+db.escape(this.salary)+")";
    console.log(sql);
    db.query(sql,function(error,results,fields){
    if (error){
      console.log(error);
    }
    if(results){
      console.log(results);
    }
    });
  }
  
  static deleteBysap_id(id) {
    const sap_id = parseInt(id,10);
    var sql = "DELETE FROM teachers WHERE sap_id = "+db.escape(sap_id);
    console.log(sql);
    db.query(sql,function(error,results,fields){
      if (error){
        console.log(error);
      }
      if(results){
        console.log(results);
      }
    });
  }
  
  static  fetchAll(callback) {
    var query = "SELECT * FROM teachers";
    db.query(query, callback);
  };
  
  static findBysap_id(sap_id,callback) {
    db.query('SELECT * FROM users NATURAL JOIN teachers WHERE sap_id = '+db.escape(sap_id),callback);
  }
  
  static GenerateList(semester,division,callback){
    db.query('SELECT sap_id FROM students WHERE semester = '+db.escape(semester)+'AND division = '+db.escape(division),callback);
  }

};
  