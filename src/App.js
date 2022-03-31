import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Footer from "./components/Footer/Footer";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";

import HomePage from "./pages/Home";
import DashboardPage from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} exact />
        <Route path="/Login" element={<LoginPage />} exact />
        <Route path="/register" element={<RegisterPage />} exact />
        <Route path="/dashboard" element={<DashboardPage />} exact />
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;
