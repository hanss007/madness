import React, { Component } from "react";
import styled, { css, keyframes } from "styled-components";
import { baseUrl } from "../utils";

const StyledWrapper = styled.div`
  position: relative;
  padding: 16px;
  top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InnerWrapper = styled.div`
  display: flex;
`;

const NameTeam = styled.h2`
  margin: 0 20px;
`;

const Score = styled.h3`
  font-size: 22px;
  margin: 0 8px;
`;

const Colon = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

const BorderBottomWrapper = styled.div`
  border-bottom: 2px solid #222;
  opacity: 0.7;
  width: 740px;
  padding: 2px;
`;

const ResultCard = ({ item }) => (
  <StyledWrapper>
    <InnerWrapper>
      <NameTeam>{item.team1}</NameTeam>
      <Score>{item.score1}</Score>
      <Colon>:</Colon>
      <Score>{item.score2}</Score>
      <NameTeam>{item.team2}</NameTeam>
      <tr>
        <td>{item.name}</td>
      </tr>
    </InnerWrapper>
    <BorderBottomWrapper />
  </StyledWrapper>
);

export default ResultCard;
