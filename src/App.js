import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/Login" element={<LoginPage />} exact />
        <Route path="/register" element={<RegisterPage />} exact />
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;
