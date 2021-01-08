import React from "react";
import styled from "styled-components";

const images = [
  {
    ImageUrl:
      "https://cdn.pixabay.com/photo/2019/08/05/08/54/football-4385515_1280.jpg",
  },
  {
    ImageUrl:
      "https://cdn.pixabay.com/photo/2017/12/07/18/25/tolgay-arslan-3004304_1280.jpg",
  },
  {
    ImageUrl:
      "https://cdn.pixabay.com/photo/2017/09/03/09/48/brazil-2709731_1280.jpg",
  },
];

const StyledWrapper = styled.div`
  width: 250px;
  height: 250px;
  background-color: #222;
`;

const StyledImg = styled.img`
  position: absolute;
  width: 200px;
  height: 200px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CardGallery = ({ ImageUrl }) => (
  <StyledWrapper>
    <StyledImg src="https://cdn.pixabay.com/photo/2017/09/03/09/48/brazil-2709731_1280.jpg" />
  </StyledWrapper>
);

export default CardGallery;
