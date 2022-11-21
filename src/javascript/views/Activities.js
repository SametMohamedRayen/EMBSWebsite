import React, { useState } from "react";
import TopActivitiesSection from "../components/TopActivitiesSection";
import Calendar from "../components/Calendar";
import Skills from "../components/Skills";

const Activities = () => {
  const [show, setShow] = useState("SoftSkills");

  const getShow = (value) => {
    setShow(value);
  };

  return (
    <div className="sections">
      <TopActivitiesSection getValue={getShow} />
      <div className="relative z-2">
        {show === "SoftSkills" ? (
          <Skills type="soft" />
        ) : show === "HardSkills" ? (
          <Skills type="hard" />
        ) : (
          <Calendar />
        )}
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default Activities;
