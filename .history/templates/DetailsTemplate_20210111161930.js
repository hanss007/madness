import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailsTemplate = () => (
  <StyledWrapper>
    <h1>{title}</h1>
    <img src={imageNews} alt="" />
    <p>{content}</p>
  </StyledWrapper>
);

export default DetailsTemplate;
