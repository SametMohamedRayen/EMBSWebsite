import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(far, fas);

const DayCard = (props) => {
  const [lastClicked, setLastClicked] = useState(false);
  const { day, updateRight, setOffClickedOnOthers, isToday } = props;
  return (
    <>
      <div
        className={
          "dayCard font-albori width-10-pc centerText gap-0 " +
          (isToday ? "linearBluesBg font-color-white " : "bg-beige ") +
          (lastClicked ? "border-blue" : "")
        }
        onClick={() => {
          updateRight();
          setOffClickedOnOthers();
          setLastClicked(true);
        }}
      >
        {day}
        {/*<FontAwesomeIcon icon={icon}></FontAwesomeIcon>*/}
      </div>
    </>
  );
};

export default DayCard;
