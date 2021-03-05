import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import BurgerMenu from "../../components/BurgerMenu";
import GlobalStyle from "../../theme/GlobalStyle";
import { fetchQuery } from "../../utils";

const StyledWrapper = styled.div`
  margin-top: 50px;
`;

export default function GalleryId({ galleries }) {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <BurgerMenu />
      <StyledWrapper>
        <Masonry columsCount={3} gutter="20px">
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
