import React from "react";
import Navbar from "./Navbar";
import TopSection from "./TopSection";
import MiddleTopSection from "./MiddleTopSection";
import MiddleBottomSection from "./MiddleBottomSection";
import Footer from "./Footer";

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
