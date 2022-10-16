import React from "react";
import TopSection from "../components/TopSection";
import MiddleTopSection from "../components/MiddleTopSection";
import MiddleBottomSection from "../components/MiddleBottomSection";

const Home = () => {
  return (
    <div className="homeSections">
      <TopSection />
      <MiddleTopSection />
      <MiddleBottomSection />
    </div>
  );
};

export default Home;
