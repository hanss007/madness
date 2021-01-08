import Image from "next/image";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 85px;
  margin-left: 260px;

  width: 100vw;
  height: 700px;
`;

const InnerWrapper = styled.div`
  width: 250px;
  height: 250px;
  /* 
  background-color: #222; */
`;

const Gallery = () => (
  <StyledWrapper>
    <InnerWrapper>
      <Image src="/images/stadion.jpg" width={200} height={200} />
    </InnerWrapper>
    <InnerWrapper />
    <InnerWrapper />
    <InnerWrapper />
    <InnerWrapper />
    <InnerWrapper />
  </StyledWrapper>
);

export default Gallery;
