import React from "react";
import styled from "styled-components";

const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 3fr;
  @media (min-width: 320px) {
    grid-template-columns: 2fr 3fr;
  }
  @media (min-width: 460px) {
    grid-template-columns: 1fr 3fr;
  }
  @media (min-width: 600px) {
    grid-template-columns: 0.8fr 3fr;
  }
  @media (min-width: 800px) {
    grid-template-columns: 0.6fr 3.5fr;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 0.8fr 3fr;
  }
`;

const Data = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 2px solid rgba(34, 34, 34, 0.3);
  margin-right: 20px;
  padding: 0;
  height: 75%;
  @media (max-width: 460px) {
    height: 85%;
  }
`;

const Day = styled.h2`
  margin: 0 10px 0 0;
  padding: 0;
  font-size: 30px;
  color: #222;
  @media (min-width: 320px) {
    font-size: 18px;
  }
  @media (min-width: 640px) {
    font-size: 22px;
  }
  @media (min-width: 800px) {
    font-size: 26px;
  }
  @media (min-width: 1024px) {
    font-size: 20px;
  }
  @media (min-width: 1355px) {
    font-size: 24px;
  }
`;

const Month = styled.h2`
  margin: 0 10px 0 0;
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
    font-size: 12px;
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

const Exact = styled.h4`
  font-weight: 600;
  @media (min-width: 320px) {
    font-size: 15px;
    letter-spacing: 1px;
  }
  @media (min-width: 460px) {
    font-size: 18px;
    letter-spacing: 2px;
    font-weight: 500;
    margin-top: 0;
    margin-left: 10px;
    text-transform: uppercase;
  }
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
