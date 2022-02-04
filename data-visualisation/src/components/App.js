import React from "react";
import {
  Header,
  Footer,
  NavBar,
  Pitch,
  BettingMarkets,
  Data,
  Graph,
} from "../components";

function App() {
  return (
    <React.Fragment>
      <Header />
      <NavBar />
      <Pitch />
      <Graph />
      <Data />
      <BettingMarkets />
      <Footer />
    </React.Fragment>
  );
}

export default App;
