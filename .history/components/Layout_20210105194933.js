import Head from "next/head";
import Navbar from "./Navbar";
import Header from "./Header";
import News from "./News";
import Calendar from "./Calendar";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Layout = (props) => (
  <StyledWrapper>
    <Head>
      <title>Stowarzyszenie Madness</title>
    </Head>
    <Navbar />
    <Header />
    <News />
    <Calendar />
  </StyledWrapper>
);

export default Layout;
