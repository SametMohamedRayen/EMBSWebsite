import React from "react";
import Input from "../components/Input";

const GetInTouch = () => {
  return (
    <div className="relative height-50 margin-btm-15">
      <div className="absolute width-full centerContent margin-left-5">
        <div className="relative margin-top-15 width-45-pc">
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
                type="number"
                placeholder="Phone Number"
                height="height-4-5"
                width="width-22-5"
              />
            </div>
          </div>
          <div className="row">
            <Input
              type="text"
              placeholder="Subject"
              height="height-4-5"
              width="width-48-44"
              margin="margin-top-neg-6"
            />
          </div>
          <div className="row">
            <Input
              type="text-area"
              placeholder="Your Message"
              height="6"
              width="width-48-44"
              margin="margin-top-neg-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
