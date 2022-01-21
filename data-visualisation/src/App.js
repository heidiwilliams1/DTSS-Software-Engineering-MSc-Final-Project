import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Pitch from "./components/Pitch";
import BettingMarkets from "./components/bettingMarkets";

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
