const db = require('../util/database');

module.exports = class Report{
    static async  getAttendance(){
        var sql = "SELECT *  FROM attendance  WHERE sap_id IN (SELECT sap_id FROM students)";
        console.log(sql);
        let results = await db.query(sql);
        return results;
    }
    static async  totalLectures(subject){
        if(subject == "sub1"){
            var sql = "SELECT * FROM lectures";
            console.log(sql);
            let results = await db.query(sql);
            return results;
        }
    }
}