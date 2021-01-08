import React from "react";
import styled from "styled-components";
import CardEvents from "./CardEvents";

const events = [
  {
    title: "Grudzień",
    day: "05",
    content: "Mistrzostwa Polski Górników i Przyjaciół",
  },
  {
    title: "Grudzień",
    day: "05",
    content: "Mistrzostwa Polski Górników i Przyjaciół",
  },
];

const StyledWrapper = styled.div`
  padding: 10px;
  display: grid;
  grid-auto-columns: 2fr 1fr;
  background-color: #e6e6e6;
  width: 100vw;
  height: 540px;
  color: black;
  margin: 0;
`;
const StyledCalender = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CalendarHeader = styled.div`
  width: 70%;
  height: 60px;
  margin: 0 auto;
  background-color: red;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const NameHeader = styled.h1`
  margin: 0 auto;
  color: white;
  font-size: 35px;
`;

const CalendarItems = styled.div`
  width: 70%;
  height: 80%;
  background-color: #f0f0f0;
  margin: 0 auto;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const StyledAside = styled.div`
  background-color: black;
`;

const Calendar = ({ title, day, content }) => (
  <StyledWrapper>
    <StyledCalender>
      <CalendarHeader>
        <NameHeader>{title}</NameHeader>
      </CalendarHeader>
      <CalendarItems>
        {events.map((event) => (
          <CardEvents
            titel={event.title}
            day={event.day}
            content={event.content}
          />
        ))}
      </CalendarItems>
    </StyledCalender>
    <StyledAside />
  </StyledWrapper>
);

export default Calendar;
