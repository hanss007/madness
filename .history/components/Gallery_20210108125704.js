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

  background-color: #222;
`;

const Gallery = () => (
  <StyledWrapper>
    <InnerWrapper>
      <Image
        src={url(
          "https://cdn.pixabay.com/photo/2018/02/05/17/38/jason-denayer-3132749_1280.jpg"
        )}
        width={200}
        height={200}
      />
    </InnerWrapper>
    <InnerWrapper />
    <InnerWrapper />
    <InnerWrapper />
    <InnerWrapper />
    <InnerWrapper />
  </StyledWrapper>
);

export default Gallery;
