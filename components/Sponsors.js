import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageWrapper = styled.img`
  margin: 20px 40px 55px 10px;
  width: 250px;
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
