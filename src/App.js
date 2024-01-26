import React from "react";
import HomePage from "./components/HomePage";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CheckoutPage from "./components/CheckoutPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
