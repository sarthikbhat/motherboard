const  { model, Schema } = require('mongoose');
const timestamps = require("mongoose-timestamp");
const db = require('../utils/database');
const  { hashSync, compareSync } = require('bcrypt-nodejs');
const jwt=require('jsonwebtoken');


const UserSchema = new Schema({
    sap_id:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        trim:true,
        required:true
    },
    surname:{
        type:String,
        trim:true,
        required:true
    },
    department:{
        type:String,
        trim:true,
        required:true
    },
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: false
    },
    phoneNo: {
        type: String,
        default:null
    },
    address:{
        type: String,
        default:null
    },
    type:{
        type:String,
        required:true
    }
},{
    timestamps:true,
    versionKey: false,
});

let User = db.model('User', UserSchema);

module.exports = {
    async createUser(user){
        let existedUser = await User.findOne({
            sap_id:user.sap_id
        });
        if(!existedUser){
            let newUser = await User.create(user);
            newUser = await User.findById(newUser._id).lean().exec();
            return newUser;
        }else{
            throw "User Already Exist";
        }
    },

        
    async  createPassword(sap_id,password){
        let user = await User.findOne({
            sap_id:sap_id
        }).lean();
        if(user){
            if(!user.password){
                let usr = await User.findByIdAndUpdate(
                    user._id,
                    {
                        password:hashSync(password)
                    });
                return true;
            }else{
                throw "User already have password";
            }
        }else{
            throw "User Dosen't Exist";
        }
    },

    async authenticateUser(sapId,password){
        let user = await User.findOne({sap_id:sapId}).lean().exec();
        if(user){
            if(compareSync(password,user.password)){
                var token=jwt.sign({userId:user._id},"secret");
                user.accessToken = token; 
                return user;
            }else{
                console.log("Password doesn't match");
                throw "Password doesn't match";
            }
        }else{
            throw "User doesn't Exist";
        }
    },

    async checkUser(userId,sapId){
        let user = {};
        if(userId){
            user = await User.findById(userId).lean().exec();
        }else if(sapId){
            user = await User.findOne({sap_id:sapId}).lean().exec();
        }
        if(user){
            console.log(user);
            return user;
        }else{
            throw "User Not found";
        }
    }
}
