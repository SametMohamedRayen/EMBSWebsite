import React, { useState } from "react";
import DayCard from "./DayCard";
import { Event } from "../models/Event";

const Calendar = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  const dateOfFirstOfCurrentMonth = new Date(
    date.getFullYear(),
    date.getMonth(),
    1
  );
  const numberOfDaysInLastMonth = new Date(
    date.getMonth() === 0 ? date.getFullYear() - 1 : date.getFullYear(),
    date.getMonth() === 0 ? 12 : date.getMonth(),
    0
  ).getDate();

  const numberOfDaysInCurrentMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const dayOfLastOfCurrentMonth = new Date(
    date.getFullYear(),
    date.getMonth(),
    numberOfDaysInCurrentMonth
  ).getDay();

  const dayOfFirstOfCurrentMonth = dateOfFirstOfCurrentMonth.getDay();
  let currentMonth = [[], [], [], [], []];
  for (let i = 0; i < 7; i++) {
    if (i === dayOfFirstOfCurrentMonth) {
      currentMonth[0][i] = 1;
    } else if (i < dayOfFirstOfCurrentMonth) {
      currentMonth[0][i] =
        numberOfDaysInLastMonth - (dayOfFirstOfCurrentMonth - (i + 1));
    } else {
      currentMonth[0][i] = 1 + (i - dayOfFirstOfCurrentMonth);
    }
  }
  for (let j = 1; j < 4; j++) {
    for (let i = 0; i < 7; i++) {
      currentMonth[j][i] = currentMonth[j - 1][6] + i + 1;
    }
  }

  for (let i = 0; i < 7; i++) {
    if (i === dayOfLastOfCurrentMonth) {
      currentMonth[4][i] = numberOfDaysInCurrentMonth;
    } else if (i < dayOfLastOfCurrentMonth) {
      currentMonth[4][i] =
        numberOfDaysInLastMonth - (dayOfLastOfCurrentMonth - i) - 1;
    } else {
      currentMonth[4][i] = i - dayOfLastOfCurrentMonth;
    }
  }

  const events = [new Event(new Date(2022, 9, 15), "IEEE Day")];

  const updateRight = () => {};
  const days = [[], [], [], [], []];
  const setOffClickedOnOthers = () => {
    for (let i = 0; i < 35; i++) {}
  };
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 7; j++) {
      days[i].push(
        <DayCard
          day={currentMonth[i][j]}
          key={i * 7 + j}
          icon="fa-regular fa-calendar"
          updateRight={updateRight}
          eventsOfTheDate={events}
          setOffClickedOnOthers={setOffClickedOnOthers}
          isToday={currentMonth[i][j] === day}
        />
      );
    }
  }

  const days_names = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="row">
      <div className="column">
        <div className="row">
          <div>
            {month === 0
              ? "December " + (year - 1).toString()
              : new Date(year, month - 1, 0).toLocaleString("default", {
                  month: "long",
                }) +
                " " +
                year}
          </div>
          <div>
            {date.toLocaleString("default", { month: "long" }) + " " + year}
          </div>
          <div>
            {month === 11
              ? "January " + (year + 1).toString()
              : new Date(year, month + 1, 1).toLocaleString("default", {
                  month: "long",
                }) +
                " " +
                year}
          </div>
        </div>
        <div className="row width-80-pc centerContent">
          <div className="column margin-horiz-5 gap-1">
            <div className="row">
              <div className=""> {days_names}</div>
            </div>
            <div className="row">{days[0]}</div>
            <div className="row">{days[1]}</div>
            <div className="row">{days[2]}</div>
            <div className="row">{days[3]}</div>
            <div className="row">{days[4]}</div>
          </div>
        </div>
      </div>
      <div>Its me</div>
    </div>
  );
};

export default Calendar;
