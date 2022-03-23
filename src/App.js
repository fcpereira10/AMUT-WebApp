import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Home from "./pages/Home";
import SignInPage from "./pages/SignIn";
import Navb from "./components/Navb/Navb";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Navb/>
      <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/SignIn" element={<SignInPage />} exact />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
