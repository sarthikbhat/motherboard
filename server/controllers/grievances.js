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
        return res.status(200).json({
                grievanceId:rows.insertId
            });
};
exports.postSolveGrievance = async (req,res,next)=>{
    var grievanceId = req.body.grievanceId;
    var response = req.body.response;
    // var grievanceId = "875153";
    // var response = "problem des";
    await Grievance.solvingGrievance(grievanceId,response);
    res.status(200).json({ message:"Response recorded successfully."})

};
exports.postPendingGrievances = async (req,res,next)=>{
    const rows = await Grievance.pendingGrievances();
        // sending  the pending grievances
        return res.status(200).json({
                grievances:rows
            });
};
exports.postSolvedGrievances = async (req,res,next)=>{
    const rows = await Grievance.solvedGrievances();
        // sending  the solved grievances
        return res.status(200).json({
            grievances:rows
        });
};