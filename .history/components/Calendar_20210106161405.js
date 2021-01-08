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
    day: "07",
    content: "Mistrzostwa Polski Ratowników Górniczych",
  },
  {
    title: "Grudzień",
    day: "15",
    content: "Turniej przykaład 3",
  },
  {
    title: "Grudzień",
    day: "22",
    content: "Turniej przykład 4",
  },
];

const StyledWrapper = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: 2fr 1fr;
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
  background-color: rgba(249, 83, 83, 1);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const NameHeader = styled.h1`
  text-align: center;
  color: white;
  letter-spacing: 3px;
  font-size: 45px;
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
        <NameHeader>Grudzień</NameHeader>
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
