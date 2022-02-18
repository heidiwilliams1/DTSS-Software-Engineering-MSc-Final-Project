import React, { useEffect } from "react";
import { Header, Footer, NavBar, Pitch, BettingMarkets } from "../components";
import Push from "../push/Push";

function App() {
  useEffect(() => {
    new Push("10be28ef-f8e1-4927-94e0-4b9f12e38825");
  }, []);

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
