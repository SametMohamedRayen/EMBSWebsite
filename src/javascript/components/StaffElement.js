import React from "react";
import { ReactComponent as AhlemMarzougi } from "../../assets/svg/AhlemMarzgoui.svg";
import { ReactComponent as AhmedChtourou } from "../../assets/svg/AhmedChtourou.svg";
import { ReactComponent as OumaimaTriffi } from "../../assets/svg/OumaimaTriffi.svg";
import { ReactComponent as RayenSamet } from "../../assets/svg/RayenSamet.svg";
import { ReactComponent as MohamedTurki } from "../../assets/svg/MohamedTurki.svg";
import GradientText from "./GradientText";

const StaffElement = (props) => {
  const { staffName, staffPosition, emoji, emojiPosition } = props;
  return (
    <div className="staffElement">
      {staffName === "Ahlem Marzougi" ? (
        <AhlemMarzougi className="staffSvg" />
      ) : staffName === "Ahmed Chtourou" ? (
        <AhmedChtourou className="staffSvg" />
      ) : staffName === "Oumayma Trifii" ? (
        <OumaimaTriffi className="staffSvg" />
      ) : staffName === "Mohamed Rayen Samet" ? (
        <RayenSamet className="staffSvg" />
      ) : (
        <MohamedTurki className="staffSvg" />
      )}
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
