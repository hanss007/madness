import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import BurgerMenu from "../../components/BurgerMenu";
import GlobalStyle from "../../theme/GlobalStyle";
import { fetchQuery } from "../../utils";
import Head from "next/head";

const StyledWrapper = styled.div`
  margin: 50px 10px 30px 10px;
`;

export default function GalleryId({ galleries }) {
  return (
    <>
      <Head>
        <title>Madness</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <GlobalStyle />
      <Navbar />
      <BurgerMenu />
      <StyledWrapper>
        <Masonry columsCount={3} gutter="15px">
          {galleries["gallery"].map((item) => (
            <img src={item.url} style={{ width: "100%", display: "block" }} />
          ))}
        </Masonry>
      </StyledWrapper>
    </>
  );
}

export async function getServerSideProps({ params }) {
  console.log({ params });
  const galleries = await fetchQuery("galleries", `${params.galleryId}`);
  return {
    props: {
      galleries,
    },
  };
}
