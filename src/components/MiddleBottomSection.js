import React from "react";

const MiddleBottomSection = () => {
  return (
    <div className="middleBottomSection">
      <h1
        className={"staffHeadlineShadow" + (true ? "On" : "Off") + " absolute"}
      >
        Who are W<span style={{ color: "#0CC5CB" }}>ieee</span> ?
      </h1>
      <h1 className={"staffHeadline" + (true ? "On" : "Off")}>
        Who are W<span style={{ color: "#0CC5CB" }}>ieee</span> ?
      </h1>
    </div>
  );
};

export default MiddleBottomSection;
