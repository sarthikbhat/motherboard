const  { model, Schema } = require('mongoose');
const db = require('../utils/database');
const User = require('./user');

const StudentSchema = new Schema({
    yearOfJoining:{
        type: String,
        required: true
    },
    division:{
        type: String,
        required: true
    },
    semester:{
        type: Number,
        required: true      
    },
    batch:{
        type: String,
        required: true
    },
    userId:{
        type: Schema.Types.ObjectId,
        ref: "User"
    }
},{
    timestamps:true,
    versionKey: false,
});

let Student = db.model("Student", StudentSchema);

module.exports = {
    async addStudent(student){
        let user = await User.checkUser(null,student.sapId);
        let existedStudent = await Student.findOne({
            userId:user._id
        });
        student.userId = user._id;
        if(!existedStudent){
            let newStudent = await Student.create(student);
            newStudent = await Student.findById(newStudent._id)
                .populate('userId','sap_id name surname department')
                .lean()
                .exec();
            console.log(newStudent);
            return newStudent;
        }else{
            throw "Student already Exist";
        }
    }
}

