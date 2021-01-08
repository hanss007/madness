import React from "react";
import styled from "styled-components";

const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 4fr;
  padding: 8px;
`;

const Data = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Day = styled.h2`
  font-size: 20px;
  border-right: 2px solid rgba(151, 149, 158, 0.7);
  height: 60%;
  margin-right: 10px;
`;

const Month = styled.h4`
  font-size: 10px;
`;

const ContentWrapper = styled.h2`
  font-size: 20px;
`;
const BorderBottomWrapper = styled.div`
  border-bottom: 2px solid rgba(151, 149, 158, 0.7);
  width: 95%;
`;

const CardEvents = ({ title, day, content }) => (
  <ul>
    <ItemWrapper>
      <Data>
        <Day>{day}</Day>
        {/* <Month>{month}</Month> */}
      </Data>

      <ContentWrapper>{content}</ContentWrapper>
    </ItemWrapper>
    <BorderBottomWrapper />
  </ul>
);

export default CardEvents;
