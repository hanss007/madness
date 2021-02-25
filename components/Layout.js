import Navbar from "./Navbar";
import BurgerMenu from "./BurgerMenu";
import Header from "./Header";
import News from "./News/News";
import Calendar from "./Calendar";
import Gallery from "./Gallery";
import Footer from "./Footer";
import GlobalStyle from "../theme/GlobalStyle";

const Layout = ({ news }) => (
  <>
    <GlobalStyle />
    <Navbar />
    <BurgerMenu />
    <Header />
    <News news={news} url={"items"} />
    <Calendar />
    <Gallery />
    <Footer />
  </>
);

export default Layout;
