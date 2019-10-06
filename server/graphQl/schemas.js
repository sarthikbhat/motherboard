const {gql} = require('apollo-server-express');

const typeDefs = gql `
    type Query{
        messages(group:String! sapId:String!):[Message]

    }
    type Subscription{
        newMessage(group: String!): Message
    }

    type Mutation{
        addMessage(group:String! sapId:String! message:String!):Message
        createMessage(senderSapId: String! group: String! message: String! ): Message!
    }
    type Message{
        body : String!
        group:String!
        userId:String!
    }
`; 


module.exports = typeDefs;