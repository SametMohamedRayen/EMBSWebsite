import React from "react";
import StaffElement from "./StaffElement";

const MiddleTopSection = () => {
  return (
    <div className="middleTopSection">
      <h1 className="newsHeadline">Meet the Team</h1>
      <div className="staffGrid">
        <div className="rowThirds">
          <StaffElement staffName="Ahlem Marzougi" staffPosition="Chair" />
          <StaffElement staffName="Ahmed Chtourou" staffPosition="Vice Chair" />
          <StaffElement staffName="Oumayma Trifii" staffPosition="Treasurer" />
        </div>
        <div className="rowHalves">
          <StaffElement
            staffName="Mohamed Rayen Samet"
            staffPosition="Webmaster"
          />
          <StaffElement staffName="Mohamed Turki" staffPosition="Secretary" />
        </div>
      </div>
    </div>
  );
};

export default MiddleTopSection;
