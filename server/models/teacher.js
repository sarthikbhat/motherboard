const  { model, Schema } = require('mongoose');
const timestamps = require("mongoose-timestamp");

const TeacherSchema = new Schema({
    designation:{
        type:String,
        required:true
    },
    yearofjoining:{
        type:Date,
        required:true,
        default:Date.now()
    },
    classteacher:{
        type:String,
        default:null
    },
    subjects:[
        {
            subjectname:String
        }
    ],
    isMentor:{
        type:Boolean,
        default:false
    }

});
TeacherSchema.plugin(timestamps);
module.exports = model("Teacher", TeacherSchema);