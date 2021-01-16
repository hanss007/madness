import styled from "styled-components";
import Navbar from "../components/Navbar";
import GlobalStyle from "../theme/GlobalStyle";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Results = () => (
  <>
    <GlobalStyle />
    <Navbar />
    <StyledWrapper>
      <h1>Wyniki Turniejów Stowarzyszenia Madness</h1>
    </StyledWrapper>
  </>
);

export default Results;
