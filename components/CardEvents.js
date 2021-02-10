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
  @media (max-width: 460px) {
    height: 85%;
  }
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
  @media (max-width: 460px) {
    font-size: 24px;
  }
`;

const Month = styled.h2`
  margin: 0 15px 0 0;
  padding: 0;
  font-size: 15px;
  color: #222;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.h2`
  font-size: 20px;
  color: #222;
  margin-bottom: 4px; /* @media (max-width: 1200px) {
    font-size: 18px;
  } */
  @media (min-width: 320px) {
    font-size: 15px;
    width: 90%;
  }
  @media (min-width: 800px) {
    font-size: 16px;
    width: 90%;
  }
  @media (min-width: 800px) {
    font-size: 20px;
  }
`;

const Exact = styled.h2`
  font-size: 15px;
  font-weight: 600;
  margin-top: 0;
  margin-left: 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const BorderBottomWrapper = styled.div`
  border-bottom: 2px solid rgba(34, 34, 34, 0.3);
  width: 95%;
  padding: 5px;
`;
const List = styled.ul`
  @media (max-width: 460px) {
    width: 100%;
    padding-left: 20px;
  }
`;

const CardEvents = ({ day, month, content, exact }) => (
  <List>
    <ItemWrapper>
      <Data>
        <Day>{day}</Day>
        <Month>{month}</Month>
      </Data>
      <ContentWrapper>
        <Content>{content}</Content>
        <Exact>{exact}</Exact>
      </ContentWrapper>
    </ItemWrapper>
    <BorderBottomWrapper />
  </List>
);

export default CardEvents;
