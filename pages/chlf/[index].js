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
import { scheduleChlf } from "../../data/scheduleChlf";
import { sponsorsChlf } from "../../data/sponsors";
import { tableChlf } from "../../data/tableChlf";
import { linksChlf } from "../../data/links";

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
  const news = await fetchQuery("chlf-news?_limit=6&_sort=id:DESC");
  console.log("news on server", news);
  return {
    props: {
      news,
    },
  };
}

const HomeChlf = ({ news }) => (
  <>
    <GlobalStyle />
    <BurgerMenu />
    <Navbar />
    <NavbarTeam links={linksChlf} />
    <Header />
    <News news={news} url={"chlf-news"} />
    <Wrapper>
      <CalendarTeam schedule={scheduleChlf} />
      <Sponsors logo={sponsorsChlf} />
    </Wrapper>
    <TableTeam table={tableChlf.slice(0, 7)} nameTeam={"Madness"} />
    <ButtonTable />
    <Footer />
  </>
);
export default HomeChlf;
