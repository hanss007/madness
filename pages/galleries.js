import styled from "styled-components";
import Navbar from "../components/Navbar";
import BurgerMenu from "../components/BurgerMenu";
import GlobalStyle from "../theme/GlobalStyle";
import Link from "next/link";
import { fetchQuery } from "../utils";
import CardGallery from "../components/CardGallery";

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  margin-top: 50px;
  @media (min-width: 320px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 640px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    margin: 50px 25px;
  }
  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    margin: 50px 55px;
  }
  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
  }
  /* @media (min-width: 460px) {
    width: 380px;
    height: 380px;
  }
  @media (min-width: 768px) {
    width: 450px;
    height: 450px;
  }
  @media (min-width: 1024px) {
    width: 500px;
    height: 500px;
  }
  @media (min-width: 1200px) {
    width: 550px;
    height: 550px;
  } */
`;

export default function Galleries({ galleries }) {
  return (
    <>
      <GlobalStyle />
      <BurgerMenu />
      <Navbar />
      <StyledWrapper>
        {galleries.map((item) => (
          <a href={`/galleries/${item.id}`}>
            <CardGallery item={item["cover"]} title={item.title} />
          </a>
        ))}
      </StyledWrapper>
    </>
  );
}

export async function getServerSideProps() {
  const galleries = await fetchQuery("galleries?_sort=id:DESC");

  return {
    props: {
      galleries,
    },
  };
}

// {galleries.map((item) =>
//   item["gallery"].map((item) => (
//     <CardGallery item={item} url={"gallery"} />
//   ))
// )}
