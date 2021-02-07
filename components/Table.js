import React, { Component } from "react";
import styled, { css, keyframes } from "styled-components";

const StyledWrapper = styled.div`
  padding: 8px;

  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 0.3fr 0.1fr 0.1fr;
  width: 100%;
`;

const NameTeam = styled.h2`
  font-size: 20px;
  @media (min-width: 320px) {
    font-size: 10px;
    line-height: 30px;
  }
  @media (min-width: 640px) {
    font-size: 14px;
  }
  @media (min-width: 1024px) {
    font-size: 20px;
  }
`;

const Colon = styled.span`
  font-size: 20px;
  font-weight: 600;
  @media (min-width: 320px) {
    font-size: 10px;
    width: 5px;
    line-height: 45px;
  }
  @media (min-width: 640px) {
    font-size: 18px;
    line-height: 50px;
  }
  @media (min-width: 1024px) {
    font-size: 20px;
    line-height: 60px;
  }
`;

const BorderBottomWrapper = styled.div`
  border-bottom: 2px solid #222;
  opacity: 0.4;
  width: 90%;
  padding: 2px;
  margin-left: -75px;
  @media (min-width: 320px) {
    margin-left: 10px;
    width: 100%;
  }
  @media (min-width: 640px) {
    margin-left: -5px;
  }
`;

const Table = ({ item }) => (
  <StyledWrapper>
    <InnerWrapper>
      <NameTeam>{item.name}</NameTeam>
      <NameTeam>{item.pkt}</NameTeam>
      <NameTeam>{item.goalsscored}</NameTeam>

      <NameTeam>{item.goalslost}</NameTeam>
    </InnerWrapper>
    <BorderBottomWrapper />
  </StyledWrapper>
);

export default Table;
