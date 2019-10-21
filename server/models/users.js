const db = require("../util/database.js");
const  { hashSync, compareSync } = require('bcrypt-nodejs');
const jwt=require('jsonwebtoken');
const Sequelize = require('sequelize');
module.exports = class User {
  constructor(sap_id, email_id,address,phone_no,year_of_joining,fname,lname) {
    this.sap_id = parseInt(sap_id,10);
    this.email_id = email_id;
    this.password = "pass@123";
    this.address = address;
    this.phone_no = parseInt(phone_no,10);
    this.year_of_joining = year_of_joining;
    this.fname =fname;
    this.lname =lname;
    this.otp=null;
    this.otpVerified="";
  }
  async save() {
    var sql = "INSERT INTO users(sap_id, email_id, password, address, phone_no, year_of_joining,fname,lname,otp,optVerified) VALUES ("+db.escape(this.sap_id)+","+db.escape(this.email_id)+","+db.escape(this.password)+","+db.escape(this.address)+","+db.escape(this.phone_no)+","+db.escape(this.year_of_joining)+","+db.escape(this.fname)+","+db.escape(this.lname)+","+db.escape(this.otp)+","+db.escape(this.otpVerified)+")";
    console.log(sql);
    let results = await db.query(sql);
    console.log({results});
    return results;
  }
  
  static async  deleteBysap_id(sap_id) {
    const  id = parseInt(sap_id,10);
    var sql = "DELETE FROM users WHERE sap_id = "+db.escape(id);
    console.log(sql);
    let results = await db.query(sql);
    return results;
  }
  
  static async fetchAll() {
    let results = await db.query('SELECT * FROM users');
    return results;
  }
  
  static async findBysap_id(sap_id) {
    var sql = "SELECT * FROM users WHERE sap_id = "+db.escape(sap_id);
    console.log(sql);
    let results = await db.query(sql);
    return results;
  }
  
  static async authenticateUser(sap_id,password){
    var sql = "SELECT * FROM users WHERE sap_id = "+db.escape(sap_id);
    console.log(sql)
    let results = await db.query(sql,{ type: Sequelize.QueryTypes.SELECT });
    const user = results[0];
    console.log(user.sap_id); 
    if(user){
      // if(compareSync(password,user.password)){
      if(password = user.password){
        var token=jwt.sign({userId:user.sap_id},"secret");
        user.accessToken = token;
        console.log(user);
        return user;
      }else{
          throw "Password  doesn't match";
      }
    }else{
      throw "User doesn't exists."
    }
  }
  static async addOtp(sap_id,OTP){
    var sql = "UPDATE users SET otp = "+db.escape(OTP)+" WHERE sap_id = "+db.escape(sap_id);
    console.log(sql)
    let results = await db.query(sql,{ type: Sequelize.QueryTypes.SELECT });
    return results;
  }
};
  