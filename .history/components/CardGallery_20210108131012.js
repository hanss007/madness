import React from "react";
import styled from "styled-components";

const images = [
  {
    url:
      "https://cdn.pixabay.com/photo/2019/08/05/08/54/football-4385515_1280.jpg",
  },
];

const StyledWrapper = styled.div`
  width: 250px;
  height: 250px;
  background-color: #222;
`;

const StyledImg = styled.img`
  width: 200px;
  height: 200px;
`;

const CardGallery = () => (
  <StyledWrapper>
    <StyledImg
      src="https://cdn.pixabay.com/photo/2019/08/05/08/54/football-4385515_1280.jpg"
      alt=""
    />
  </StyledWrapper>
);

export default CardGallery;
