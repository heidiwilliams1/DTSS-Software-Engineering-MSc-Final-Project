import React from "react";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { NavBar } from "./components/navBar";
import { BettingMarkets } from "./components/bettingMarkets";
import { Pitch } from "./components/pitch";

function DataVisualisation() {
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

export default DataVisualisation;
