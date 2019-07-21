const  { model, Schema } = require('mongoose');
const timestamps = require("mongoose-timestamp");

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
    }
});
UserSchema.plugin(timestamps);
module.exports = model("User", UserSchema);
