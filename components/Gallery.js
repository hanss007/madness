import Image from "next/image";
import styled from "styled-components";
import CardGallery from "./CardGallery";

const StyledWrapper = styled.div`
  height: auto;
  /* margin-top: -100px;
  margin-bottom: -180px; */
  @media (min-width: 320px) {
    display: none;
  }
  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 45px;
    margin-top: 35%;
  }
  @media (min-width: 1135px) {
    margin-top: 30%;
  }
  @media (min-width: 1200px) {
    grid-column-gap: 95px;
    margin-top: 20%;
  }
  @media (min-width: 1355px) {
    margin-top: 16%;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export default function Gallery({ galleries }) {
  return (
    <>
      <Container>
        <StyledWrapper>
          {galleries.map((item) => (
            <a href={`/galleries/${item.id}`}>
              <CardGallery
                item={item["cover"]}
                title={item.title}
                url={"cover"}
              />
            </a>
          ))}
        </StyledWrapper>
      </Container>
    </>
  );
}
