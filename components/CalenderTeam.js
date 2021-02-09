import React from "react";
import styled from "styled-components";
import CardEvents from "./CardEvents";

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
const now = new Date();

const CalendarTeam = () => (
  <StyledWrapper>
    <StyledCalender>
      <CalendarHeader>
        <NameHeader>{monthNames[now.getMonth()]}</NameHeader>
      </CalendarHeader>

      <CalendarItems></CalendarItems>
    </StyledCalender>
  </StyledWrapper>
);

export default CalendarTeam;
