import React, { useState } from "react";
import TopActivitiesSection from "../components/TopActivitiesSection";
import Calendar from "../components/Calendar";
import Skills from "../components/Skills";
import SoftSkills1 from "../../assets/images/activities/SoftSkills1.png";
import SoftSkills2 from "../../assets/images/activities/SoftSkills2.jpg";
import SoftSkills3 from "../../assets/images/activities/SoftSkills3.jpg";
import HardSkills1 from "../../assets/images/activities/HardSkills1.jpg";
import HardSkills2 from "../../assets/images/activities/HardSkills2.jpg";

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
          <Skills
            type="soft"
            images={[
              SoftSkills1,
              SoftSkills2,
              SoftSkills3,
              SoftSkills1,
              SoftSkills2,
            ]}
          />
        ) : show === "HardSkills" ? (
          <Skills
            type="hard"
            images={[
              HardSkills1,
              HardSkills2,
              HardSkills1,
              HardSkills2,
              HardSkills1,
            ]}
          />
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
