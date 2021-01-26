import React from "react";
import styled, { css } from "styled-components";
import { baseUrl } from "../../utils";
import GlobalStyle from "../../theme/GlobalStyle";

const StyledWrapper = styled.div`
  border-radius: 18px;
  background: white;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  font-family: roboto;
  text-align: center;
  transition: 0.5s ease;
  width: 320px;
  height: 480px;
  margin: 0 auto;
  margin-top: ${(props) => (props.isActive ? "50px" : "-20px")};
  @media (max-width: 1366px) {
    max-width: 300px;
  }
  @media (max-width: 1200px) {
    max-width: 270px;
  }
  @media (max-width: 1024px) {
    max-width: 230px;
    height: 420px;
  }
  @media (max-width: 800px) {
    max-width: 210px;
    height: 380px;
  }
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
  width: 320px;
  height: 240px;
  @media (max-width: 1366px) {
    max-width: 300px;
  }
  @media (max-width: 1200px) {
    max-width: 270px;
  }
  @media (max-width: 1024px) {
    max-width: 230px;
    height: 180px;
  }
  @media (max-width: 800px) {
    max-width: 210px;
    height: 170px;
  }
`;
const TextStyled = styled.div`
  grid-area: text;
  margin: 25px;
  height: 135px;
  @media (max-width: 800px) {
    height: 135px;
    margin: 15px;
  }
`;

const TitleStyled = styled.h2`
  margin-top: 0px;
  font-size: 20px;
  color: #222;
  margin-bottom: 25px;
  text-transform: capitalize;
  @media (max-width: 1024px) {
    font-size: 18px;
  }
  @media (max-width: 800px) {
    font-size: 14px;
  }
`;

const ContentStyled = styled.p`
  color: grey;
  font-size: 15px;
  font-weight: 300;
  @media (max-width: 1024px) {
    font-size: 14px;
  }
  @media (max-width: 800px) {
    font-size: 12px;
  }
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
  @media (max-width: 1024px) {
    grid-template-columns: 1.25fr 0.3fr 1.25fr;
  }
`;

const StatInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  text-transform: capitalize;
  padding: 10px;
  border-left: 1px solid rgba(247, 239, 229, 0.6);
  border-right: 1px solid rgba(247, 239, 229, 0.6);
  height: 55px;
  &.date {
    font-size: 15px;
  }

  &:last-child {
    border-right: none;
  }
  &:first-child {
    border-left: none;
  }
  @media (max-width: 800px) {
    height: 45px;
  }
`;

const Button = styled.a`
  color: white;
  margin-right: 15px;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 14px;
  margin-left: 20px;
  border-bottom: 1px solid white;

  cursor: pointer;
  transition: color 0.2s ease;
  &:hover {
    background-color: white;
    color: black;
    padding: 3px;
    border-radius: 4px;
    font-size: 12px;
  }
  @media (max-width: 1024px) {
    font-size: 12px;
    margin:0;s
  }
`;

const CardNews = ({ item, isActive }) => (
  <>
    <GlobalStyle />
    <StyledWrapper isActive={isActive}>
      <ImageWrapper>
        <ImgStyled src={`${baseUrl}${item.image.url}`} alt="foto" />
      </ImageWrapper>
      <TextStyled>
        <TitleStyled>{item.title}</TitleStyled>
        <ContentStyled>{item.excerpt}</ContentStyled>
      </TextStyled>
      <StatsStyled>
        <StatInfo className="date">{item.created}</StatInfo>
        <StatInfo>
          <Button href={`/items/${item.id}`}>więcej</Button>
        </StatInfo>
        <StatInfo>{item.typ}</StatInfo>
      </StatsStyled>
    </StyledWrapper>
  </>
);

export default CardNews;
