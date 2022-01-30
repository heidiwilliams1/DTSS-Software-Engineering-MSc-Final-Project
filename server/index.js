const { GraphQLServer, PubSub } = require("graphql-yoga");

//create new instance
const pubsub = new PubSub();

//define schema
const typeDefs = `
  type Message {
    id: ID!
    user: String!
    text: String!
  }
  type Query {
    messages: [Message!]
  }
  type Mutation {
    postMessage(user: String!, text: String!): ID!
  }
  type Subscription {
    messages: [Message!]
  }
`;

const messages = []; //stores all the messages sent
const subscribers = []; //stores any new messages sent upon listening

//to push new users to the subscribers array
const onMessagesUpdates = (fn) => subscribers.push(fn);

const resolvers = {
    Query: { //gets all messages
        messages: () => messages, //returns the messages array
      },
      Mutation: { //post new message and returns id
        postMessage: (parent, { user, text }) => {
          const id = messages.length; //create the id for new message
          messages.push({id, user, text}); //push Message object to messages array
          subscribers.forEach((fn) => fn());
          return id; //return the id
        },
      },
      Subscription: {
        messages: {
          subscribe: (parent, args, { pubsub }) => {
            //create random number as the channel to publish messages to
            const channel = Math.random().toString(36).slice(2, 15);
    
            //push the user to the subscriber array with onMessagesUpdates function and 
            //publish updated messages array to the channel as the callback
            onMessagesUpdates(() => pubsub.publish(channel, { messages }));
    
            //publish all messages immediately once a user subscribed
            setTimeout(() => pubsub.publish(channel, { messages }), 0);
    
            //returns the asyncIterator
            return pubsub.asyncIterator(channel);
          },
        },
      }
  }

  const server = new GraphQLServer({ typeDefs, resolvers, context: { pubsub } });
server.start(({ port }) => {
  console.log(`Server on http://localhost:${port}/`);
});