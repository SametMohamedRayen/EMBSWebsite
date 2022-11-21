import React from "react";

const Calendar = () => {
  const date = new Date();
  const day = date.getDay();
  const month = date.getMonth();
  console.log(month);
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

  console.log(currentMonth);

  return <p>CALENDAR</p>;
};

export default Calendar;
