import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  position: relative;
  width: 280px;
  height: 280px;
  background-color: transparent;
  border: 2px solid #222;
  border-radius: 5px;
`;

const StyledImg = styled.img`
  position: absolute;
  width: 200px;
  height: 200px;
  background-color: #222;
  background-size: contain;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CardGallery = ({ ImageUrl }) => (
  <StyledWrapper>
    <StyledImg src={ImageUrl} />
  </StyledWrapper>
);

export default CardGallery;
