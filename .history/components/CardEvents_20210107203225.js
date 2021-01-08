import React from "react";
import styled from "styled-components";

const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 4fr;
`;

const Data = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 2px solid rgba(151, 149, 158, 0.7);
  margin-right: 15px;
  padding: 0;
  height: 60%;
`;

const Day = styled.h2`
  margin: 0 15px;
  font-size: 25px;
`;

const Month = styled.h2`
  font-size: 10px;
`;

const ContentWrapper = styled.h2`
  font-size: 20px;
`;
const BorderBottomWrapper = styled.div`
  border-bottom: 2px solid rgba(151, 149, 158, 0.7);
  width: 95%;
`;

const CardEvents = ({ title, day, month, content }) => (
  <ul>
    <ItemWrapper>
      <Data>
        <Day>{day}</Day>
        <Month>{month}</Month>
      </Data>

      <ContentWrapper>{content}</ContentWrapper>
    </ItemWrapper>
    <BorderBottomWrapper />
  </ul>
);

export default CardEvents;
