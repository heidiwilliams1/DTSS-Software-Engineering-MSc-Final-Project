import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import Pitch from "./components/Pitch"
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <NavBar/>
      <Pitch/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
