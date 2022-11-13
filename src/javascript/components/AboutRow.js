import React from "react";
import AboutFrame from "./AboutFrame";
import { ReactComponent as AboutTextBackground } from "./../../assets/svg/AboutTextBackground.svg";

const AboutRow = (props) => {
  const { direction, title, content, image } = props;
  return (
    <div className="row margin-btm-15">
      {direction === "left" ? (
        <div className="aboutFrame column">
          <AboutFrame img={image} imgSizeFactor={0.785} />
        </div>
      ) : (
        <></>
      )}

      {direction === "left" ? (
        <div className="margin-top-neg-2">
          <AboutTextBackground className="absolute aboutTextBgLeft" />
          <div className="column aboutWritingLeft">
            <div className="row">
              <h1 className="margin-0 gradientText-indigo-2-900-darkBlue-20-lightBlue-150 letter-space-25 padding-left-2">
                {title}
              </h1>
            </div>
            <div className="row padding-top-1 padding-left-4">
              <p className="font-size-140 font-lato">{content}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="margin-top-neg-2">
          <AboutTextBackground className="absolute aboutTextBgRight mirror" />
          <div className="column aboutWritingRight">
            <div className="row">
              <h1 className="margin-0 gradientText-indigo-2-900-darkBlue-20-lightBlue-150 letter-space-25 padding-left-2">
                {title}
              </h1>
            </div>
            <div className="row padding-top-1 padding-left-4">
              <p className="font-size-140 font-lato">{content}</p>
            </div>
          </div>
        </div>
      )}
      {direction === "right" ? (
        <div className="aboutFrame column">
          <AboutFrame img={image} imgSizeFactor={0.785} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default AboutRow;
