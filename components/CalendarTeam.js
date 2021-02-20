import React, { useState, useEffect } from "react";

import styled from "styled-components";
import CardEvents from "./CardEvents";

import { ArrowRightCircleFill } from "@styled-icons/bootstrap/ArrowRightCircleFill";
import { ArrowLeftCircleFill } from "@styled-icons/bootstrap/ArrowLeftCircleFill";

const StyledCalender = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 540px;
  /* margin-top: -70px; */
  /* margin-left: 40px; */
  @media (min-width: 320px) {
    margin-top: -220px;
    margin-left: 10px;
  }
`;

const CalendarHeader = styled.div`
  /* width: 70%; */
  height: 55px;

  background-color: #ef273d;
  display: flex;
  justify-content: space-around;
  @media (min-width: 320px) {
    width: 280px;
  }
  @media (min-width: 460px) {
    width: 410px;
  }
  @media (min-width: 640px) {
    width: 95%;
  }
  /* 
  @media (max-width: 460px) {
    width: 95%;
  }

  @media (min-width: 1024px) {
    width: 80%;
  }
  @media (min-width: 1200px) {
    width: 75%;
  } */
`;

const NameHeader = styled.h2`
  text-align: center;
  text-transform: uppercase;
  color: white;
  letter-spacing: 3px;
  margin-top: 12px;
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

const NextButton = styled(ArrowRightCircleFill)`
  width: 30px;
  height: 30px;
  margin-top: 10px;
  color: white;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
`;

const PrevButton = styled(ArrowLeftCircleFill)`
  width: 30px;
  height: 30px;
  margin-top: 10px;
  color: white;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
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

function CalendarTeam({ schedule }) {
  const now = new Date();
  const [cdate, setDate] = useState(now.getMonth() + 1);

  const nextMonth = () => {
    if (cdate === 11) {
      setDate(0);
      return;
    }
    setDate(cdate + 1);
  };

  const currentMonthEvents = schedule.filter(
    (item) => item.title === monthNames[cdate]
  );

  const previousMonth = () => {
    if (cdate === 0) {
      setDate(11);
      return;
    }
    setDate(cdate - 1);
  };

  return (
    <StyledCalender>
      <CalendarHeader>
        <PrevButton onClick={previousMonth} />

        <NameHeader>{monthNames[cdate]}</NameHeader>

        <NextButton onClick={nextMonth} />
      </CalendarHeader>

      <CalendarItems>
        {currentMonthEvents.map((event) => (
          <CardEvents
            day={event.day}
            month={event.month}
            content={event.content}
            exact={event.exact}
          />
        ))}
      </CalendarItems>
    </StyledCalender>
  );
}

export default CalendarTeam;

// function CalendarTeam({ schedule }) {
//   const now = new Date();

//   const currentMonth = monthNames[now.getMonth() + 1];

//   const month = null;
//   const [cdate, setDate] = useState(month);
//   const nextMonth = () => {
//     let month = currentMonth;
//     setDate(month);
//   };

//   const currentMonthEvents = schedule.filter(
//     (item) => item.title === currentMonth
//   );

//   return (
//     <StyledWrapper>
//       <StyledCalender>
//         <CalendarHeader>
//           <div>
//             <h3>{cdate}</h3>
//           </div>

//           <NameHeader>{currentMonth}</NameHeader>
//           <div>{/* button */}</div>
//         </CalendarHeader>

//         <CalendarItems>
//           {currentMonthEvents.map((event) => (
//             <CardEvents
//               day={event.day}
//               month={event.month}
//               content={event.content}
//               exact={event.exact}
//             />
//           ))}
//         </CalendarItems>
//       </StyledCalender>
//     </StyledWrapper>
//   );
// }

// export default CalendarTeam;
