import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(far, fas);

const DayCard = (props) => {
  const {
    day,
    updateRight,
    setOffClickedOnOthers,
    index,
    isToday,
    clicked,
    setClickedTrue,
    enabled,
  } = props;
  return (
    <>
      <div
        className={
          "font-albori width-10-pc centerText gap-0 unselectable " +
          (isToday ? "linearBluesBg font-color-white " : "bg-beige ") +
          (clicked ? "border-blue dayCardClicked " : "dayCard ") +
          (enabled ? "cursor-pointer" : "font-color-gray")
        }
        onClick={() => {
          if (enabled) {
            updateRight(day);
            setOffClickedOnOthers();
            setClickedTrue(index);
          }
        }}
      >
        {day}
        {/*<FontAwesomeIcon icon={icon}></FontAwesomeIcon>*/}
      </div>
    </>
  );
};

export default DayCard;
