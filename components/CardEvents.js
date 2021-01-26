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
  border-right: 2px solid rgba(34, 34, 34, 0.3);
  margin-right: 15px;
  padding: 0;
  height: 70%;
`;

const Day = styled.h2`
  margin: 0 15px 0 0;
  padding: 0;
  font-size: 35px;
  color: #222;
  @media (max-width: 1155px) {
    font-size: 28px;
  }
  @media (max-width: 800px) {
    font-size: 24px;
  }
`;

const Month = styled.h2`
  margin: 0 15px 0 0;
  padding: 0;
  font-size: 15px;
  color: #222;
`;

const ContentWrapper = styled.h2`
  font-size: 20px;
  color: #222;
  @media (max-width: 1200px) {
    font-size: 18px;
  }
  @media (max-width: 800px) {
    font-size: 14px;
  }
`;
const BorderBottomWrapper = styled.div`
  border-bottom: 2px solid rgba(34, 34, 34, 0.3);
  width: 95%;
  padding: 5px;
`;

const CardEvents = ({ day, month, content }) => (
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
