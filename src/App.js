import React from "react";
import Home from "./javascript/views/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./javascript/components/Navbar";
import Footer from "./javascript/components/Footer";
import About from "./javascript/views/About";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
