const db = require('../util/database');

module.exports = class Report{
    static getAttendance(cb){
        db.query("SELECT sub1  FROM attendance  WHERE sap_id IN (SELECT sap_id FROM students)",cb)
    }
}