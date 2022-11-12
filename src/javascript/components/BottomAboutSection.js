import React from "react";
import { ReactComponent as AboutBg } from "../../assets/svg/AboutBG.svg";
import AboutRow from "./AboutRow";
import IEEEENETECOMLogo from "./../../assets/images/IEEEENETCOMLogo.png";
import IEEETunisiaSectionLogo from "./../../assets/images/IEEETunisiaSection.png";
import IEEELogo from "./../../assets/images/IEEELogo.png";
import RoundButton from "./RoundButton";

const BottomAboutSection = () => {
  return (
    <>
      <RoundButton text="To EMBS International" href="https://www.embs.org" />
      <AboutBg className="aboutBg" />
      <div className="relative aboutContainer">
        <AboutRow
          direction="left"
          title="Who are IEEE ?"
          content="IEEE is the world’s largest technical professional organization
            dedicated to advancing technology for the benefit of humanity. IEEE
            and its members inspire a global community to innovate for a better
            tomorrow through its more than 423,000 members in over 160
            countries, and its highly cited publications, conferences,
            technology standards,and professional and educational activities.
            IEEE is the trusted “voice” for engineering, computing, and
            technology information around the globe."
          image={IEEELogo}
        />
        <AboutRow
          direction="right"
          title="Who are IEEE Tunisia Section ?"
          content="The IEEE Tunisia EMB Chapter is established in January 2009. The
                objectives are: - To encourage researchers to cooperate. - To
                increase contributions in the area of IEEE Engineering in
                Medicine and Biology Society. - To help researchers in order to
                solve complex and real life problems. - To help students and
                graduate students on competition activities. - To transfer
                latest advanced researchs to Tunisia. These objectives can be
                achieved through various activities including seminars,
                lectures, schools, conferences, and other events."
          image={IEEETunisiaSectionLogo}
        />
        <AboutRow
          direction="left"
          title="IEEE ENET'COM Student Branch ?"
          content="IEEE is the world’s largest technical professional organization
            dedicated to advancing technology for the benefit of humanity. IEEE
            and its members inspire a global community to innovate for a better
            tomorrow through its more than 423,000 members in over 160
            countries, and its highly cited publications, conferences,
            technology standards,and professional and educational activities.
            IEEE is the trusted “voice” for engineering, computing, and
            technology information around the globe."
          image={IEEEENETECOMLogo}
        />
      </div>
    </>
  );
};

export default BottomAboutSection;
