import React, { useState, useEffect } from "react";

import styled from "styled-components";
import CardRound from "./CardRound";

import { ArrowRightCircleFill } from "@styled-icons/bootstrap/ArrowRightCircleFill";
import { ArrowLeftCircleFill } from "@styled-icons/bootstrap/ArrowLeftCircleFill";

// const StyledWrapper = styled.div`
//   position: relative;
//   top: -70px;
//   padding: 5px;
//   background-color: transparent;
//   width: 100vw;
//   height: 540px;
//   color: black;
//   margin: 0;

//   @media (min-width: 320px) {
//     display: flex;
//     flex-direction: column;
//     top: -230px;
//   }
//   @media (min-width: 800px) {
//     top: -200px;
//   }
//   @media (min-width: 1024px) {
//     top: -90px;
//     display: grid;
//     grid-template-columns: 2fr 1fr;
//   }
// `;
const StyledCalender = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 65%;
  margin-top: 140px;
  margin-left: -24%;
`;

const CalendarHeader = styled.div`
  width: 70%;
  height: 55px;

  background-color: #ef273d;
  /* border-top-left-radius: 8px;
  border-top-right-radius: 8px; */
  display: flex;
  justify-content: space-around;

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

const allRound = [
  {
    title: "1.Kolejka",
    date: "24.09.2020",
    time: "18:00",
    content: "Old Stars 6:4 Maxelektro",
  },
  {
    title: "1.Kolejka",
    date: "24.09.2020",
    time: "18:55",
    content: "Squad Drewna 7:6 Dream Team",
  },
  {
    title: "1.Kolejka",
    date: "24.09.2020",
    time: "19:50",
    content: "Pniówek Team 4:2 Grajki",
  },
  {
    title: "1.Kolejka",
    date: "25.09.2020",
    time: "20:20",
    content: "Multibiuro-Madness-KK Kwant 5:3 Zymft",
  },
  {
    title: "2.Kolejka",
    date: "1.10.2020",
    time: "18:00",
    content: "Drunken Sharks 4:7 Pniówek Team",
  },
];

function Round({ schedule }) {
  //   const now = new Date();
  //   const [cdate, setDate] = useState(now.getMonth() + 1);

  //   const nextMonth = () => {
  //     if (cdate === 11) {
  //       setDate(0);
  //       return;
  //     }
  //     setDate(cdate + 1);
  //   };

  //   const currentMonthEvents = schedule.filter(
  //     (item) => item.title === monthNames[cdate]
  //   );

  //   const previousMonth = () => {
  //     if (cdate === 0) {
  //       setDate(11);
  //       return;
  //     }
  //     setDate(cdate - 1);
  //   };

  return (
    <StyledCalender>
      <CalendarHeader>
        {/* <PrevButton onClick={previousMonth} /> */}

        <NameHeader>{allRound[0].title}</NameHeader>

        {/* <NextButton onClick={nextMonth} /> */}
      </CalendarHeader>

      <CalendarItems>
        {allRound.map((event) => (
          <CardRound
            date={event.date}
            time={event.time}
            content={event.content}
          />
        ))}
      </CalendarItems>
    </StyledCalender>
  );
}

export default Round;
