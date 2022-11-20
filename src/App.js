import React from "react";
import Home from "./javascript/views/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./javascript/components/Navbar";
import Footer from "./javascript/components/Footer";
import About from "./javascript/views/About";
import GetInTouch from "./javascript/views/GetInTouch";
import Activities from "./javascript/views/Activities";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/activities" element={<Activities />}></Route>
        <Route exact path="/get-in-touch" element={<GetInTouch />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
