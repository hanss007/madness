import styled from "styled-components";
import Navbar from "../../../components/Navbar";
import NavbarTeam from "../../../components/NavbarTeam";
import BurgerMenu from "../../../components/BurgerMenu";
import Round from "../../../components/Round";
import TableTeam from "../../../components/TableTeam";
import Footer from "../../../components/Footer";
import { tableZory } from "../../../data/table";

import GlobalStyle from "../../../theme/GlobalStyle";

const StyledWrapper = styled.div`
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const ImageTeam = styled.img`
  width: 1200px;
  height: 600px;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  color: #023047;
  margin-left: -52%;
  margin-top: 60px;
  padding: 10px;
`;

const GamesZory = () => (
  <>
    <GlobalStyle />
    <BurgerMenu />
    <Navbar />
    <NavbarTeam name="ŻORY" />
    <StyledWrapper>
      <Title>ŻALO - 2020/2021</Title>
      <TableTeam table={tableZory} />
      <Round />
    </StyledWrapper>
    <Footer />
  </>
);
export default GamesZory;
