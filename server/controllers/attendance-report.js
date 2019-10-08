const Report = require('../models/attendance-report');
exports.genReport = (req,res) =>{
    var countSub1 = 0;
    var countSub2 = 0;
    var countSub3 = 0;
    var countSub4 = 0;
    var countSub5 = 0;
    var countSub6 = 0;

    Report.totalLectures("sub1",function(error,arr){
        if(error) throw error;
        arr.forEach(c => {
            console.log(c)
            countSub1 = c.sub1;
            countSub2 = c.sub2;
            countSub3 = c.sub3;
            countSub4 = c.sub4;
            countSub5 = c.sub5;
            countSub6 = c.sub6;
            console.log(countSub1);
            Report.getAttendance(function(error,rows){
                if (error) throw error;
                rows.forEach(element => {
                    element.sub1 = (element.sub1/countSub1)*100;
                    element.sub2 = (element.sub2/countSub2)*100;
                    element.sub3 = (element.sub3/countSub3)*100;
                    element.sub4 = (element.sub4/countSub4)*100;
                    element.sub5 = (element.sub5/countSub5)*100;
                    element.sub6 = (element.sub6/countSub6)*100;
                });
                console.log(rows);
                res.render('attendance-report',{
                   students:rows  
                });
            });
        });
    });
};