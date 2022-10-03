import React from "react";
import { ReactComponent as StaffFrame } from "../SVG/StaffFrame.svg";
import GradientText from "./GradientText";

const StaffElement = (props) => {
  const { staffName, staffPosition, emoji, emojiPosition } = props;
  return (
    <div className="staffElement">
      <StaffFrame className="staffSvg" />
      <GradientText
        text={staffName}
        size="2"
        weight="900"
        color1="darkBlue"
        percentage1="20"
        color2="lightBlue"
        percentage2="150"
      />
      <h3 className="staffPosition">{staffPosition}</h3>
      <img src={emoji} className={emojiPosition} />
    </div>
  );
};

StaffElement.defaultProps = {
  staffName: "Foulen Fouleni",
  staffPosition: "Kedha",
};

export default StaffElement;
