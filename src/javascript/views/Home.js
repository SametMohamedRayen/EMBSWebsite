import React from "react";
import Navbar from "../components/Navbar";
import TopSection from "../components/TopSection";
import MiddleTopSection from "../components/MiddleTopSection";
import MiddleBottomSection from "../components/MiddleBottomSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="homeSections">
        <TopSection />
        <MiddleTopSection />
        <MiddleBottomSection />
      </div>
      <Footer />
    </>
  );
};

export default Home;
