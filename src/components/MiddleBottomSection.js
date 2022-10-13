import React from "react";
import image0 from "./../images/events/event11.jpg";
import image1 from "./../images/events/event12.jpg";
import image2 from "./../images/events/event13.jpg";
import image3 from "./../images/events/event21.jpg";
import image4 from "./../images/events/event22.jpg";
import image5 from "./../images/events/event23.jpg";
import image6 from "./../images/events/event31.jpg";
import image7 from "./../images/events/event32.jpg";
import image8 from "./../images/events/event33.jpg";
import { ReactComponent as DNA } from "./../SVG/DNAKbira.svg";

import EventSlideShow from "./EventSlideShow";

const MiddleBottomSection = () => {
  return (
    <>
      <div className="middleBottomSection">
        <h1
          className={
            "staffHeadlineShadow" + (true ? "On" : "Off") + " absolute"
          }
        >
          Recent Activit<span style={{ color: "#0CC5CB" }}>ieee</span>s
        </h1>
        <h1 className={"staffHeadline" + (true ? "On" : "Off")}>
          Recent Activit<span style={{ color: "#0CC5CB" }}>ieee</span>s
        </h1>
        <div className="activities">
          <EventSlideShow
            image0={image0}
            image1={image1}
            image2={image2}
            image3={image3}
            image4={image4}
            image5={image5}
            image6={image6}
            image7={image7}
            image8={image8}
          />
        </div>
      </div>
    </>
  );
};

export default MiddleBottomSection;
