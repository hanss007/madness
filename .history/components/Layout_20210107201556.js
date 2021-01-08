import Head from "next/head";
import Navbar from "./Navbar";
import Header from "./Header";
import News from "./News";
import Calendar from "./Calendar";
import Footer from "./Footer";
import styled from "styled-components";
import GlobalStyle from '../theme/GlobalStyle';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Layout = (props) => (
  <GlobalStyle/>
  <StyledWrapper>
    <Head>
      <title>Stowarzyszenie Madness</title>
    </Head>
    <Navbar />
    <Header />
    <News />
    <Calendar />
    <Footer />
  </StyledWrapper>
);

export default Layout;
