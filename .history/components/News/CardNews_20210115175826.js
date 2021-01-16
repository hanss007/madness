import React from "react";
import styled, { css } from "styled-components";

import Link from "next/link";

const StyledWrapper = styled.div`
  border-radius: 18px;
  background: white;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  font-family: roboto;
  text-align: center;
  transition: 0.5s ease;
  cursor: pointer;
  /* margin: 30px; */
  max-width: 290px;

  margin: 0 auto;
  margin-top: ${(props) => (props.isActive ? "90px" : "30px")};
  &:hover {
    transform: scale(1.1);
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.6);
  }
`;
const ImageWrapper = styled.div`
  grid-area: image;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-size: cover;
  overflow: hidden;
`;

const ImgStyled = styled.img`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  width: 340px;
  height: 200px;
`;
const TextStyled = styled.div`
  grid-area: text;
  margin: 25px;
`;
const DateInfo = styled.div`
  color: rgb(0, 207, 180);
  font-size: 15px;
`;

const TitleStyled = styled.h2`
  margin-top: 0px;
  font-size: 22px;
  color: #222;
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
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: #3fabaf;
  color: #f7efe5;
`;

const StatInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  padding: 10px;
  border-left: 1px solid rgba(247, 239, 229, 0.6);
  border-right: 1px solid rgba(247, 239, 229, 0.6);

  &:last-child {
    border-right: none;
  }
  &:first-child {
    border-left: none;
  }
`;

const CardNews = ({ title, content, created, imageNews, isActive }) => (
  <StyledWrapper isActive={isActive}>
    <ImageWrapper>
      <ImgStyled src={imageNews} alt="foto" />
    </ImageWrapper>
    <TextStyled>
      <TitleStyled>{title}</TitleStyled>
      <ContentStyled>{content}</ContentStyled>
    </TextStyled>
    <StatsStyled>
      <StatInfo>19.12.2020</StatInfo>
      <StatInfo>01</StatInfo>
      <StatInfo>Turnieje</StatInfo>
    </StatsStyled>
  </StyledWrapper>
);

export default CardNews;
