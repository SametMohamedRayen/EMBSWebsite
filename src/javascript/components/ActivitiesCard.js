import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(far, fas);

const ActivitiesCard = (props) => {
  const { title, icon, text, margin, color } = props;
  return (
    <div
      className={
        "relative z-2 bg-white width-20-pc height-fit centerText activityCard cursor-pointer " +
        margin
      }
    >
      <FontAwesomeIcon
        icon={icon}
        className={"font-size-3 " + color}
      ></FontAwesomeIcon>
      <h4 className={"font-indigo-regular letter-space-125 " + color}>
        {title}
      </h4>
      <p className="font-lato">{text}</p>
    </div>
  );
};

export default ActivitiesCard;
