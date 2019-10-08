const Attendance = require('../models/attendance');
exports.postAttendance = (req,res) => {
    var subject = 'sub1';
    const att = [{
        sap_id:100,
        attendance:'P'
    },{
        sap_id:101,
        attendance:'P'
    }];
    const length =att.length;
    if(subject){
        Attendance.lecturesTaken(subject,function(error,rows){
            if (error) throw error;
        });
        for(let i =0;i<length;i++){
            if(att[i].attendance == 'P'){
                console.log(att[i].sap_id);
                var attend = new Attendance(att[i].sap_id,att[i],subject,'P');
                attend.present();
            }else if(att[i].attendance == 'A'){
                var attend = new Attendance(att[i].sap_id,att[i],subject,'P');
                attend.absent();
            }
        }
    }
};