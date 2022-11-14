import React from "react";
import { ReactComponent as DNAFull } from "../../assets/svg/DNAFull.svg";
import { ReactComponent as AboutTitleFrame } from "./../../assets/svg/AboutTitleFrame.svg";

const TopAboutSection = () => {
  return (
    <div className="relative height-50 margin-btm-15">
      <div className="absolute width-full">
        <DNAFull className="DNAFullAbout" />
        <div className="bg-radial-gradient-white">
          <div className="aboutEmbsTitle width-full relative">
            <div className="whoAreEmbs">
              <h1 className="font-indigo-regular font-color-blue font-size-4 letter-space-50 margin-0">
                Who Are
              </h1>
            </div>
          </div>
          <img
            src={require("../../assets/images/NamelessEMBSLogo.png")}
            className="aboutEmbsLogo"
            alt="EMB"
          />
        </div>
        <div className="centerContent">
          <AboutTitleFrame className="absolute width-full margin-top-neg-10" />
          <p className="centerText width-half font-albori letter-space-125 font-size-140 font-color-darkBlue margin-top-4">
            IEEE Engineering in Medicine and Biology Society (EMBS) is the
            world’s largest international society of biomedical engineers. The
            organization’s 12,000 members reside in some 97 countries around the
            world. EMBS provides its members with access to the people,
            practices, information, ideas and opinions that are shaping one of
            the fastest growing fields in science.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopAboutSection;
