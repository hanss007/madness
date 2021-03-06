import styled from "styled-components";
import Navbar from "../../../components/Navbar";
import NavbarTeam from "../../../components/NavbarTeam";
import BurgerMenu from "../../../components/BurgerMenu";
import Players from "../../../components/Players";
import { zory } from "../../../data/playersList";
import { linksZory } from "../../../data/links";
import GlobalStyle from "../../../theme/GlobalStyle";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* background-color: rgba(245, 240, 237, 0.5); */
`;

const ImageTeam = styled.img`
  @media (min-width: 320px) {
    width: 250px;
    height: 180px;
  }
  @media (min-width: 500px) {
    width: 650px;
    height: 300px;
    margin-left: 210px;
  }
  @media (min-width: 640px) {
    width: 680px;
    height: 380px;
    margin-left: 80px;
  }
  @media (min-width: 800px) {
    margin: 0 auto 40px;
  }
  @media (min-width: 1024px) {
    width: 860px;
    height: 480px;
  }
  @media (min-width: 1200px) {
    width: 1000px;
    height: 500px;
  }
  @media (min-width: 1355px) {
    width: 1200px;
    height: 600px;
  }
`;

const Title = styled.h1`
  color: #023047;
  text-align: center;
  margin-top: 60px;
  @media (min-width: 320px) {
    font-size: 16px;
  }
  @media (min-width: 500px) {
    font-size: 28px;
    margin-left: 200px;
  }
  @media (min-width: 640px) {
    margin-left: 100px;
  }
  @media (min-width: 800px) {
    margin: 60px auto;
  }
  @media (min-width: 1200px) {
    font-size: 34px;
  }
  @media (min-width: 1355px) {
    font-size: 38px;
  }
`;

const PlayersZory = () => (
  <>
    <GlobalStyle />
    <BurgerMenu />
    <Navbar />
    <NavbarTeam links={linksZory} />
    <StyledWrapper>
      <Title>Multibiuro-Madness-KK Kwant</Title>

      <ImageTeam src="/images/zory.jpg" />

      <Players players={zory} />
    </StyledWrapper>
  </>
);
export default PlayersZory;
