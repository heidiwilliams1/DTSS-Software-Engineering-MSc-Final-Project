import React from "react";
import { ApolloClient, InMemoryCache, gql,   useSubscription} from '@apollo/client';
import { WebSocketLink } from "@apollo/client/link/ws";


class BettingMarkets extends React.Component{
  render() {
  return(
    <div style={{ textAlign: 'center' }}>
       <h3>Data</h3>
       <Messages/> 
    </div>
  )
}}

const link = new WebSocketLink({
  uri: `ws://localhost:4000/`,
  options: {
    reconnect: true,
  },
});

export const client = new ApolloClient({
  link, //websocket link
  uri: 'http://localhost:4000/', //connect to server
  cache: new InMemoryCache(),
});

const GET_MESSAGES = gql`
  subscription {
    messages {
      id
      user
      text
    }
  }
`;

const Messages = () => {
  const { data } = useSubscription(GET_MESSAGES);
  if (!data) {
    return null;
  }
  return (
    <div style={{ marginBottom: '5rem' }}>
      {data.messages.map(({ id, user, text}) => {
        return (
          <div key={id} style={{ textAlign: 'center' }}>
            <p style={{ marginBottom: '0.3rem' }}>{user}</p>
            <p style={{ marginBottom: '0.3rem' }}>{text}</p>
          </div>
        );
      })}
    </div>
  );
};


export default BettingMarkets