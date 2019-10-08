const Grievance = require('../models/grievances');
exports.postAddGrievance = (req,res,next)=>{
    var sap_id = req.body.sap_id;
    var problem = req.body.grievance;
    var description = req.body.description;
    // var sap_id = "101";
    // var problem = "problem";
    // var description = "problem des";
    const grievance = new Grievance(sap_id, problem, description);
    grievance.save(function(error,rows){
        //sending  in the grievance ID
        // res.render('somepage',{
        //     grievanceId:rows.insertId
        // });
    });
};
exports.postSolveGrievance = (req,res,next)=>{
    var grievanceId = req.body.grievanceId;
    var response = req.body.response;
    // var grievanceId = "875153";
    // var response = "report to modiji";

    Grievance.solveGrievance(grievanceId,response,function(error,rows){
        if (error) throw error;
    });
};
