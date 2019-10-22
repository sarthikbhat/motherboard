const db = require('../util/database');
const Sequelize = require('sequelize');
module.exports = class Teacher {
  constructor(sap_id, designation,mentor,class_teacher,salary) {
    this.sap_id = parseInt(sap_id,10);
    this.designation = designation;
    this.salary = salary;
    this.mentor = mentor;
    this.class_teacher = class_teacher;
  }
  async save(){
    var sql = "INSERT INTO teachers(sap_id, designation, mentor, class_teacher,salary) VALUES ("+db.escape(this.sap_id)+","+db.escape(this.designation)+","+db.escape(this.mentor)+","+db.escape(this.class_teacher)+","+db.escape(this.salary)+")";
    console.log(sql);
    let results = await db.query(sql);
    return results;
  }
  
  static async  deleteBysap_id(id) {
    const sap_id = parseInt(id,10);
    var sql = "DELETE FROM teachers WHERE sap_id = "+db.escape(sap_id);
    console.log(sql);
    let results = await db.query(sql);
    return results;
  }
  
  static async fetchAll() {
    var sql = "SELECT * FROM users NATURAL JOIN teachers";
    try{
      let results = {};
      results = await (db.query(sql,{type:Sequelize.QueryTypes.SELECT})) ;
      console.log(results);
      return results;
    }catch(e){
      return e;
    }
  }
  
  static async findBysap_id(sap_id) {
    sap_id = parseInt(sap_id,10);
    var sql = 'SELECT * FROM users NATURAL JOIN teachers WHERE sap_id = '+db.escape(sap_id);
    let results = await db.query(sql,{type:Sequelize.QueryTypes.SELECT});
    return results;
  }
  
  static async GenerateList(semester,division){
    // db.query('SELECT sap_id,fname,lname FROM users WHERE sap_id IN (SELECT sap_id FROM students WHERE semester = '+db.escape(semester)+'AND division = '+ db.escape(division),callback);
    let results = await db.query("SELECT sap_id,fname,lname FROM users WHERE sap_id IN (SELECT sap_id FROM students WHERE semester = "+db.escape(semester)+" AND division = "+db.escape(division)+")",{ type: Sequelize.QueryTypes.SELECT })
    return results;
  }

};
  