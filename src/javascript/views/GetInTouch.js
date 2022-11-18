import React from "react";
import ContactUsSection from "../components/ContactUsSection";

const GetInTouch = () => {
  return (
    <div className="sections">
      <img
        src={require("../../assets/images/ContactUsBg.png")}
        className="bgContactUs"
        alt="background"
      />
      <ContactUsSection />
    </div>
  );
};

export default GetInTouch;
