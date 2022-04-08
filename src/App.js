import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";


import HomePage from "./pages/Home";
import DashboardPage from "./pages/Dashboard";
import Navb from "./components/Navb/Navb";

function App() {
  return (
    <Router>
      <Navb/>
      <Routes>
        <Route path="/" element={<HomePage/>} exact />
        <Route path="/Login" element={<LoginPage />} exact />
        <Route path="/register" element={<RegisterPage />} exact />
        <Route path="/area-reservada" element={<DashboardPage />} exact />
      </Routes>
    </Router>
  );
}

export default App;
