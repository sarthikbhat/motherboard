const db = require('../util/database');
const Sequelize = require('sequelize');
const User = require('./users');

module.exports = class Message{
    constructor(sap_id,body,group){
        this.sap_id = parseInt(sap_id,10);
        this.body = body;
        this.group = group;
    }

    async arrangeMessage(message){
        let newMessage = {
            group:message.group,
            userId:message.userId.name + message.userId.surname,
            body: message.body
        }

        return newMessage
    }

    async arrangeMessages(messages){
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

    static async getMessages({group,sapId}){
        let sortFilter = {
            createdAt: -1,
        };
        let results =[];
        if(sapId){
            results = await User.findBysap_id(sapId);
        }
        let filter = {
        
        }
        // if(user._id){
        //     filter.userId = user._id;
        // }
        if(group){
            filter.group = group;
        }
        // let messages = await Message.find(filter)
        //     .sort(sortFilter)
        //     .populate('userId','name surname sapId')
        //     .lean().exec();
        var sql = "SELECT * FROM messages WHERE sap_id = "+db.escape(sapId);
        console.log(sql);
        let messages = await db.query(sql);
        console.log("hsagdhk0",messages);
        // messages = await arrangeMessages(messages);
        return messages;
    }

    static async addMessage({group,sapId,message}){
        let sap_id=parseInt(sapId,10);
        let results = await User.findBysap_id(sapId);
        console.log(results);
        console.log(results.length);
        if(results.length > 0){
            var sql = "INSERT INTO messages(sap_id,body,grp) VALUES("+db.escape(sap_id)+","+db.escape(message)+","+db.escape(group)+")";
            console.log(sql);
            let newMessage = await db.query(sql);
            console.log(newMessage);
            // newMessage = await arrangeMessage(newMessage);
            return newMessage
        }else{
            throw "User not found";
        }
    }
}