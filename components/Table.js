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
  grid-template-columns: 1fr 0.5fr 0.2fr 0.1fr 0.3fr;
  width: 100%;
`;

const NameTeam = styled.h2`
  margin: 0 20px;
  font-size: 20px;
`;

const Colon = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

const BorderBottomWrapper = styled.div`
  border-bottom: 2px solid #222;
  opacity: 0.4;
  width: 90%;
  padding: 2px;
  margin-left: -75px;
`;

const Table = ({ item }) => (
  <StyledWrapper>
    <InnerWrapper>
      <NameTeam>{item.name}</NameTeam>
      <NameTeam>{item.pkt}</NameTeam>
      <NameTeam>{item.goalsscored}</NameTeam>
      <Colon>:</Colon>
      <NameTeam>{item.goalslost}</NameTeam>
    </InnerWrapper>
    <BorderBottomWrapper />
  </StyledWrapper>
);

export default Table;
