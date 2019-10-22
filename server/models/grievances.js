const db = require('../util/database');

module.exports = class Grievance {
  constructor(sap_id, grievance,description) {
    this.sap_id = parseInt(sap_id,10);
    this.grievance = grievance;
    this.description = description;
  }
  async save(){
    var sql = "INSERT INTO grievances(sap_id, grievance, description) VALUES ("+db.escape(this.sap_id)+","+db.escape(this.grievance)+","+db.escape(this.description)+")";
    console.log(sql);
    const results = await db.query(sql);
    return results;
  }
  static async solvingGrievance(grievanceId,response){
    var sql = "UPDATE grievances SET response = "+db.escape(response)+", isSolved = 1 WHERE id = "+db.escape(grievanceId);
    console.log(sql);
    let {results} = await db.query(sql);
    return results;
  }
  static async pendingGrievances(){
    var sql = "SELECT *  FROM grievances WHERE isSolved = 0 ORDER BY id";
    console.log(sql);
    let results = await db.query(sql);
    return results;
  }
  static async solvedGrievances(){
    
    var sql = "SELECT *  FROM grievances WHERE isSolved = 1 ORDER BY id";
    console.log(sql);
    let results = await db.query(sql);
    return results;
  }     
};
  