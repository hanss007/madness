import Head from "next/head";
import Navbar from "./Navbar";
import Header from "./Header";
import News from "./News";
import Calendar from "./Calendar";
import Gallery from "./Gallery";
import Footer from "./Footer";
import styled from "styled-components";
import GlobalStyle from "../theme/GlobalStyle";

const Layout = (props) => (
  <>
    <GlobalStyle />
    <Head>
      <title>Stowarzyszenie Madness</title>
    </Head>
    <Navbar />
    {/* <Header />
    <News />
    <Calendar />
    <Gallery />
    <Footer /> */}
  </>
);

export default Layout;
