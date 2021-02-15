import React from "react";
import styled from "styled-components";
import CardEvents from "./CardEvents";
import { scheduleZory } from "../data/scheduleZory";
import { schedulePLF } from "../data/schedulePLF";

const StyledWrapper = styled.div`
  position: relative;
  top: -70px;
  padding: 5px;
  background-color: transparent;
  width: 100vw;
  height: 540px;
  color: black;
  margin: 0;

  @media (min-width: 320px) {
    display: flex;
    flex-direction: column;
    top: -230px;
  }
  @media (min-width: 800px) {
    top: -200px;
  }
  @media (min-width: 1024px) {
    top: -90px;
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
`;
const StyledCalender = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CalendarHeader = styled.div`
  width: 70%;
  height: 55px;
  background-color: #fd5825;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  @media (max-width: 460px) {
    width: 95%;
  }
  @media (min-width: 320px) {
    width: 95%;
  }
  @media (min-width: 1024px) {
    width: 80%;
  }
  @media (min-width: 1200px) {
    width: 75%;
  }
`;

const NameHeader = styled.h2`
  text-align: center;
  text-transform: uppercase;
  color: white;
  letter-spacing: 3px;
`;

const CalendarItems = styled.div`
  width: 70%;
  height: 80%;
  background-color: transparent;
  margin: 0 auto;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  @media (min-width: 320px) {
    width: 100%;
  }
  @media (min-width: 1024px) {
    width: 80%;
  }
`;

const monthNames = [
  "Styczeń",
  "Luty",
  "Marzec",
  "Kwiecień",
  "Maj",
  "Czerwiec",
  "Lipiec",
  "Sierpień",
  "Wrzesień",
  "Październik",
  "Listopad",
  "Grudzień",
];

// const schedule = [
//   {
//     month: "Luty",
//     day: "05",
//     content: "team1 - team 2 13 kolejka",
//   },
//   {
//     month: "Luty",
//     day: "06",
//     content: "team1 - team 2 14 kolejka",
//   },
//   {
//     month: "Marzec",
//     day: "05",
//     content: "team1 - team 2 19kolejka",
//   },
// ];
const now = new Date();
const currentMonth = monthNames[now.getMonth()];

const CalendarTeam = ({ schedule }) => {
  const currentMonthEvents = schedule.filter(
    (item) => item.month === currentMonth
  );
  return (
    <StyledWrapper>
      <StyledCalender>
        <CalendarHeader>
          <NameHeader>{currentMonth}</NameHeader>
        </CalendarHeader>

        <CalendarItems>
          {currentMonthEvents.map((event) => (
            <CardEvents
              day={event.day}
              month={event.month}
              content={event.content}
            />
          ))}
        </CalendarItems>
      </StyledCalender>
    </StyledWrapper>
  );
};

export default CalendarTeam;

// const monthNames = [
//   "Styczeń",
//   "Luty",
//   "Marzec",
//   "Kwiecień",
//   "Maj",
//   "Czerwiec",
//   "Lipiec",
//   "Sierpień",
//   "Wrzesień",
//   "Październik",
//   "Listopad",
//   "Grudzień",
// ];

// const calZory = [
//   {
//     month: "Luty",
//     day: "05",
//     content: "team1 - team 2 13 kolejka",
//   },
//   {
//     month: "Luty",
//     day: "05",
//     content: "team1 - team 2 14 kolejka",
//   },
//   {
//     month: "Marzec",
//     day: "05",
//     content: "team1 - team 2 17 kolejka",
//   },
// ];
// const now = new Date();
// const data = monthNames[now.getMonth()];

// const CalendarTeam = ({ content }) => {
//   const rows = [],
//   for (let i in calZory) {
//     if (calZory[i].month === "Luty") {
//       // content = calZory[i].content;
//       calZory[i].content;
//     }
//   }

//   return (
//     <StyledWrapper>
//       <StyledCalender>
//         <CalendarHeader>
//           <NameHeader>{data}</NameHeader>
//         </CalendarHeader>

//         <CalendarItems></CalendarItems>
//       </StyledCalender>
//     </StyledWrapper>
//   );
// };

// export default CalendarTeam;

// if (obj.find((item) => item.month === "Luty")) {
//   console.log(item.month);
// } dlaczego nie szło tego tak zrobic

// for (let i in obj) {
//   if (obj[i].month === "Luty") {
//  console.log(obj[i].content)
//   }
// }