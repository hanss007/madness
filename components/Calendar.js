import React from "react";
import styled from "styled-components";
import CardEvents from "./CardEvents";
import { events } from "../data/events";

const StyledWrapper = styled.div`
  position: relative;
  top: -70px;
  padding: 5px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  background-color: transparent;
  width: 100vw;
  height: 540px;
  color: black;
  margin: 0;
  @media (max-width: 1024px) {
    top: -140px;
  }
  @media (max-width: 800px) {
    top: -200px;
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
  @media (max-width: 1200px) {
    font-size: 20px;
  }
  @media (max-width: 800px) {
    font-size: 18px;
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
`;

const Calendar = ({ day, month, content }) => (
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
          src="https://hotelkameleon.com/assets/grafika/logo.png"
          alt="logo kameleon żory"
        />
        <ImageWrapper
          src="https://staropolanka.pl/wp-content/themes/wp-theme/images/logo.png"
          alt="logo-staropolanka"
        />
        <ImageWrapper
          src="https://www.firmagodnazaufania.pl/assets/upload/photos/4a777d3f3f1d9511e7597500fd8eec76799d2e10.jpeg"
          width="200"
        />
        <ImageWrapper src="https://www.baza-firm.com.pl/firmy/5/56114/logo/56114_logo.gif?t=1331650725" />
      </div>
    </StyledAside>
  </StyledWrapper>
);

export default Calendar;
