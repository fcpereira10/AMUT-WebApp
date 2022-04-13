import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import HomePage from "./pages/Home";
import DashboardPage from "./pages/Dashboard";
import Navb from "./components/Navb/Navb";
import NotFoundPage from "./pages/404";
import EventsPage from "./pages/Events";

function App() {
  return (
    <Router>
      <Navb/>
      <Routes>
        <Route path="/" element={<HomePage/>}  />
        <Route path="/login" element={<LoginPage />}  />
        <Route path="/register" element={<RegisterPage />}  />
        <Route path="/area-reservada" element={<DashboardPage />}  />
        <Route path="/eventos" element={<EventsPage />}  />
        <Route path="*" element={<NotFoundPage />}  />
      </Routes>
    </Router>
  );
}

export default App;
