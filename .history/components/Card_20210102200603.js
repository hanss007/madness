import React from "react";
import styled, { css } from "styled-components";

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 300px;
  grid-template-rows: 210px 210px 80px;
  grid-template-areas: "image" "text" "stats";
  border-radius: 18px;
  background: white;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  font-family: roboto;
  text-align: center;
  transition: 0.5s ease;
  cursor: pointer;
  margin: 30px;

  &:hover {
    transform: scale(1.1);
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.6);
  }
`;
const ImageWrapper = styled.div`
  grid-area: image;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-size: cover;
`;
const TextStyled = styled.div`
  grid-area: text;
  margin: 25px;
`;
const DateInfo = styled.div`
  color: rgb(0, 207, 180);
  font-size: 13px;
`;

const TitelStyled = styled.h2`
  margin-top: 0px;
  font-size: 22px;
  color: black;
  text-transform: capitalize;
`;

const ContentStyled = styled.p`
  color: grey;
  font-size: 15px;
  font-weight: 300;
`;

const StatsStyled = styled.div`
  grid-area: stats;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background: rgb(0, 207, 180);
`;

const StatInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  color: white;
  padding: 10px;
  border-left: 1px solid rgb(115, 115, 115);
  border-right: 1px solid rgb(115, 115, 115);

  &:last-child {
    border-right: none;
  }
  &:first-child {
    border-left: none;
  }
`;

const Card = (props) => (
  <StyledWrapper>
    <ImageWrapper>{imageNews}</ImageWrapper>
    <TextStyled>
      <DateInfo>{created}</DateInfo>
      <TitelStyled>{props.title || "HANS"}</TitelStyled>
      <ContentStyled>{content}</ContentStyled>
    </TextStyled>
    <StatsStyled>
      <StatInfo>19.12.2020</StatInfo>
      <StatInfo>01</StatInfo>
      <StatInfo>Turnieje</StatInfo>
    </StatsStyled>
  </StyledWrapper>
);

export default Card;
