import React from "react";
import Link from "next/link";
import styled from "styled-components";

const StyledWrapper = styled.div`
  position: relative;

  width: 350px;
  height: 290px;
  background-color: transparent;
  border: 1px solid rgba(34, 2, 0, 0.3);
  @media (max-width: 800px) {
    width: 190px;
    height: 190px;
  }
`;
//poźniej .img
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
  /* @media (min-width: 320px) {
    width: 150px;
    height: 150px;
  } */
`;
const Title = styled.h5`
  position: absolute;
  width: 90%;
  text-align: center;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, 0%);
  color: black;
  /* text-decoration: none;
  font-weight: 600;
  font-size: 14px; */
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
