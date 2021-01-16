import styled from "styled-components";
import Navbar from "../components/Navbar";
import GlobalStyle from "../theme/GlobalStyle";

const StyledWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-image: url("https://cdn.pixabay.com/photo/2015/09/07/08/22/under-928246_1280.jpg");
  background-size: cover;
`;

const Gallery = () => (
  <>
    <GlobalStyle />
    <Navbar />

    <StyledWrapper>
      <h1>Strona w budowie</h1>
    </StyledWrapper>
  </>
);

export default Gallery;
