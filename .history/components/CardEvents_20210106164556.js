import React from "react";
import styled from "styled-components";

const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
`;

const Data = styled.h2`
  font-size: 20px;

  border-right: 2px solid red;
  height: 90%;
  height: 90%;
`;

const ContentWrapper = styled.h2`
  font-size: 20px;
`;
const BorderBottomWrapper = styled.div`
  border-bottom: 2px solid rgba(151, 149, 158, 0.7);
  width: 95%;
`;
const BorderLeftWrapper = styled.div``;

const CardEvents = ({ title, day, content }) => (
  <ul>
    <ItemWrapper>
      <Data>{day}</Data>

      <ContentWrapper>{content}</ContentWrapper>
    </ItemWrapper>
    <BorderBottomWrapper />
  </ul>
);

export default CardEvents;
