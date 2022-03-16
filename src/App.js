import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom"; 
import Navb from "./components/Navb/Navb";

function App() {
  return (
    <Router>
      <Navb />
    </Router>
  );
}

export default App;
