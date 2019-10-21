const db = require("../util/database.js");
const Sequelize = require('sequelize');
module.exports = class Student {
  constructor(sap_id, division, batch,semester) {
    this.sap_id = parseInt(sap_id,10);
    this.division = division;
    this.batch = batch;
    this.semester = semester;
  }
  
  async save() {
      var sql = "INSERT INTO students(sap_id, division, batch, semester) VALUES ("+db.escape(this.sap_id)+","+db.escape(this.division)+","+db.escape(this.batch)+","+db.escape(this.semester)+")";
      console.log(sql);
      let {results} = await db.query(sql);
      return results;
  }
  
  static async deleteBysap_id(id) {
    const sap_id = parseInt(id,10);
    var sql = "DELETE FROM students WHERE sap_id = "+db.escape(sap_id);
    let {results} =  await db.query(sql);
    return results;
  }

  
  static async findBysap_id(sap_id) {
    sap_id = parseInt(sap_id,10);
    var sql = 'SELECT * FROM users NATURAL JOIN students WHERE sap_id = '+db.escape(sap_id);
    let results = await db.query(sql,{type:Sequelize.QueryTypes.SELECT});
    return results;
  }

  static async fetchAll() {
    var sql = "SELECT * FROM users NATURAL JOIN students";
    try{
      let results = {};
      results = await (db.query(sql,{type:Sequelize.QueryTypes.SELECT})) ;
      return results;
    }catch(e){
      return e;
    }
  } 
} ;
