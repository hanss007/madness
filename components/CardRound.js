import React from "react";
import styled from "styled-components";

const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

const Info = styled.div`
  margin-right: 15px;
  padding: 0;
  height: 75%;
  /* @media (max-width: 460px) {
    height: 85%;
  } */
`;

const Date = styled.h2`
  margin: 0 15px 0 0;
  padding: 0;
  font-size: 20px;
  color: #222;
  font-weight: 500;
  /* @media (min-width: 320px) {
    font-size: 20px;
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
  } */
`;

const Time = styled.h2`
  margin: 0 15px 0 0;
  padding: 0;
  font-size: 15px;
  color: #222;
  font-weight: 500;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.h2`
  font-size: 22px;
  padding: 0;
  color: #222;
  font-weight: 600;
  margin-bottom: 4px; /* @media (max-width: 1200px) {
    font-size: 18px;
  } */
  /* @media (min-width: 320px) {
    font-size: 15px;
    width: 90%;
  }
  @media (min-width: 800px) {
    font-size: 16px;
    width: 90%;
  }
  @media (min-width: 800px) {
    font-size: 20px;
  } */
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

const CardRound = ({ date, time, content }) => (
  <List>
    <ItemWrapper>
      <Info>
        <Date>{date}</Date>
        <Time>{time}</Time>
      </Info>
      <ContentWrapper>
        <Content>{content}</Content>
      </ContentWrapper>
    </ItemWrapper>
    <BorderBottomWrapper />
  </List>
);

export default CardRound;
