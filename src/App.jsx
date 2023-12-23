import React, { useEffect, useState } from "react";
import "./css/app.css";
import Home from "./comps/Home";
import Tidechaser from "./comps/Tidechaser";
import Signup from "./comps/Signup";
import Signin from "./comps/Signin";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./comps/About";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/subscribe" element={<Signup />} />
        <Route path="/app" element={<Tidechaser />} />
      </Routes>
    </Router>
  );
}
