const  { model, Schema } = require('mongoose');
const db = require('../utils/database');
const User = require('./user');
const TeacherSchema = new Schema({
    designation:{
        type:String,
        required:true
    },
    yearOfJoining:{
        type:Date,
        required:true,
        default:Date.now()
    },
    classTeacher:{
        type:String,
        default:null
    },
    subjects:[
        {
            subjectname:String
        }
    ],
    mentor:{
        status:{
            type:Number,
            default:0
        },
        batch:{
            type:String
        }
    },
    userId:{
        type: Schema.Types.ObjectId,
        ref: "User"
    }

},{
    timestamps:true,
    versionKey:false
});

let Teacher = db.model("Teacher", TeacherSchema);
module.exports = {
    async addTeacher(teacher){
        let user = await User.checkUser(null,teacher.sapId);
        let existedTeacher = await Teacher.findOne({
            userId:user._id
        });
        teacher.userId = user._id;
        if(!existedTeacher){
            let newTeacher = await Teacher.create(teacher);
            newTeacher = await Teacher.findById(newTeacher._id)
                .populate('userId','sap_id name surname department')
                .lean()
                .exec();
            return newTeacher;
        }else{
            throw "Teacher already Exist";
        }
    }
}