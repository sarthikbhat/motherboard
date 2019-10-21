const User = require('../models/users');
exports.login = async (req,res)=>{
    try{
        // const sap_id = req.body.sap_id;
        // const password = req.body.password;
        const sap_id = 100;
        const password = "pass@123";
        const user = await User.authenticateUser(sap_id,password);
        return res.status(500).json({ message:"Login Successfull"},user);
    }catch(e){
        return res.status(500).json({ error : e});
    }
};