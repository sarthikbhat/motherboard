const MessagesModel = require('../models/messages');
const {PubSub , withFilter} = require('apollo-server-express');
const pubsub = new PubSub();
const resolvers = {
    Query : {
        messages:async(_,{group,sapId})=>{
            let messages = await MessagesModel.getMessages({group,sapId});
            return messages;
        }   
    },
    Mutation:{
        addMessage: async(_,{group,sapId,message})=>{
            let msg = await MessagesModel.addMessage({group,sapId,message});
            pubsub.publish('newMessage',{
                newMessage:msg,
                group:group
            });
            return msg;
        },

        userTyping:async (_,{group,sapId})=>{
          pubsub.publish("userTyping", { 
            userTyping: sapId,
            group:group 
            });
          return sapId;
        }
    },
    Subscription: {
        newMessage: {
          subscribe: withFilter(
            () => pubsub.asyncIterator('newMessage'),
            (payload, variables) => {
              return payload.group === variables.group;
            }
          )
        },

        userTyping: {
          subscribe: withFilter(
            () => pubsub.asyncIterator("userTyping"),
            (payload, variables) => {
              return payload.group === variables.group;
            }
          )
        }
      }
};

module.exports = resolvers;