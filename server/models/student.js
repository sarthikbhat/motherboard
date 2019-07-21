const  { model, Schema } = require('mongoose');
const timestamps = require("mongoose-timestamp");

const StudentSchema = new Schema({
    currentyear:{
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
    user:{
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});
StudentSchema.plugin(timestamps);
module.exports = model("Student", StudentSchema);