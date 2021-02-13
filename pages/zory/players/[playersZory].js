import styled from "styled-components";
import Navbar from "../../../components/Navbar";
import NavbarTeam from "../../../components/NavbarTeam";
import BurgerMenu from "../../../components/BurgerMenu";
import Players from "../../../components/Players";
import TableTeam from "../../../components/TableTeam";
import { zory } from "../../../data/playersList";
import { tableZory } from "../../../data/table";
import GlobalStyle from "../../../theme/GlobalStyle";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: rgba(245, 240, 237, 0.5);
`;

const ImageTeam = styled.img`
  width: 1200px;
  height: 600px;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  color: #023047;
  text-align: center;
  margin-top: 60px;
`;

const PlayersZory = () => (
  <>
    <GlobalStyle />
    <BurgerMenu />
    <Navbar />
    <NavbarTeam name="ŻORY" />
    <StyledWrapper>
      <Title>Multibiuro-Madness-KK Kwant</Title>

      <ImageTeam src="/images/zory.jpg" />

      <Players players={zory} />
    </StyledWrapper>
  </>
);
export default PlayersZory;
