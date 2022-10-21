import React from "react";
import AboutFrame from "./AboutFrame";
import IEEELogo from "../../assets/images/IEEELogo.jpg";

const BottomAboutSection = () => {
  return (
    <div className="relative aboutContainer">
      <div className="row">
        <div className="aboutFrame column">
          <AboutFrame img={IEEELogo} imgSizeFactor={0.785} />
        </div>
        <div className="column aboutWriting">
          <div className="row">
            <h1 className="margin-0">Who are IEEE ?</h1>
          </div>
          <div className="row">
            <p className="font-size-140">
              IEEE is the world’s largest technical professional organization
              dedicated to advancing technology for the benefit of humanity.
              IEEE and its members inspire a global community to innovate for a
              better tomorrow through its more than 423,000 members in over 160
              countries, and its highly cited publications, conferences,
              technology standards,and professional and educational activities.
              IEEE is the trusted “voice” for engineering, computing, and
              technology information around the globe.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <div className="row">
            <h1>Who are IEEE Tunisia Section ?</h1>
          </div>
          <div className="row">
            <p>
              The IEEE Tunisia EMB Chapter is established in January 2009. The
              objectives are: - To encourage researchers to cooperate. - To
              increase contributions in the area of IEEE Engineering in Medicine
              and Biology Society. - To help researchers in order to solve
              complex and real life problems. - To help students and graduate
              students on competition activities. - To transfer latest advanced
              researchs to Tunisia. These objectives can be achieved through
              various activities including seminars, lectures, schools,
              conferences, and other events.
            </p>
          </div>
        </div>
        <div className="aboutFrame column">
          <AboutFrame img={IEEELogo} imgSizeFactor={0.785} />
        </div>
      </div>
      <div className="row">
        <div className="aboutFrame column">
          <AboutFrame img={IEEELogo} imgSizeFactor={0.785} />
        </div>
        <div className="column">
          <div className="row">
            <h1>IEEE ENET'COM Student Branch ?</h1>
          </div>
          <div className="row">
            <p>
              IEEE is the world’s largest technical professional organization
              dedicated to advancing technology for the benefit of humanity.
              IEEE and its members inspire a global community to innovate for a
              better tomorrow through its more than 423,000 members in over 160
              countries, and its highly cited publications, conferences,
              technology standards,and professional and educational activities.
              IEEE is the trusted “voice” for engineering, computing, and
              technology information around the globe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomAboutSection;
