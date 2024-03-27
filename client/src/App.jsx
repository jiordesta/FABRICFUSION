import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Products from "./pages/Products";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/profile/:id" Component={Profile} />
        <Route path="/products" Component={Products} />
        <Route path="/products/expand/:id" Component={Products} />
      </Routes>
    </Router>
  );
}
