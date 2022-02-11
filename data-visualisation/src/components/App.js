import React from "react";
import { Header, Footer, NavBar, Pitch, BettingMarkets } from "../components";

function App() {
  return (
    <React.Fragment>
      <Header />
      <NavBar />
      <Pitch />
      {/* <Data /> */}
      <BettingMarkets />
      <Footer />
    </React.Fragment>
  );
}

export default App;
