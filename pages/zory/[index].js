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

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  position: relative;
  background-image: url("/images/build.png");
  background-size: cover;
  color: white;
  @media (min-width: 320px) {
    width: 320px;
    height: 320px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
  }
  @media (min-width: 460px) {
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
  }
`;

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
