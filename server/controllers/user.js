const User = require('../models/users');
const {sendEmail} = require('../config/sendgrid');
const {sendOTPMessage} = require('../config/twilio');
async function generateOTP() {  
    var digits = '0123456789'; 
    let OTP = ''; 
    for (let i = 0; i < 4; i++ ) { 
        OTP += digits[Math.floor(Math.random() * 10)]; 
    }
    return OTP;
} 
async function sendOTPviaEmail(sap_id){
    let user = await User.findBysap_id(sap_id);
    if(user.length > 0 ){
        let OTP = await generateOTP();
        console.log("OTP>>",OTP);
        let msgDetails = {
            otp:OTP,
            toEmail:user.email,
        }
        await User.addOtp(user.sap_id,OTP);
        let result = await sendEmail(msgDetails);
        if(result){
            return true;
        }else{
            throw("Sendgrid Error (Network problem)");
        }  
    }else{
        throw "User Not Found";
    }
}
async function sendOTPviaPhoneNo(sap_id){
    let users = await User.findBysap_id(sap_id);
    if(users.length > 0 ){
        var user = users[0];
        let OTP = await generateOTP();
        console.log("OTP>>",OTP);
        await User.addOtp(user.sap_id,OTP);
        let result = await sendOTPMessage(OTP,`+91${user.phoneNo}`);
        if(result){
            return true;        
        }else{
            return "Twilio Error (Network problem)";
        }
    }else{
        throw "User Not Found";
    }
}
exports.login = async (req,res)=>{
    try{
        const sap_id = req.body.sap_id;
        const password = req.body.password;
        // const sap_id = 100;
        // const password = "pass@123";
        const user = await User.authenticateUser(sap_id,password);
        return res.status(500).json({ message:"Login Successfull"},user);
    }catch(e){
        return res.status(500).json({ error : e});
    }
};
exports.sendOTP = async (req,res)=>{
    const { email,phoneno,sap_id } = req.body;
    try{
        if(email){
            await sendOTPviaEmail(sap_id)
        }else if(phoneno){
            await sendOTPviaPhoneNo(sap_id);
        }
    }catch(err){
        return res.status(500).json({error:err})
    }
};
exports.verifyOTP = async (req,res)=>{
    try{
        const {sap_id,otp} = req.body;
        let result = await User.verifyOTP(sap_id,otp);
        if(result){
            return res.success("OTP Verified!!");
        }else{
            throw "Cant verify otp";
        }
    }catch(e){
        return res.status(500).json({error:err})
    }
};
exports.changePassword = async (req,res)=>{
    try{
        var { password,confirmPassword,sap_id } = req.body;
        if(password === confirmPassword){
            await UserModel.changePassword(body);
            return res.success("Password Change Successfull");
        }else{
            return res.error("Password And Confirm Password should Match");
        }
    }catch(e){
        return res.error(e);
    }
};