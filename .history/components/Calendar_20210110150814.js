import React from "react";
import styled from "styled-components";
import CardEvents from "./CardEvents";
import { events } from "../data/events";

const StyledWrapper = styled.div`
  padding: 5px;
  display: grid;
  grid-template-columns: 2fr 1fr;
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
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 25px;
`;

const HeaderAside = styled.div`
  width: 90%;
  height: 55px;
  background-color: #fd5825;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const ImageWrapper = styled.img`
  margin-left: 10px;
  padding: 5px;
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
        <ImageWrapper
          src="https://hotelkameleon.com/assets/grafika/logo.png"
          alt="logo kameleon żory"
        />
        <ImageWrapper
          src="https://lh3.googleusercontent.com/proxy/nakbChP1GeDhcfiTIIgn_UoAxsf_CrKz5fAaXS8arRZRYO7WpnfNRvWWRg5BwtuJnKfbB_0LouV3aNsd6kWX_zCvkivSb3WzRifv848p"
          alt="logo-kk kwant"
        />
        <ImageWrapper
          src="https://lh3.googleusercontent.com/proxy/nqoEVRrMdJj7pJDkTZCA4rKSA1P2IAqK9VPUd9r3L6URoFZYbrMHGAk8O8XHCdKMeDS-Eqlz-oOOvhYJu8vPtCt7dFq9QpZBH8hqQmdt"
          width="200"
        />
        <ImageWrapper src="https://www.baza-firm.com.pl/firmy/5/56114/logo/56114_logo.gif?t=1331650725" />
      </div>
    </StyledAside>
  </StyledWrapper>
);

export default Calendar;
