import React from "react";
import styled from "styled-components";
import CardEvents from "./CardEvents";
import { events } from "../data/events";

const StyledWrapper = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  /* background-color: #e6e6e6; */
  background-color: white;
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
  height: 55px;
  background-color: rgba(249, 83, 83, 1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const NameHeader = styled.h1`
  bottom: 30px;
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
`;

const StyledAside = styled.div`
  margin: 10px;
  background-color: gray;
`;

const Calendar = ({ title, day, month, content }) => (
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
            month={event.month}
            content={event.content}
          />
        ))}
      </CalendarItems>
    </StyledCalender>
    <StyledAside />
  </StyledWrapper>
);

export default Calendar;
