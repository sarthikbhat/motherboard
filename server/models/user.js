const  { mongoose, Schema } = require('mongoose');
const db = require('../utils/database');
const ObjectId = require('mongoose').Types.ObjectId;

const UserSchema = new Schema({
    sap_id:{
        type:Number,
        unique:true,
    },
    name:{
        type:String,
        trim:true,
    },
    surname:{
        type:String,
        trim:true
    },
    department:{
        type:String,
        trim:true
    }
},{
    timestamps:true
});
