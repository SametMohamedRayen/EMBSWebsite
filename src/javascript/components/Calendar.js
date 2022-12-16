import React, { useState } from "react";
import DayCard from "./DayCard";
import { Event } from "../models/Event";

const Calendar = () => {
  const [date, setDate] = useState(new Date());
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
  const events = [
    new Event(
      new Date(2022, 9, 15),
      "IEEE Day",
      "Come celebrate the IEEE anniversary every year on this date and stay tuned for all the activities that will be organized."
    ),
    new Event(
      new Date(2022, 8, 1),
      "Integration Day (1)",
      "Our Integration Days at ENET'COM were a huge success." +
        "Meeting new students, Telling them about IEEE ENET'COM SB, chapters and affinity group."
    ),
    new Event(
      new Date(2022, 8, 2),
      "Integration Day (2)",
      "Our Integration Days at ENET'COM were a huge success." +
        "Meeting new students, Telling them about IEEE ENET'COM SB, chapters and affinity group."
    ),
    new Event(
      new Date(2022, 8, 3),
      "Integration Day (3)",
      "Our Integration Days at ENET'COM were a huge success." +
        "Meeting new students, Telling them about IEEE ENET'COM SB, chapters and affinity group."
    ),
    new Event(
      new Date(2022, 8, 11),
      "Opening Ceremony",
      "Our opening ceremony took place at the ِcultural center on 11th September at 9 AM." +
        "This ceremony opened the door wide for our attendees to know more about IEEE."
    ),
    new Event(
      new Date(2022, 8, 17),
      "General Assembly ",
      "Our first general assembly. We, IEEE ENET’Com student branch, chapters and affinity group,  gathered to get to know each other, share ideas and talk about our next events. So much fun and work are coming soon!!"
    ),
    new Event(
      new Date(2022, 9, 12),
      "Pink October",
      "Celebrating the pink October by raising awareness through our various activities, informative sessions and workshops."
    ),
    new Event(
      new Date(2022, 9, 19),
      "Pink O'Clock",
      "On Wednesday 19th of October, we as IEEE EMBS ENET'Com SBC in collaboration with IEEE ENET'Com Women in Engineering Student Affinity Group, organize a sports evening at our school filled with various activities such as yoga, fitness and more."
    ),
    new Event(
      new Date(2022, 9, 22),
      "IEEEXtreme",
      "A yearly global competitive programming challenge in which teams across the globe compete to solve programming problems in 24 hours of coding."
    ),
    new Event(
      new Date(2022, 9, 22),
      "IEEEXtreme",
      "A yearly global competitive programming challenge in which teams across the globe compete to solve programming problems in 24 hours of coding."
    ),
    new Event(
      new Date(2022, 11, 17),
      "TSYP (1)",
      "Spanning three days in late December and bringing in thousands of Students and Young Professionals, The TSYP Congress is the largest gathering of IEEE members from all across the country that features a diverse lineup of workshops, lectures and challenges"
    ),
    new Event(
      new Date(2022, 11, 18),
      "TSYP (2)",
      "Spanning three days in late December and bringing in thousands of Students and Young Professionals, The TSYP Congress is the largest gathering of IEEE members from all across the country that features a diverse lineup of workshops, lectures and challenges"
    ),
    new Event(
      new Date(2022, 11, 19),
      "TSYP (3)",
      "Spanning three days in late December and bringing in thousands of Students and Young Professionals, The TSYP Congress is the largest gathering of IEEE members from all across the country that features a diverse lineup of workshops, lectures and challenges"
    ),
    new Event(
      new Date(2022, 2, 23),
      "CSTC (1)",
      "The Computer Society Tech Congress (CSTC) is a national event that is hosted by the an IEEE Computer Society Student Branch Chapter every year.Our participants will be able to attend workshops and conferences."
    ),
    new Event(
      new Date(2022, 2, 24),
      "CSTC (2)",
      "The Computer Society Tech Congress (CSTC) is a national event that is hosted by the an IEEE Computer Society Student Branch Chapter every year.Our participants will be able to attend workshops and conferences."
    ),
    new Event(
      new Date(2022, 2, 25),
      "CSTC (3)",
      "The Computer Society Tech Congress (CSTC) is a national event that is hosted by the an IEEE Computer Society Student Branch Chapter every year.Our participants will be able to attend workshops and conferences."
    ),
  ];
  const [foundEvent, setFoundEvent] = useState(
    new Event(date, "Click A Date To See Events", "See here event description")
  );
  const updateRight = (day) => {
    const eventsArray = events.filter((e) => {
      return e.getDateDay() === day && e.getMonth() === month;
    });
    setFoundEvent(
      eventsArray.length === 0
        ? new Event(new Date(2022, month, day), "No Events", "--")
        : eventsArray[0]
    );
  };
  const days = [[], [], [], [], []];
  const [clicked, setClicked] = useState(new Array(35).fill(false));
  const setOffClickedOnOthers = () => {
    setClicked(new Array(35).fill(false));
  };
  const setClickedTrue = (key) => {
    let clickedTemp = new Array(35).fill(false);
    clickedTemp[key] = true;
    setClicked(clickedTemp);
  };

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 7; j++) {
      let found = !(
        events.filter((e) => {
          return (
            e.getDateDay() === currentMonth[i][j] && e.getMonth() === month
          );
        }).length === 0
      );
      days[i].push(
        <DayCard
          day={currentMonth[i][j]}
          key={i * 7 + j}
          index={i * 7 + j}
          icon="fa-regular fa-calendar"
          updateRight={updateRight}
          eventsOfTheDate={events}
          setOffClickedOnOthers={setOffClickedOnOthers}
          isToday={
            new Date().getFullYear() === year &&
            new Date().getMonth() === month &&
            new Date().getDate() === currentMonth[i][j]
          }
          clicked={clicked[i * 7 + j]}
          setClickedTrue={setClickedTrue}
          enabled={
            i === 0
              ? currentMonth[i][j] < 24
              : i === 4
              ? currentMonth[i][j] >= 22
              : true
          }
          found={found}
        />
      );
    }
  }

  const days_names = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const day_names_array = [];
  for (let i = 0; i < 7; i++) {
    day_names_array.push(
      <div key={i} className="font-albori width-3 centerText">
        {days_names[i]}
      </div>
    );
  }

  return (
    <div className="row-space-around gap-3 width-90-pc margin-left-7 margin-top-8">
      <div className="column gap-2">
        <div className="row font-lato unselectable">
          <div
            className="cursor-pointer"
            onClick={() => {
              setDate(
                new Date(
                  month === 0 ? year - 1 : year,
                  month === 0 ? 12 : month,
                  0
                )
              );
            }}
          >
            {month === 0
              ? "December " + (year - 1).toString()
              : new Date(year, month, 0).toLocaleString("default", {
                  month: "long",
                }) +
                " " +
                year}
          </div>
          <div className="gradientText-lato-700-darkBlue-60-lightBlue-150">
            {date.toLocaleString("default", { month: "long" }) + " " + year}
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              setDate(
                new Date(
                  month === 11 ? year + 1 : year,
                  month === 11 ? 0 : month + 1,
                  1
                )
              );
            }}
          >
            {month === 11
              ? "January " + (year + 1).toString()
              : new Date(year, month + 1, 1).toLocaleString("default", {
                  month: "long",
                }) +
                " " +
                year}
          </div>
        </div>
        <div className="row centerContent">
          <div className="column margin-horiz-5 width-full gap-1">
            <div className="row gap-3 margin-horz-1">{day_names_array}</div>
            <div className="row">{days[0]}</div>
            <div className="row">{days[1]}</div>
            <div className="row">{days[2]}</div>
            <div className="row">{days[3]}</div>
            <div className="row">{days[4]}</div>
          </div>
        </div>
      </div>
      <div className="divider margin-left-5"></div>
      <div className="width-50">
        <h2 className="centerText font-lato">
          {foundEvent.date.getDate() +
            "/" +
            (foundEvent.date.getMonth() + 1) +
            "/" +
            year}
        </h2>
        <h1 className="centerText gradientText-josefin-sans-darkBlue-0-lightBlue-70">
          {foundEvent.name}
        </h1>
        <p className="centerText font-lato padding-horz-6">
          {foundEvent.description}
        </p>
      </div>
    </div>
  );
};

export default Calendar;
