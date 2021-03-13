import styled from "styled-components";
import Navbar from "../../../components/Navbar";
import NavbarTeam from "../../../components/NavbarTeam";
import BurgerMenu from "../../../components/BurgerMenu";
import Round from "../../../components/Round";
import TableTeam from "../../../components/TableTeam";
import Footer from "../../../components/Footer";
import { tableZory } from "../../../data/tableZory";
import { allRoundZory } from "../../../data/allRoundZory";
import { linksZory } from "../../../data/links";
import GlobalStyle from "../../../theme/GlobalStyle";

const StyledWrapper = styled.div`
  margin: 70px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Title = styled.h1`
  color: #023047;
  /* margin-left: -52%; */
  /* margin-top: 60px; */
  padding: 10px;
  @media (min-width: 320px) {
    font-size: 20px;
    margin-left: -30px;
  }
  @media (min-width: 460px) {
    font-size: 24px;
  }
  @media (min-width: 640px) {
    font-size: 28px;
    margin-left: -30%;
  }
`;

const GamesZory = () => (
  <>
    <GlobalStyle />
    <BurgerMenu />
    <Navbar />
    <NavbarTeam links={linksZory} />
    <StyledWrapper>
      <Title>ŻALO - 2020/2021</Title>
      <TableTeam table={tableZory} />
      <Round allRound={allRoundZory} />
    </StyledWrapper>
    <Footer />
  </>
);
export default GamesZory;
