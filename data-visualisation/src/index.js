import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import DataVisualisation from "./DataVisualisation";

const client = new ApolloClient({
  uri: " https://stats.test-aws.test4.skybet.com.sbgorigin.com/fmd/test/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <DataVisualisation />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
);
