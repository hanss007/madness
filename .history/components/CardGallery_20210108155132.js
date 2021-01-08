import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  position: relative;
  width: 250px;
  height: 250px;
  background-color: #222;
  border-radius: 8px;
`;

const StyledImg = styled.img`
  position: absolute;
  width: 200px;
  height: 200px;
  background-color: #222;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CardGallery = ({ ImageUrl }) => (
  <StyledWrapper>
    <StyledImg src="https://cdn.pixabay.com/photo/2017/09/03/09/48/brazil-2709731_1280.jpg" />
    <StyledImg src="https://cdn.pixabay.com/photo/2017/12/07/18/25/tolgay-arslan-3004304_1280.jpg" />
  </StyledWrapper>
);

export default CardGallery;
