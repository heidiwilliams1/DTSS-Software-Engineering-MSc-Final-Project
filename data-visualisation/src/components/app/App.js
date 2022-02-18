import React from "react";
import { Header, Footer, NavBar, BettingMarkets } from "../presentation";
import { Pitch } from "../pitch";

function App() {
  return (
    <React.Fragment>
      <Header />
      <NavBar />
      <Pitch />
      <BettingMarkets />
      <Footer />
    </React.Fragment>
  );
}

export default App;
