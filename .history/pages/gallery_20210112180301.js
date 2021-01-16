import styled from "styled-components";
import Navbar from "../components/Navbar";
import GlobalStyle from "../theme/GlobalStyle";

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
  background-size: contain;
`;

const Gallery = () => (
  <>
    <GlobalStyle />
    <Navbar />
    <StyledWrapper />
  </>
);

export default Gallery;
