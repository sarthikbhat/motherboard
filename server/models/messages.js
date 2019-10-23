const db = require('../util/database');
const Sequelize = require('sequelize');
const User = require('./users');


async function arrangeMessage(msg){

    let newMessage = {
        body:msg.body,
        userName:msg.fname + ' ' + msg.lname,
        sapId:msg.sap_id,
        group : msg.grp,
        createdAt:String(msg.created_at)
    }
    return newMessage
}

async function arrangeMessages(messages){
    let msgs = [];

    //sorting Messages by date.
    messages.sort(function(a, b) {
        a = new Date(a.created_at);
        b = new Date(b.created_at);
        return a>b ? 1 : a<b ? -1 : 0;
    });
    messages.forEach(msg=>{
        msgs.push({
            body:msg.body,
            userName:msg.fname + ' ' + msg.lname,
            sapId:msg.sap_id,
            group : msg.grp,
            createdAt:String(msg.created_at)
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
        let sql = "";
        let messages ;
        if(group && !sapId){
            sql = "SELECT * FROM users NATURAL JOIN messages WHERE grp = "+db.escape(group)+";";
            console.log(sql);
            messages = await db.query(sql,{type:Sequelize.QueryTypes.SELECT});
        }else {
            sql = "SELECT * FROM users NATURAL JOIN messages WHERE sap_id = "+db.escape(sapId)+"AND grp = "+db.escape(group)+";";
            console.log(sql);
            messages = await db.query(sql,{type:Sequelize.QueryTypes.SELECT});
        }
        console.log("Data Fetched Successfully!!");
        messages = await arrangeMessages(messages);
        console.log("Messages Arranged");
        return messages;
    }

    static async addMessage({group,sapId,message}){
        let sap_id=parseInt(sapId,10);
        let results = await User.findBysap_id(sapId);
        console.log(results);
        console.log(results.length);
        if(results.length >0){
            var sql = "INSERT INTO messages(sap_id,body,grp) VALUES("+db.escape(sap_id)+","+db.escape(message)+","+db.escape(group)+")";
            console.log(sql);
            let result = await db.query(sql);
            if(result[1]==1){
                let messageId = result[0];

                sql = "SELECT * FROM users NATURAL JOIN messages WHERE id = "+db.escape(messageId);
                console.log(sql);
                let [newMessage] = await db.query(sql,{type:Sequelize.QueryTypes.SELECT});
                console.log(newMessage);
                newMessage = await arrangeMessage(newMessage);
                return newMessage
            }else{
                throw "Something Went Wrong"; 
            }
            
        }else{
            throw "User not found";
        }
    }
}
