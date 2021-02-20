import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 320px) {
    margin-top: 160px;
  }
  @media (min-width: 640px) {
    flex-direction: row;
  }
  @media (min-width: 1024px) {
    flex-direction: column;
    margin-top: 10px;
  }
`;

const ImageWrapper = styled.img`
  margin: 20px 40px 55px 10px;
  width: 250px;
  @media (min-width: 320px) {
    width: 150px;
    margin: 10px 10px 25px 10px;
  }
  @media (min-width: 460px) {
    width: 180px;
  }
  @media (min-width: 640px) {
    margin-top: -120px;
  }
  @media (min-width: 1024px) {
    margin: 10px 40px 55px 10px;
    width: 250px;
  }

  /* @media (max-width: 1200px) {
    width: 150px;
  }
  @media (max-width: 800px) {
    width: 110px;
  }
  @media (min-width: 460px) {
    width: 70px;
  }
  @media (min-width: 460px) {
    width: 120px;
  }
  @media (min-width: 768px) {
    width: 140px;
  }
  @media (min-width: 1200px) {
    width: 160px;
  } */
`;

const Sponosrs = ({ logo }) => (
  <StyledWrapper>
    {logo.map((item) => (
      <ImageWrapper src={item.url} alt={item.name} />
    ))}
  </StyledWrapper>
);

export default Sponosrs;
