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
import { scheduleZory } from "../../data/schedule";
import { sponsorsZory } from "../../data/sponsors";
import { tableZory } from "../../data/table";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
`;

export async function getServerSideProps() {
  const news = await fetchQuery("items?_limit=6&_sort=id:DESC");
  console.log("news on server", news);
  return {
    props: {
      news,
    },
  };
}

const HomeZory = ({ news }) => (
  <>
    <GlobalStyle />
    <BurgerMenu />
    <Navbar />
    <NavbarTeam name="ŻORY" />
    <Header />
    <News news={news} />
    <Wrapper>
      <CalendarTeam schedule={scheduleZory} />
      <Sponsors logo={sponsorsZory} />
    </Wrapper>
    <TableTeam table={tableZory} />
    <Footer />
  </>
);
export default HomeZory;
