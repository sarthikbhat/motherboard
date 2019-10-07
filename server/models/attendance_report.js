const db = require('../util/database');

module.exports = class Report {
    constructor(sap_id, designation,subjects, mentor,class_teacher) {
      this.sap_id = parseInt(sap_id,10);
      this.designation = designation;
      this.subjects = subjects;
      this.mentor = mentor;
      this.class_teacher = class_teacher;
  
    }
    save(){
            var sql = "INSERT INTO teachers(sap_id, designation, subjects, mentor, class_teacher) VALUES ("+db.escape(this.sap_id)+","+db.escape(this.designation)+","+db.escape(this.subjects)+","+db.escape(this.mentor)+","+db.escape(this.class_teacher)+")";
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
  
    static fetchAll() {
      //  db.query('SELECT * FROM teachers', function (error, results, fields) {
      //   if (!error) {
      //     const teachers = results;
      //     console.log(teachers);
      //     return teachers;
      //   }
      //   else {
      //     console.log(error);
      //   }
      // });
      return db.execute('SELECT * FROM teachers');
      
    }
  
    static findBysap_id(sap_id) {
      return db.execute('SELECT * FROM teachers WHERE teachers.sap_id = ?', [sap_id]);
    }
  };
  