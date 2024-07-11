import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  HomePage,
  ErrorPage,
  CategoryPage,
  MealDetailsPage,
} from "./Pages/index";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./input.css";
import FooterPage from "./Pages/FooterPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/meal/:id" element={<MealDetailsPage />} />
        <Route path="/meal/category/:name" element={<CategoryPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <FooterPage />
    </BrowserRouter>
  );
}

export default App;
