import React, { useState } from "react";
import TopActivitiesSection from "../components/TopActivitiesSection";
import Calendar from "../components/Calendar";
import Skills from "../components/Skills";
import SoftSkills3 from "../../assets/images/activities/SoftSkills3.jpg";
import HardSkills1 from "../../assets/images/activities/HardSkills1.jpg";
import teamBuilding from "../../assets/images/activities/team building.png";
import entship from "../../assets/images/activities/entpship.png";
import funfit from "../../assets/images/activities/funfit.png";
import leadership from "../../assets/images/activities/leadership.jpg";
import kids from "../../assets/images/activities/kids.jpg";
import blockchain from "../../assets/images/activities/blockchain.jpg";
import web from "../../assets/images/activities/web.jpg";
import ai from "../../assets/images/activities/ai.jpg";
import { Activity } from "../models/Activity";

const Activities = () => {
  const [show, setShow] = useState("SoftSkills");
  const activities_array = [
    new Activity(
      "Team Building",
      "02/02/2022",
      "IEEE ENET'com student branch officers got to know each other, share their visions and express their opinions and anticipations.",
      "soft"
    ),
    new Activity(
      "Entrepreneurship Training",
      "16/02/2022",
      "The workshop was about the conditions to establish a company and how to juridically create a Startup, presented by Mrs. Soulef Frikha.",
      "soft"
    ),
    new Activity(
      "A.I. in Healthcare",
      "14/03/2022",
      "In honor of the IEEE EMBS DAY 70th anniversary, we organized an AI in healthcare workshop to illustrate how A.I. is a revolutionary tool in medicine.",
      "hard"
    ),
    new Activity(
      "Healthy Fasting",
      "31/03/2022",
      "Healthy Fasting training session was be led by Ms. Wiem Kefi - a health nutritionist- and provided us with tips on how to cope with fasting.",
      "soft"
    ),
    new Activity(
      "Fun & Fit",
      "18/04/2022",
      '"Fun & Fit" took place in Teens Park Stadium and was in collaboration with IEEE WIE ENET\'Com Student Affinity Group where we spent some quality time together.',
      "soft"
    ),
    new Activity(
      "Introduction to A.I.",
      "24/09/2022",
      "We had an introductory session to Artificial Intelligence in which we learned the difference between DL and ML.",
      "hard"
    ),
    new Activity(
      "Leadership Workshop",
      "05/10/2022",
      "This workshop with Mr. Achref Aouadi was a great opportunity to learn how to be leaders and the difference between them and managers.",
      "soft"
    ),
    new Activity(
      "Web Development Workshop",
      "13/11/2022",
      'In collaboration with IEEE CS ENET\'Com SBC, we organized an interesting "Web Development" training session presented by Firas Fendri.',
      "hard"
    ),
    new Activity(
      "Blockchain Workshop",
      "23/11/2022",
      "The Blockchain is a new technology that's why we organized a workshop in this field to discover it and to get familiar with.",
      "hard"
    ),
    new Activity(
      "A.I. Training Session",
      "25/11/2022",
      "The third collaboration with IEEE CS ENET'Com SBC was an A.I. training session that helped us understand how A.I. systems operate.",
      "hard"
    ),
    new Activity(
      "Kids in Robotics and A.I.",
      "27/11/2022",
      "We collaborated with IEEE IAS ENET'Com SBC and IEEE WIE ENET'Com SAG to organize a great day with the kids of \"Manara\" primary school.",
      "hard"
    ),
  ];
  const [activities, setActivities] = useState(
    activities_array.filter((a) => a.type === "soft")
  );

  const getShow = (value) => {
    setShow(value);
    const type = value === "SoftSkills" ? "soft" : "hard";
    setActivities(activities_array.filter((a) => a.type === type));
  };

  return (
    <div className="sections">
      <TopActivitiesSection getValue={getShow} />
      <div className="relative z-2">
        {show === "SoftSkills" ? (
          <Skills
            type="soft"
            images={[leadership, funfit, SoftSkills3, entship, teamBuilding]}
            activities={activities}
          />
        ) : show === "HardSkills" ? (
          <Skills
            type="hard"
            images={[kids, HardSkills1, blockchain, web, ai]}
            activities={activities}
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
