const db = require('../util/database');

module.exports = class Attendance {
  constructor(sap_id, attendance ,subject) {
    this.sap_id = parseInt(sap_id,10);
    this.attendance = attendance;
    this.subject = subject;
  }
  present(){
    if(this.subject == 'sub1'){
      var sql = " UPDATE attendance SET sub1 = sub1 + 1 WHERE sap_id = "+db.escape(this.sap_id);
      console.log(sql);
      db.query(sql);
    }
    if(this.subject == 'sub2'){
      var sql = " UPDATE attendance SET sub2 = sub2 + 1 WHERE sap_id = "+db.escape(this.sap_id);
      console.log(sql);
      db.query(sql);
    }
    if(this.subject == 'sub2'){
      var sql = " UPDATE attendance SET sub2 = sub2 + 1 WHERE sap_id = "+db.escape(this.sap_id);
      console.log(sql);
      db.query(sql);
    }
    if(this.subject == 'sub3'){
      var sql = " UPDATE attendance SET sub3 = sub3 + 1 WHERE sap_id = "+db.escape(this.sap_id);
      console.log(sql);
      db.query(sql);
    }
    if(this.subject == 'sub4'){
      var sql = " UPDATE attendance SET sub4 = sub4 + 1 WHERE sap_id = "+db.escape(this.sap_id);
      console.log(sql);
      db.query(sql);
    }
    if(this.subject == 'sub5'){
      var sql = " UPDATE attendance SET sub5 = sub5 + 1 WHERE sap_id = "+db.escape(this.sap_id);
      console.log(sql);
      db.query(sql);
    }
    if(this.subject == 'sub6'){
      var sql = " UPDATE attendance SET sub6 = sub6 + 1 WHERE sap_id = "+db.escape(this.sap_id);
      console.log(sql);
      db.query(sql);
    }  
  }
  absent(){
    if(this.subject == 'sub1'){
      var sql = " UPDATE attendance SET sub1 = sub1 - 1 WHERE sap_id = "+db.escape(this.sap_id);
      console.log(sql);
      db.query(sql);
    }
    if(this.subject == 'sub2'){
      var sql = " UPDATE attendance SET sub2 = sub2 - 1 WHERE sap_id = "+db.escape(this.sap_id);
      console.log(sql);
      db.query(sql);
    }
    if(this.subject == 'sub2'){
      var sql = " UPDATE attendance SET sub2 = sub2 - 1 WHERE sap_id = "+db.escape(this.sap_id);
      console.log(sql);
      db.query(sql);
    }
    if(this.subject == 'sub3'){
      var sql = " UPDATE attendance SET sub3 = sub3 - 1 WHERE sap_id = "+db.escape(this.sap_id);
      console.log(sql);
      db.query(sql);
    }
    if(this.subject == 'sub4'){
      var sql = " UPDATE attendance SET sub4 = sub4 - 1 WHERE sap_id = "+db.escape(this.sap_id);
      console.log(sql);
      db.query(sql);
    }
    if(this.subject == 'sub5'){
      var sql = " UPDATE attendance SET sub5 = sub5 - 1 WHERE sap_id = "+db.escape(this.sap_id);
      console.log(sql);
      db.query(sql);
    }
    if(this.subject == 'sub6'){
      var sql = " UPDATE attendance SET sub6 = sub6 - 1 WHERE sap_id = "+db.escape(this.sap_id);
      console.log(sql);
      db.query(sql);
    }
  }
  static resetAttendance(){
    //RESET ATTENDANCE AT START OF SEMESTER OR MONTH 
    db.query('TRUNCATE TABLE attendance');
    db.query('INSERT INTO attendance(sap_id) SELECT sap_id FROM students');
  }
};
  