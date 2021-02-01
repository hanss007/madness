import Head from "next/head";
import Navbar from "./Navbar";
import BurgerMenu from "./BurgerMenu";
import Header from "./Header";
import News from "./News/News";
import Calendar from "./Calendar";
import Gallery from "./Gallery";
import Footer from "./Footer";
import styled from "styled-components";
import GlobalStyle from "../theme/GlobalStyle";

const Layout = ({ news }) => (
  <>
    <GlobalStyle />
    <Navbar />
    <BurgerMenu />
    <Header />
    <News news={news} />
    <Calendar />
    <Gallery />
    <Footer />
  </>
);

export default Layout;
