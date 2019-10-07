const  { model, Schema } = require('mongoose');
const db = require('../utils/database');
const User = require('./user');
const MessageSchema = new Schema({
    body:{
        type:String,
        trim:true
    },
    group:{
        type:String,
        trim:true
    },
    userId:{
        type: Schema.Types.ObjectId,
        ref: "User"
    }
},{
    timestamps:true,
    versionKey:false
});

let Message = db.model("Message", MessageSchema);

async function arrangeMessage(message){
    let newMessage = {
        group:message.group,
        userId:message.userId.name + message.userId.surname,
        body: message.body
    }

    return newMessage
}

async function arrangeMessages(messages){
    let msgs = [];
    messages.forEach(msg=>{
        msgs.push({
            body:msg.body,
            userId:msg.userId.name + ' ' + msg.userId.surname,
            group : msg.group
        });
    });

    return msgs;
}
module.exports = {
    async getMessages({group,sapId}){
        let sortFilter = {
            createdAt: -1,
        };
        let user ={};
        if(sapId){
            user = await User.checkUser(null,sapId);
        }
        let filter = {
        
        }
        if(user._id){
            filter.userId = user._id;
        }
        if(group){
            filter.group = group;
        }
        let messages = await Message.find(filter)
            .sort(sortFilter)
            .populate('userId','name surname sapId')
            .lean().exec();
        messages = await arrangeMessages(messages);
        return messages;
    },

    async addMessage({group,sapId,message}){
        let user = await User.checkUser(null,sapId);
        if(user){
            let msg = {
                body:message,
                group:group,
                userId:user._id
            }          
            let newMessage = await Message.create(msg);
            newMessage = await Message.findById(newMessage._id)
                .populate('userId','name surname sapId')
                .lean().exec();
    
            newMessage = await arrangeMessage(newMessage);
            return newMessage
        }else{
            throw "User not found";
        }
    },

    
}