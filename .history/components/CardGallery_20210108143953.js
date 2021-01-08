import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 250px;
  height: 250px;
  background-color: #222;
`;
const InnerWrapper = styled.div`
  position: relative;
  width: 250px;
  height: 250px;
  border-radius: 5px;

  background-color: #222;
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
    <InnerWrapper>
      <StyledImg src={ImageUrl} />
    </InnerWrapper>
  </StyledWrapper>
);

export default CardGallery;
