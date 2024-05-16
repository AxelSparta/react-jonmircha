import React from "react";
import { BrowserRouter, Route, Routes, Navigate, HashRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import DashboardPage from "./pages/DashboardPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFountPage from "./pages/NotFountPage";
import ProductsPage from "./pages/ProductsPage";
import ProfilePage from "./pages/ProfilePage";
import UserPage from "./pages/UserPage";
import UsersPage from "./pages/UsersPage";

const App = () => {
  return (
    // Para utilizar las rutas debemos encapsular nuestra app en el componente browserrouter
    <HashRouter>
      <Navbar />
      {/* Nuestras rutas deben estar dentro del componente Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:userId" element={<UserPage />} />
        <Route path="/usuarios" element={<Navigate to="/users" />} />
        <Route path="/dashboard/*" element={<DashboardPage />}>
          <Route path="welcome" element={<p>Welcome!!!</p>} />
        </Route>
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route />

        {/* NotFoundPage */}
        <Route path="*" element={<NotFountPage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
