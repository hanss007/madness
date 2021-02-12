import React from "react";
import styled from "styled-components";
import CardEvents from "./CardEvents";
import { events } from "../data/events";
import Image from "next/image";

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

const StyledAside = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 25px;
`;

const HeaderAside = styled.h2`
  width: 90%;
  height: 55px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  text-transform: uppercase;

  @media (min-width: 320px) {
    text-align: center;
  }
  @media (min-width: 768px) {
    font-size: 20px;
    text-align: center;
  }
  @media (min-width: 800px) {
    font-size: 18px;
  }
  @media (min-width: 1024px) {
    font-size: 20px;
  }
`;

const ImageWrapper = styled.img`
  margin-left: 10px;
  padding: 5px;
  width: 200px;
  @media (max-width: 1200px) {
    width: 150px;
  }
  @media (max-width: 800px) {
    width: 110px;
  }
  @media (min-width: 460px) {
    width: 70px;
  }
  @media (min-width: 460px) {
    width: 120px;
  }
  @media (min-width: 768px) {
    width: 140px;
  }
  @media (min-width: 1200px) {
    width: 160px;
  }
`;

const Calendar = ({ day, month, content, logo, children }) => (
  <StyledWrapper>
    <StyledCalender>
      <CalendarHeader>
        <NameHeader>Kalendarz</NameHeader>
      </CalendarHeader>

      <CalendarItems>
        {events.map((event) => (
          <CardEvents
            day={event.day}
            month={event.month}
            content={event.content}
          />
        ))}
      </CalendarItems>
    </StyledCalender>
    <StyledAside>
      <div>
        <HeaderAside>Najbliższy turniej sponsorują:</HeaderAside>

        <ImageWrapper
          src="https://zory.com.pl/thumb/na-slasku-wiekszosc-miast-ma-swoje-logo/921036/2000/1200/i/jpg/zdjecie4"
          alt="miasto żory"
        />
        <ImageWrapper
          src="https://staropolanka.pl/wp-content/themes/wp-theme/images/logo.png"
          alt="logo-staropolanka"
        />

        <ImageWrapper src="/images/logoMosir.png" />
      </div>
    </StyledAside>
  </StyledWrapper>
);

export default Calendar;
