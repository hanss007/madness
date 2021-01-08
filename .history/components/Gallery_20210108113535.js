import styled from "styled-components";

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 85px;
  background-color: #252528;
  width: 100vw;
  height: 540px;
  color: black;
  margin: 0;
`;

const Gallery = () => (
  <StyledWrapper>
    <h1>Gallery</h1>
  </StyledWrapper>
);

export default Gallery;
