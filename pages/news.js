import React, { Component } from "react";
import Navbar from "../components/Navbar";
import BurgerMenu from "../components/BurgerMenu";
import Card from "../components/News/Card";
import GlobalStyle from "../theme/GlobalStyle";
import styled from "styled-components";
import { fetchQuery } from "../utils";
import Head from "next/head";

const WrapperStyled = styled.div`
  position: relative;

  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    /* background-image: url("https://images.unsplash.com/photo-1531685250784-7569952593d2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1867&q=80");
    background-size: cover; */

    width: 100%;
    height: 100%;
    opacity: 0.3;
    z-index: -1;
  }
  @media (min-width: 320px) {
    height: 110vh;
  }
  @media (min-width: 640px) {
    height: 125vh;
  }
  @media (min-width: 800px) {
    height: 150vh;
  }
  @media (min-width: 1024px) {
    height: 160vh;
  }
  @media (min-width: 1200px) {
    height: 180vh;
  }
`;

export default function News({ items, url }) {
  console.log(items);
  return (
    <>
      <Head>
        <title>Madness</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <GlobalStyle />
      <Navbar />
      <BurgerMenu />
      <WrapperStyled>
        {items.map((item) => (
          <Card key={item.id} item={item} url={"items"} />
        ))}
      </WrapperStyled>
    </>
  );
}

export async function getServerSideProps() {
  const items = await fetchQuery("items?_limit=7&_sort=id:DESC");

  return {
    props: {
      items,
    },
  };
}
