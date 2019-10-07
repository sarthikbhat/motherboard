const db = require("../util/database.js");

module.exports = class Student {
  constructor(sap_id, division, batch,semester) {
    this.sap_id = parseInt(sap_id,10);
    this.division = division;
    this.batch = batch;
    this.semester = semester;
  }
  
  save() {
      var sql = "INSERT INTO students(sap_id, division, batch, semester) VALUES ("+db.escape(this.sap_id)+","+db.escape(this.division)+","+db.escape(this.batch)+","+db.escape(this.semester)+")";
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
    var sql = "DELETE FROM students WHERE sap_id = "+db.escape(sap_id);
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
  
  static fetchAll(callback) {
    db.query('SELECT * FROM students',callback);
  }
  
  static findBysap_id(sap_id,callback) {
    db.query('SELECT * FROM users NATURAL JOIN students WHERE sap_id = '+db.escape(sap_id),callback);
  }
};
  