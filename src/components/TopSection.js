import React from "react";
import { ReactComponent as Section1 } from "../SVG/Section1.svg";
import { ReactComponent as InfoBar } from "../SVG/InfoBar.svg";

const TopSection = () => {
  return (
    <div className="topSection">
      <Section1 className="section1" />
      <div>
        <InfoBar className="infoBar" />
        <div className="intro">
          <h1 className="title">EMBS IEEE ENET'COM</h1>
          <p>
            We are the bad bitches that turn viruses into potions that heal or
            corrupt depending on the sitch.<br></br>
            If you want to learn some of this witchraft join us on this land we
            call the witch's swamp.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
