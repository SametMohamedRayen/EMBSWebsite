import React from "react";
import { ReactComponent as StaffFrame } from "../SVG/StaffFrame.svg";

const StaffElement = (props) => {
  const { staffName, staffPosition } = props;
  return (
    <div className="staffElement">
      <StaffFrame className="staffSvg" />
      <h2 className="staffName">{staffName}</h2>
      <h3 className="staffPosition">{staffPosition}</h3>
    </div>
  );
};

StaffElement.defaultProps = {
  staffName: "Foulen Fouleni",
  staffPosition: "Kedha",
};

export default StaffElement;
