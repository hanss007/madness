import styled from "styled-components";
import Navbar from "../components/Navbar";
import GlobalStyle from "../theme/GlobalStyle";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;

  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url("https://images.unsplash.com/photo-1531685250784-7569952593d2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1867&q=80");
    background-size: cover;

    width: 100%;
    height: 110%;
    opacity: 0.3;
    z-index: -1;
  }
`;
const Title = styled.h1`
  background-color: #fd5825;
  padding: 10px;
  color: white;
  border-radius: 5px;
  margin-top: 50px;
`;
const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 85px;
  margin-top: 40px;
`;
const ImageWrapper = styled.div`
  width: 350px;
  height: 350px;
  background-image: url("https://scontent.fpoz4-1.fna.fbcdn.net/v/t1.0-9/131033579_3692388594117845_8935158420715119533_o.jpg?_nc_cat=110&ccb=2&_nc_sid=8bfeb9&_nc_ohc=otZyR8vZPU4AX_5y37c&_nc_ht=scontent.fpoz4-1.fna&oh=9ce6b87fe7f79defed3839c772225db5&oe=602206D2");
  background-size: contain;
  background-repeat: no-repeat;
  margin-right: 30px;
`;

const Results = () => (
  <>
    <GlobalStyle />
    <Navbar />
    <StyledWrapper>
      <Title>Wyniki Turniejów Stowarzyszenia Madness</Title>
      <InnerWrapper>
        <ImageWrapper />
        <ImageWrapper />
        <ImageWrapper />
        <ImageWrapper />
        <ImageWrapper />
        <ImageWrapper />
      </InnerWrapper>
    </StyledWrapper>
  </>
);

export default Results;
