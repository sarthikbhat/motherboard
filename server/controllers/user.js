const UserModel = require('../models/user');
const constants = require('../config/constants');
const {filteredBody} = require('../utils/filterBody');
const {sendEmail} = require('../config/sendgrid');


async function generateOTP() {  
    var digits = '0123456789'; 
    let OTP = ''; 
    for (let i = 0; i < 4; i++ ) { 
        OTP += digits[Math.floor(Math.random() * 10)]; 
    }
    return OTP;
} 

async function sendOTPviaEmail(sapId){
    let user = await UserModel.checkUser(null,sapId);
    if(user){
        let OTP = await generateOTP();
        console.log("OTP>>",OTP);
        let msgDetails = {
            OTP:OTP,
            toEmail:user.email,
        }

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

async function sendOTPviaPhoneNo(sapId){
    let user = UserModel.checkUser(null,sapId);
    if(user){

    }else{
        throw "User Not Found";
    }
}

module.exports = {
    async createUser(req,res,next){
        try{
            let body = filteredBody(req.body,constants.WHITELIST.users.register);
            let user = await UserModel.createUser(body);
            await UserModel.createPassword(user.sap_id,"init@123");
            return res.success("User Added");
        }catch(e){
            return res.error(e);
        }
    },
    
    async login(req,res,next){
        try{
            let body  = filteredBody(req.body,constants.WHITELIST.users.login);
            let user = await UserModel.authenticateUser(body.sap_id,body.password);
            return res.success("Login Successfull",user);
        }catch(e){
            return res.error(e);
        }
    },

    async sendOTP(req,res,next){
        try{
            let body = filteredBody(req.body,constants.WHITELIST.users.sendOTP);
            if(body.email){
                await sendOTPviaEmail(body.sap_id)
            }else if(body.phoneNo){
                await sendOTPviaPhoneNo(body.sap_id);
            }
            return res.success("OTP Sent");
        }catch(e){
            return res.error(e);
        }
    }

};