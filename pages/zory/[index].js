import styled from "styled-components";
import { fetchQuery } from "../../utils";
import BurgerMenu from "../../components/BurgerMenu";
import GlobalStyle from "../../theme/GlobalStyle";
import Navbar from "../../components/Navbar";
import NavbarTeam from "../../components/NavbarTeam";

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

const Title = styled.h1`
  color: black;
  position: absolute;
  text-align: center;
  top: -120px;
`;

export async function getServerSideProps() {
  const news = await fetchQuery("items");
  console.log("news on server", news);
  return {
    props: {
      news,
    },
  };
}

const HomeZory = () => (
  <>
    <GlobalStyle />
    <BurgerMenu />
    <Navbar />
    <NavbarTeam />
    <StyledWrapper>
      <Title>Strona w budowie</Title>
    </StyledWrapper>
  </>
);
export default HomeZory;
