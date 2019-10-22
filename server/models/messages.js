const db = require('../util/database');
const Sequelize = require('sequelize');
const User = require('./users');


async function arrangeMessage(message){
    let newMessage = {
        body:msg.body,
        userName:msg.fname + ' ' + msg.lname,
        sapId:msg.sap_id,
        group : msg.grp
    }

    return newMessage
}

async function arrangeMessages(messages){
    let msgs = [];
    messages.forEach(msg=>{
        msgs.push({
            body:msg.body,
            userName:msg.fname + ' ' + msg.lname,
            sapId:msg.sap_id,
            group : msg.grp
        });
    });
    return msgs;
}
module.exports = class Message{
    constructor(sap_id,body,group){
        this.sap_id = parseInt(sap_id,10);
        this.body = body;
        this.group = group;
    }


    static async getMessages({group,sapId}){
        var sql = "SELECT * FROM users NATURAL JOIN messages WHERE sap_id = "+db.escape(sapId)+";";
        console.log(sql);
        let messages = await db.query(sql,{type:Sequelize.QueryTypes.SELECT});
        console.log("Data Fetched Successfully!!");
        messages = await arrangeMessages(messages);
        return messages;
    }

    static async addMessage({group,sapId,message}){
        let sap_id=parseInt(sapId,10);
        let results = await User.findBysap_id(sapId);
        console.log(results.length);
        if(results.length >0){
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