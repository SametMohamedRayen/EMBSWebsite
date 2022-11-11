import React from "react";
import AboutFrame from "./AboutFrame";
import IEEELogo from "../../assets/images/IEEELogo.jpg";

const AboutRow = (props) => {
  const { direction, title, content } = props;
  return (
    <div className="row margin-btm-15">
      {direction === "left" ? (
        <div className="aboutFrame column">
          <AboutFrame img={IEEELogo} imgSizeFactor={0.785} />
        </div>
      ) : (
        <></>
      )}
      <div className="column aboutWriting">
        <div className="row">
          <h1 className="margin-0 font-indigo-regular letter-space-25">
            {title}
          </h1>
        </div>
        <div className="row">
          <p className="font-size-140 font-lato">{content}</p>
        </div>
      </div>
      {direction === "right" ? (
        <div className="aboutFrame column">
          <AboutFrame img={IEEELogo} imgSizeFactor={0.785} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default AboutRow;
