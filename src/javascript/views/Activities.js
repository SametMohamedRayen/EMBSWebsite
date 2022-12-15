import React, { useState } from "react";
import TopActivitiesSection from "../components/TopActivitiesSection";
import Calendar from "../components/Calendar";
import Skills from "../components/Skills";
import SoftSkills1 from "../../assets/images/activities/SoftSkills1.png";
import SoftSkills2 from "../../assets/images/activities/SoftSkills2.jpg";
import SoftSkills3 from "../../assets/images/activities/SoftSkills3.jpg";
import HardSkills1 from "../../assets/images/activities/HardSkills1.jpg";
import HardSkills2 from "../../assets/images/activities/HardSkills2.jpg";
import { Activity } from "../models/Activity";

const Activities = () => {
  const [show, setShow] = useState("SoftSkills");
  const activities_array = [
    new Activity(
      "Team Building",
      "02/02/2022",
      "IEEE ENET'com student branch officers got to know each other through this coffee meeting. We've had the opportunity to share our visions and express our opinions and anticipations. It was so exciting, an opportunity that filled us with enthusiasm, fueled by the necessity to overcome challenges outside our comfort zone.",
      "soft"
    ),
    new Activity(
      "Entrepreneurship Training Session",
      "16/02/2022",
      "The workshop was about the conditions to establish a company and how to juridically create a Startup, presented by Mrs. Soulef Frikha who is an assistant professor in business law at enet'com. Our members and guests were so motivated during this session.",
      "soft"
    ),
    new Activity(
      "AI in Healthcare",
      "14/03/2022",
      "This training session is about AI in healthcare. \n" +
        "In honor of the IEEE EMBS DAY 70th anniversary, IEEE EMBS ENET'Com chapter was organizing this event, it offers an explanation about how AI systems operate. Furthermore, it illustrates how AI is used in healthcare as a revolutionary tool in medicine: we discussed two important projects: brain cancer detection project and heart disease detection project.",
      "hard"
    ),
    new Activity(
      "Healthy Fasting",
      "31/03/2022",
      'We hosted a training session under the title of "Healthy Fasting". The aforementioned was be led by Ms. Wiem Kefi - a health nutritionist- and provided us with tips on how to cope with fasting.',
      "soft"
    ),
    new Activity(
      "Fun & Fit",
      "18/04/2022",
      '"FUN & FIT" took place in the Stadium "Teens park , hay l ons" during which , in collaboration with IEEE ENET\'Com Women in Engineering Student Affinity Group, we had the chance to spend some quality time together . We lived precious moments of fun, joy and sharing with our IEEE family who has shown plenty of energy and motivation . We practiced a lot of activities there, we played , danced , sang and then we enjoyed home made food prepared with much love by us.',
      "soft"
    ),
    new Activity(
      "Introduction to A.I.",
      "24/09/2022",
      "We had an introductory session to Artificial Intelligence in which we learned the difference between deep learning and machine learning as well as the difference between a strong AI and a weak AI.. We had the opportunity to learn about many AI applications, especially in medicine and biology. Finally, the speaker showed us how to get started with AI.\n" +
        "We thank our talented friend Mortadha Mannai for his great efforts.\n",
      "hard"
    ),
    new Activity(
      "Leadership Workshop",
      "05/10/2022",
      '"Leaders aren\'t born, they are made".\n' +
        "One of plenty of things we have learned through the Leadership workshop we had last wednesday. \n" +
        "We had the opportunity to know the differences between a leader and a manager, especially in our professional life. The former showed us what makes a leader, based on real leaders in real life. \n" +
        "Lastly and most importantly, we learned that a leader is one who bravely takes the initiative and never looks behind.\n" +
        "For this great shot, we cordially thank Mr.Achraf Aouadi for his enormous efforts and the pleasant time he offered.\n" +
        "Also thanks dear members for your attention and your interventions that pushed the session forward and we hope we see you soon in other opportunities. \n",
      "soft"
    ),
    new Activity(
      "Web Development Workshop",
      "13/11/2022",
      'The IEEE EMBS ENET\'Com SBC in collaboration with the IEEE Computer Society - ENET\'Com Student Branch organized an interesting Training Session "Web Development" (HTML) presented by the talented software engineer "Firas Fendri".\n',
      "hard"
    ),
    new Activity(
      "Blockchain Workshop",
      "23/11/2022",
      "The Blockchain is a new technology which made us wonder about its nature and uses.\n" +
        "On 23 november 2022, the IEEE EMBS ENET’Com SBC in collaboration with the IEEE CS ENET’Com SBC, had our first session in Blockchain. We got familiar with the blockchain concept, the reason it was made for; it is mainly in protecting our confidential information while its transmission . A trustful technology was the blockchain, as our dear colleague Ala Chahtour elaborated smoothly and patiently with its introduction that form a solid asset to  build on. So thanks Ala and we are impatiently waiting for our second session in which we start our project concerning healthcare.\n",
      "hard"
    ),
    new Activity(
      "A.I. Training Session: Build Your Neural Network Model",
      "25/11/2022",
      "The creation of  artificial intelligence would be the greatest event in the history of mankind. \n" +
        "This training session is about AI and deep learning. \n" +
        "The IEEE EMBS ENET'Com SB chapter in collaboration with the IEEE CS ENET’Com SB chapter organized this online session in order to give an explanation about how AI systems operate and to get familiar with deep learning concepts.\n" +
        "This session was elaborated with a Neural network project.\n",
      "hard"
    ),
    new Activity(
      "Kids in Robotics and A.I.",
      "27/11/2022",
      'We as IEEE EMBS ENET’Com SBC in collaboration with the IEEE WIE ENET’Com AG and IEEE IAS ENET’Com SBC organized a great day with the kids of "Manara" primary school. \n' +
        "It was so informative and fun at the same time !\n" +
        "We were extremely motivated to work and get in touch with kids in order to deliver to them an educational content about how to enhance  their environmental knowledge , attitudes and behaviors towards arduino, robots and artificial intelligence through a very simple way! \n" +
        "We really had a very special day with them. We played, spent a lot of quality time together, and finally we gave them chocolate to reward them on their smart responses to our quiz games.  \n" +
        "We want to thank “Manara” primary school for granting us such an opportunity .\n",
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

  console.log(activities);

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
            activities={activities}
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
