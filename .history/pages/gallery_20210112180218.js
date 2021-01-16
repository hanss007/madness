import styled from "styled-components";
import Navbar from "../components/Navbar";
import GlobalStyle from "../theme/GlobalStyle";

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("https://cdn.pixabay.com/photo/2015/09/07/08/22/under-928246_1280.jpg");
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
