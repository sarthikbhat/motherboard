const Report = require('../models/attendance-report');

// exports.genReport = (req,res) =>{
    Report.getAttendance(function(error,rows){
        console.log(rows);
    });
// };