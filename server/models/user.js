const  { model, Schema } = require('mongoose');
const timestamps = require("mongoose-timestamp");
const db = require('../utils/database');

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
    timestamps:true
});

let User = db.model('User', UserSchema);

module.exports = {
    async createUser(user){
        let newUser = await User.create(user);
        newUser = await User.findById(newUser._id).lean().exec();
        console.log(newUser);
        return newUser;
    },
}
