import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(far, fas);

const DayCard = (props) => {
  const { day, icon } = props;
  return (
    <div className="dayCard font-albori width-10-pc centerText column height-15 gap-0">
      {day}
      <br></br>
      <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
    </div>
  );
};

export default DayCard;
