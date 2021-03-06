import Image from "next/image";
import styled from "styled-components";
import CardGallery from "./CardGallery";

const StyledWrapper = styled.div`
  height: 700px;
  margin-top: -100px;
  margin-bottom: -180px;
  @media (min-width: 320px) {
    display: none;
  }
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 45px;
  }
  @media (min-width: 1200px) {
    grid-column-gap: 95px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30%;
`;

export default function Gallery({ galleries }) {
  return (
    <>
      <Container>
        <StyledWrapper>
          {galleries.map((item) => (
            <CardGallery
              item={item["cover"]}
              title={item.title}
              url={"cover"}
            />
          ))}
        </StyledWrapper>
      </Container>
    </>
  );
}
