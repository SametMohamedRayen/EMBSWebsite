import React from "react";
import { ReactComponent as Section1 } from "../SVG/Section1.svg";
import { ReactComponent as GIFClippingPathShape } from "../SVG/GIFClippingPathShape.svg";

const TopSection = () => {
  return (
    <div className="topSection">
      <Section1 className="section1" />

      <video
        autoPlay="autoplay"
        preload="auto"
        className="section1gif"
        controls
        muted
        loop
      >
        <source src={require("../videos/Section1Video.mp4")} type="video/mp4" />
      </video>
      <svg className="clippingPathSvg">
        <clipPath id="GIFClippingPath" clipPathUnits="objectBoundingBox">
          <path d="M0.431,0.945 L0.394,0.972 C0.324,1,0.243,1,0.185,0.915 C0.141,0.85,0.085,0.813,0.027,0.813 H0 V0 H1 V0.733 L0.98,0.761 C0.908,0.858,0.816,0.901,0.725,0.877 C0.693,0.869,0.66,0.869,0.628,0.877 L0.518,0.903 C0.488,0.91,0.459,0.924,0.431,0.945"></path>
        </clipPath>
      </svg>

      <GIFClippingPathShape className="GIFClippingPathShape" />

      <div className="intro">
        <h1 className="title">
          EMBS IEEE ENET'COM<br></br>2022
        </h1>
        <p>
          We are the bad bitches that turn viruses into potions that heal or
          corrupt depending on the sitch.<br></br>
          If you want to learn some of this witchraft join us on this land we
          call the witch's swamp.
        </p>
      </div>
    </div>
  );
};

export default TopSection;
