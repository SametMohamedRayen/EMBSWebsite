import React from "react";
import Input from "../components/Input";

const GetInTouch = () => {
  return (
    <div className="relative height-50 margin-btm-15">
      <div className="absolute width-full centerContent margin-left-5">
        <div className="relative margin-top-15 width-half">
          <div className="row">
            <div className="column">
              <Input
                type="email"
                placeholder="Your Email"
                height="height-4-5"
                width="width-22-5"
              />
            </div>
            <div className="column">
              <Input
                type="text"
                placeholder="Subject"
                height="height-4-5"
                width="width-22-5"
              />
            </div>
          </div>
          <div className="row">
            <Input
              type="text"
              options="1,2,3"
              placeholder="Subject"
              height="height-4-5"
              width="width-45"
              margin="margin-top-neg-4-5"
            />
          </div>
          <div className="row"></div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
