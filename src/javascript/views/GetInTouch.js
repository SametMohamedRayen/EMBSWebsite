import React from "react";
import Input from "../components/Input";

const GetInTouch = () => {
  return (
    <div className="relative height-50 margin-btm-15">
      <div className="absolute width-full centerContent margin-left-5">
        <div className="relative margin-top-15 width-half">
          <div className="row">
            <div className="column">
              <Input type="email" placeholder="Your Email" />
            </div>
            <div className="column">
              <Input type="text" placeholder="Subject" />
            </div>
          </div>
          <div className="row">
            <Input type="select" options="1,2,3" placeholder="Subject" />
          </div>
          <div className="row"></div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
