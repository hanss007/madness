import styled from "styled-components";

const StyledWrapper = styled.div`
  padding: 25px 150px 25px 70px;

  width: 100vw;
  height: 540px;

  margin: 0;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 95px;
`;

const InnerWrapper = styled.div`
  width: 200px;
  height: 200px;
  background-color: #222;
`;

const Gallery = () => (
  <StyledWrapper>
    <Wrapper>
      <InnerWrapper />
      <InnerWrapper />
      <InnerWrapper />
    </Wrapper>
  </StyledWrapper>
);

export default Gallery;
