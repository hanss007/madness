import styled from "styled-components";

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 85px;
  margin-left: 280px;

  width: 100vw;
  height: 560px;
`;

const InnerWrapper = styled.div`
  width: 250px;
  height: 250px;
  margin-bottom: 20px;
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
