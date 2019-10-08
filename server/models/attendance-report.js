const db = require('../util/database');

module.exports = class Report{
    static getAttendance(cb){
        db.query("SELECT *  FROM attendance  WHERE sap_id IN (SELECT sap_id FROM students)",cb);
    }
    static totalLectures(subject,cb){
        if(subject == "sub1"){
            db.query("SELECT * FROM lectures",cb);
        }
    }
}