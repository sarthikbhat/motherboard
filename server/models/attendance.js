const  { model, Schema } = require('mongoose');
const timestamps = require("mongoose-timestamp");

const AttendanceSchema = new Schema({
    class:{
        type: String,
        required: true
    },
    months:{
        type: Number,
        required: true      
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});
AttendanceSchema.plugin(timestamps);
module.exports = model("Attendance", AttendanceSchema);