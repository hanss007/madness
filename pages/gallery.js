import styled from "styled-components";
import Navbar from "../components/Navbar";
import GlobalStyle from "../theme/GlobalStyle";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-image: url("https://cdn.pixabay.com/photo/2015/09/07/08/22/under-928246_1280.jpg");
  background-size: cover;
  color: white;
  @media (max-width: 1200px) {
    width: 1200px;
    height: 1000px;
    background-position: center;
  }
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
