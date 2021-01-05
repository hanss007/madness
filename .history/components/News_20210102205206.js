import React from "react";
import styled from "styled-components";
import Card from "./Card";

const StyledWrapper = styled.div`
  width: 100vw;
  height: 570px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  justify-content: space-center;
  background-color: #252525;
  overflow: hidden;
`;

const News = () => (
  <StyledWrapper>
    <Card />
    <Card />
    <Card />
  </StyledWrapper>
);

export default News;
