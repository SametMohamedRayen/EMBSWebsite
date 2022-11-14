import React from "react";
import Input from "../components/Input";
import { ReactComponent as DNAFull } from "../../assets/svg/DNAFull.svg";
import { ReactComponent as AboutTitleFrame } from "../../assets/svg/AboutTitleFrame.svg";

const GetInTouch = () => {
  return (
    <div className="relative height-50 margin-btm-15">
      <div className="absolute width-full">
        <div className="relative margin-top-15">
          <Input className="inputTest" />
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
