const db = require('../util/database');
const Sequelize = require('sequelize');
module.exports = class Attendance {
  constructor(sap_id,subject) {
    this.sap_id = parseInt(sap_id,10);
    this.subject = subject;
  }
  async present(){
    if(this.subject == 'sub1'){
      var sql = " UPDATE attendance SET sub1 = sub1 + 1 WHERE sap_id = "+db.escape(this.sap_id);
      console.log(sql);
      let results = await db.query(sql);
      return results;
    }
    if(this.subject == 'sub2'){
      var sql = " UPDATE attendance SET sub2 = sub2 + 1 WHERE sap_id = "+db.escape(this.sap_id);
      console.log(sql);
      let results = await db.query(sql);
      return results;
    }
    if(this.subject == 'sub3'){
      var sql = " UPDATE attendance SET sub3 = sub3 + 1 WHERE sap_id = "+db.escape(this.sap_id);
      console.log(sql);
      let results = await db.query(sql);
      return results;
    }
    if(this.subject == 'sub4'){
      var sql = " UPDATE attendance SET sub4 = sub4 + 1 WHERE sap_id = "+db.escape(this.sap_id);
      console.log(sql);
      let results = await db.query(sql);
      return results;
    }
    if(this.subject == 'sub5'){
      var sql = " UPDATE attendance SET sub5 = sub5 + 1 WHERE sap_id = "+db.escape(this.sap_id);
      console.log(sql);
      let results = await db.query(sql);
      return results;
    }
    if(this.subject == 'sub6'){
      var sql = " UPDATE attendance SET sub6 = sub6 + 1 WHERE sap_id = "+db.escape(this.sap_id);
      console.log(sql);
      let results = await db.query(sql);
      return results;
    }  
  }
  async absent(){
    if(this.subject == 'sub1'){
      var sql = " UPDATE attendance SET sub1 = sub1 - 1 WHERE sap_id = "+db.escape(this.sap_id);
      console.log(sql);
      let results = await db.query(sql);
      return results;
    }
    if(this.subject == 'sub2'){
      var sql = " UPDATE attendance SET sub2 = sub2 - 1 WHERE sap_id = "+db.escape(this.sap_id);
      console.log(sql);
      let results = await db.query(sql);
      return results;
    }
    if(this.subject == 'sub2'){
      var sql = " UPDATE attendance SET sub2 = sub2 - 1 WHERE sap_id = "+db.escape(this.sap_id);
      console.log(sql);
      let results = await db.query(sql);
      return results;
    }
    if(this.subject == 'sub3'){
      var sql = " UPDATE attendance SET sub3 = sub3 - 1 WHERE sap_id = "+db.escape(this.sap_id);
      console.log(sql);
      let results = await db.query(sql);
      return results;;
    }
    if(this.subject == 'sub4'){
      var sql = " UPDATE attendance SET sub4 = sub4 - 1 WHERE sap_id = "+db.escape(this.sap_id);
      console.log(sql);
      let results = await db.query(sql);
      return results;
    }
    if(this.subject == 'sub5'){
      var sql = " UPDATE attendance SET sub5 = sub5 - 1 WHERE sap_id = "+db.escape(this.sap_id);
      console.log(sql);
      let results = await db.query(sql);
      return results;
    }
    if(this.subject == 'sub6'){
      var sql = " UPDATE attendance SET sub6 = sub6 - 1 WHERE sap_id = "+db.escape(this.sap_id);
      console.log(sql);
      let results = await db.query(sql);
      return results;
    }
  }
  static async  lecturesTaken(subject,cb){
    if(subject == 'sub1'){
      let results = await db.query("UPDATE lectures SET sub1 = sub1 + 1");
      return results;
    }
    if(subject == 'sub2'){
      let results = await db.query("UPDATE lectures SET sub2 = sub2 + 1");
      return results;
    }
    if(subject == 'sub3'){
      let results = await db.query("UPDATE lectures SET sub3 = sub3 + 1");
      return results;
    }
    if(subject == 'sub4'){
      let results = await db.query("UPDATE lectures SET sub4 = sub4 + 1");
      return results;
    }
    if(subject == 'sub5'){
      let results = await db.query("UPDATE lectures SET sub5 = sub5 + 1");
      return results;
    }
    if(subject == 'sub5'){
      let results = await db.query("UPDATE lectures SET sub6 = sub6 + 1");
      return results;
    }
  }
  static resetAttendance(){
    //RESET ATTENDANCE AT START OF SEMESTER OR MONTH 
    db.query('TRUNCATE TABLE attendance');
    db.query('INSERT INTO attendance(sap_id) SELECT sap_id FROM students');
  }
  static resetTotalLectures(){
    db.query('TRUNCATE TABLE lectures');
  }
};
  