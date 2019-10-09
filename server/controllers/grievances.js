const Grievance = require('../models/grievances');
exports.postAddGrievance = async (req,res,next)=>{
    var sap_id = req.body.sap_id;
    var problem = req.body.grievance;
    var description = req.body.description;
    // var sap_id = "101";
    // var problem = "problem";
    // var description = "problem des";
    const grievance = new Grievance(sap_id, problem, description);
    const rows = await grievance.save();
        //sending  in the grievance ID
            // res.render('somepage',{
            //     grievanceId:rows.insertId
            // });
};
exports.postSolveGrievance = async (req,res,next)=>{
    var grievanceId = req.body.grievanceId;
    var response = req.body.response;
    // var grievanceId = "875153";
    // var response = "problem des";

    const rows = await Grievance.solvingGrievance(grievanceId,response);
        // sending  the pending grievances
            // res.render('somepage',{
            //     grievances:rows
            // });
};
exports.postPendingGrievances = async (req,res,next)=>{
    const rows = await Grievance.pendingGrievances();
        // sending  the pending grievances
            // res.render('somepage',{
            //     grievances:rows
            // });
};
exports.postSolvedGrievances = async (req,res,next)=>{
    const rows = await Grievance.solvedGrievances();
        // sending  the solved grievances
            // res.render('somepage',{
            //     grievances:rows
            // });
};