import React from "react";
import {Header, Footer, NavBar, Pitch, BettingMarkets} from "../components";
import { ApolloProvider } from '@apollo/client';
import { client } from "./BettingMarkets"

function App() {
  return (
    <ApolloProvider client={client}>
    <React.Fragment>
      <Header />
      <NavBar />
      <Pitch />
      <BettingMarkets />
      <Footer />
    </React.Fragment>
    </ApolloProvider>
  );
}

export default App;
