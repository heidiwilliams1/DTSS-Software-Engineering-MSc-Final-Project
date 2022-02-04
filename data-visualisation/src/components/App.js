import React from "react";
import {
  Header,
  Footer,
  NavBar,
  Pitch,
  BettingMarkets,
  Graph,
} from "../components";

function App() {
  return (
    <React.Fragment>
      <Header />
      <NavBar />
      <Pitch />
      <Graph />
      <BettingMarkets />
      <Footer />
    </React.Fragment>
  );
}

export default App;
