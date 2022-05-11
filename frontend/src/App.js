import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import HomePage from "./pages/Home";
import DashboardPage from "./pages/Dashboard";
import Navb from "./components/Navb/Navb";
import NotFoundPage from "./pages/404";
import NewsPage from "./pages/News";
import AmutPage from "./pages/AMUT";
import ActivitiesUpdate from "../src/components/Admin/Activities/ActivitiesUpdate";
import AdminPage from "./pages/Admin";
import EventsPage from "./pages/Events";
import AssociadosPage from "./pages/Associados";

function App() {
  return (
    <Router>
<Navb />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/area-reservada" element={<DashboardPage />} />
        <Route path="/noticias" element={<NewsPage />} />
        <Route path="/AMUT/associados" element={<AssociadosPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/atividades" element={<EventsPage/>} />
        <Route path="/atividades/:id" exact component={<ActivitiesUpdate/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
