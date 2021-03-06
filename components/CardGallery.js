import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  position: relative;
  margin-top: 25px;

  background-color: transparent;
  border: 1px solid rgba(34, 2, 0, 0.3);

  @media (min-width: 320px) {
    width: 190px;
    height: 190px;
  }
  @media (min-width: 460px) {
    width: 290px;
    height: 240px;
  }
  @media (min-width: 800px) {
    width: 215px;
    height: 205px;
  }
  @media (min-width: 1024px) {
    width: 290px;
    height: 240px;
  }

  @media (min-width: 1200px) {
    width: 320px;
    height: 250px;
  }
  @media (min-width: 1355px) {
    width: 380px;
    height: 300px;
  }
`;

const StyledImg = styled.img`
  position: absolute;
  width: 300px;
  height: 200px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -65%);
  text-align: center;
  color: white;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: translate(-50%, -65%) scale(1.1);
  }
  @media (min-width: 320px) {
    width: 175px;
    height: 130px;
  }
  @media (min-width: 460px) {
    width: 255px;
    height: 165px;
  }
  @media (min-width: 800px) {
    width: 185px;
    height: 140px;
  }
  @media (min-width: 1024px) {
    width: 255px;
    height: 165px;
  }
  @media (min-width: 1200px) {
    width: 280px;
    height: 170px;
  }
  @media (min-width: 1355px) {
    width: 330px;
    height: 200px;
  }
`;
const Title = styled.h5`
  position: absolute;
  width: 90%;
  text-align: center;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, 0%);
  color: black;
  @media (min-width: 320px) {
    font-size: 9px;
  }
  @media (min-width: 460px) {
    font-size: 10px;
  }
  @media (min-width: 1024px) {
    font-size: 12px;
  }
`;

export default function CardGallery({ item, title, url }) {
  // const click = () => {

  // };
  return (
    <StyledWrapper onClick={() => "news"}>
      <StyledImg src={item.url} />
      <Title>{title} </Title>
    </StyledWrapper>
  );
}
