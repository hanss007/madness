import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  position: relative;
  width: 280px;
  height: 280px;
  background-color: transparent;
  border: 2px solid rgba(34, 2, 0, 0.3);
  border-radius: 5px;
  @media (max-width: 800px) {
    width: 190px;
    height: 190px;
  }
`;
//poźniej .img
const StyledImg = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  background-color: #727876;
  background-size: contain;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  @media (max-width: 800px) {
    width: 150px;
    height: 150px;
  }
`;

const CardGallery = ({ ImageUrl }) => (
  <StyledWrapper>
    <StyledImg>
      <h3>miejsce na na zdjęcie</h3>
    </StyledImg>
  </StyledWrapper>
);

export default CardGallery;
