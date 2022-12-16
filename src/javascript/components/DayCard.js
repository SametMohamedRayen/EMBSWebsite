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
    found,
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
        <span className="margin-0 z-2">{day}</span>
        {found && enabled ? (
          <div className="fadeInBg">
            <FontAwesomeIcon icon="fa-solid fa-check"></FontAwesomeIcon>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default DayCard;
