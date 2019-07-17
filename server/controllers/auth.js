const db = require('../utils/database.js');

exports.postStudentLogin = async (req,res) => {
    
};
exports.postTeacherLogin = async (req,res) => {
    const { sapid, password } = req.body;
    let teacher;
    if (!sapid || !password) {
		return res.json({
			success: false,
			message: "One or more required fields are empty."
		});
    }
    try{
        const [teachers] = await db.query('SELECT * FROM teachers WHERE sap_id = ?',[sapid]);
        if(!teachers){
            return res.json({
				success: false,
				message: "Please check your SAP_ID"
			});
        }
        if(teacher[0].password != password){
            return res.json({
				success: false,
				message: "Password Incorrect."
			});     
        }
        //
        //  TOKEN LOGIC
        //
        res.redirect("/dashboard?type=teacher");
    }
    catch(err){
        return res.json({ success: false, message: `${err}` });
    }
};