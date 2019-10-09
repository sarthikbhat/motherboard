const Attendance = require('../models/attendance');
exports.postAttendance = async (req,res) => {
    var subject = req.body.subject;
    const att = req.body.att;
    // var subject = 'sub1';
    // const att = [{
    //     sap_id:100,
    //     attendance:'P'
    // },{
    //     sap_id:101,
    //     attendance:'P'
    // }];
    const length =att.length;
    if(subject){
        Attendance.lecturesTaken(subject);
        for(let i =0;i<length;i++){
            if(att[i].attendance == 'P'){
                console.log(att[i].sap_id);
                var attend = new Attendance(att[i].sap_id,att[i],subject,'P');
                const rows = await attend.present();
            }else if(att[i].attendance == 'A'){
                var attend = new Attendance(att[i].sap_id,att[i],subject,'A');
                const rows = await attend.absent();
            }
        }
    }
};