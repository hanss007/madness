import React from "react";
import styled from "styled-components";
import { fetchQuery } from "../../utils";
import BurgerMenu from "../../components/BurgerMenu";
import GlobalStyle from "../../theme/GlobalStyle";
import Navbar from "../../components/Navbar";
import NavbarTeam from "../../components/NavbarTeam";
import Header from "../../components/Header";
import News from "../../components/News/News";
import Footer from "../../components/Footer";
import CalendarTeam from "../../components/CalendarTeam";
import Sponsors from "../../components/Sponsors";
import TableTeam from "../../components/TableTeam";
import ButtonTable from "../../components/ButtonTable";
import { scheduleZory } from "../../data/schedule";
import { sponsorsZory } from "../../data/sponsors";
import { tableZory } from "../../data/tableZory";
import { linksZory } from "../../data/links";
import Head from "next/head";

const Wrapper = styled.div`
  margin-top: 45px;
  @media (min-width: 320px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
`;

export async function getServerSideProps() {
  const news = await fetchQuery("zory-news?_limit=6&_sort=id:DESC");
  console.log("news on server", news);
  return {
    props: {
      news,
    },
  };
}

const HomeZory = ({ news }) => (
  <>
    <Head>
      <title>Madness-Żory</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <GlobalStyle />
    <BurgerMenu />
    <Navbar />
    <NavbarTeam links={linksZory} />
    <Header />
    <News news={news} url={"zory-news"} />
    <Wrapper>
      <CalendarTeam schedule={scheduleZory} />
      <Sponsors logo={sponsorsZory} />
    </Wrapper>
    <TableTeam
      table={tableZory.slice(0, 9)}
      nameTeam={"MULTIBIURO-MADNESS-KK KWANT"}
    />
    <ButtonTable />
    <Footer />
  </>
);
export default HomeZory;
