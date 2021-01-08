import React from "react";
import styled from "styled-components";
import CardEvents from "./CardEvents";
import { events } from "../data/events";

const StyledWrapper = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  /* background-color: #e6e6e6; */
  background-color: transparent;
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
  background-color: #fd5825;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
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
`;

const StyledAside = styled.div`
  display: flex;
  margin: 10px;
`;

const HeaderAside = styled.div`
  width: 90%;
  height: 55px;
  background-color: #fd5825;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const Calendar = ({ title, day, month, content }) => (
  <StyledWrapper>
    <StyledCalender>
      <CalendarHeader>
        <NameHeader>Kalendarz</NameHeader>
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
    <StyledAside>
      <HeaderAside>
        <NameHeader>Sponsorzy</NameHeader>
      </HeaderAside>
    </StyledAside>
  </StyledWrapper>
);

export default Calendar;
