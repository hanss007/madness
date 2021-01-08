import React from "react";
import styled from "styled-components";

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

const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

const Data = styled.h2`
  font-size: 20px;
`;

const ContentWrapper = styled.h2`
  font-size: 20px;
`;
const BorderWrapper = styled.div`
  border-bottom: 2px solid black;
  width: 90%;
`;

const CardEvents = ({ title, day, content }) => (
  <StyledCalender>
    <CalendarHeader>
      <NameHeader>{title}</NameHeader>
    </CalendarHeader>
    <CalendarItems>
      <ul>
        <ItemWrapper>
          <Data>{day}</Data>

          <ContentWrapper>{content}</ContentWrapper>
        </ItemWrapper>
        <BorderWrapper />
      </ul>
    </CalendarItems>
  </StyledCalender>
);

export default CardEvents;
