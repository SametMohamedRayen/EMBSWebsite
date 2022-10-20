import React from "react";
import AboutFrame from "./AboutFrame";
import IEEELogo from "../../assets/images/IEEELogo.jpg";

const BottomAboutSection = () => {
  return (
    <div className="relative">
      <div>
        <div className="aboutFrame">
          <AboutFrame img={IEEELogo} imgSizeFactor={0.785} />
        </div>
        <p>embs</p>
      </div>
    </div>
  );
};

export default BottomAboutSection;
