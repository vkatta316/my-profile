import React from "react";
import Navigation from "./components/header/Navigation";
import MainComponent from "./MainComponent";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
      <MainComponent />
      </Router>
     
    </div>
  );
}

export default App;
