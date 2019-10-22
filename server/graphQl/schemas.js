const {gql} = require('apollo-server-express');

const typeDefs = gql `
    type Query{
        messages(group:String! sapId:String!):[Message]

    }
    type Subscription{
        newMessage(group: String!): Message
        userTyping (group: String!): String
    }

    type Mutation{
        addMessage(group:String! sapId:String! message:String!):Message
        userTyping(group: String! sapId: String!):String!
    }
    type Message{
        body : String!
        group:String!
        userName:String!
        sapId:String!
    }
`; 


module.exports = typeDefs;