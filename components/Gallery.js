import Image from "next/image";
import styled from "styled-components";
import CardGallery from "./CardGallery";
import GlobalStyle from "../theme/GlobalStyle";

const StyledWrapper = styled.div`
  height: auto;

  @media (min-width: 320px) {
    display: none;
  }
  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    padding: 15px;
  }
  @media (min-width: 900px) {
    grid-gap: 40px;
  }
  @media (min-width: 1024px) {
    grid-gap: 35px;
  }
  @media (min-width: 1155px) {
    grid-gap: 55px;
  }
  @media (min-width: 1200px) {
    grid-gap: 65px;
  }
  @media (min-width: 1400px) {
    grid-gap: 95px;
  }
`;

const Container = styled.div`
  @media (min-width: 320px) {
    display: none;
  }
  @media (min-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const StaledHeader = styled.div`
  height: 55px;
  background-color: #ef273d;

  @media (min-width: 800px) {
    width: 90%;
  }
  @media (min-width: 900px) {
    width: 85%;
  }

  @media (min-width: 1024px) {
    width: 95%;
  }
  @media (min-width: 1455px) {
    width: 90%;
  }
`;
const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  color: white;
  letter-spacing: 4px;
`;

export default function Gallery({ galleries }) {
  return (
    <>
      <GlobalStyle />
      <Container>
        <StaledHeader>
          <Title>Galeria</Title>
        </StaledHeader>

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
