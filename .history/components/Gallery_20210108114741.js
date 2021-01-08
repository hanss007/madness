import styled from "styled-components";

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 95px;

  width: 100vw;
  height: 540px;
`;

const InnerWrapper = styled.div`
  width: 300px;
  height: 300px;
  background-color: #222;
`;

const Gallery = () => (
  <StyledWrapper>
    <InnerWrapper />
    <InnerWrapper />
    <InnerWrapper />
    <InnerWrapper />
    <InnerWrapper />
    <InnerWrapper />
  </StyledWrapper>
);

export default Gallery;
