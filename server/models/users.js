const db = require("../util/database.js");
module.exports = class User {
  constructor(sap_id, email_id, password,address,phone_no,year_of_joining,fname,lname) {
    this.sap_id = parseInt(sap_id,10);
    this.email_id = email_id;
    this.password = password;
    this.address = address;
    this.phone_no = parseInt(phone_no,10);
    this.year_of_joining = year_of_joining;
    this.fname =fname;
    this.lname =lname;
  }
  async save() {
    var sql = "INSERT INTO users(sap_id, email_id, password, address, phone_no, year_of_joining,fname,lname) VALUES ("+db.escape(this.sap_id)+","+db.escape(this.email_id)+","+db.escape(this.password)+","+db.escape(this.address)+","+db.escape(this.phone_no)+","+db.escape(this.year_of_joining)+","+db.escape(this.fname)+","+db.escape(this.lname)+")";
    console.log(sql);
    let {results} = await db.query(sql);
    console.log(results);
  }
  
  async static deleteBysap_id(sap_id) {
    const sap_id = parseInt(id,10);
    var sql = "DELETE FROM users WHERE sap_id = "+db.escape(sap_id);
    console.log(sql);
    let {results} = await db.query(sql);
    return results;
  }
  
  async static fetchAll() {
    let {results} = await db.query('SELECT * FROM users');
    return results;
  }
  
  async static findBysap_id(sap_id) {
    var sql = "SELECT * FROM users WHERE sap_id = "+db.escape(sap_id);
    console.log(sql);
    let {results} = await db.query(sql);
    return results;
  }
};
  