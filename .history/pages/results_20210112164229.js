import styled from "styled-components";
import Navbar from "../components/Navbar";
import GlobalStyle from "../theme/GlobalStyle";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  background-color: #fd5825;
  padding: 10px;
  color: white;
  border-radius: 5px;
`;
const InnerWrapper = styled.div`
  display: flex;
`;
const ImageWrapper = styled.div`
  width: 350px;
  height: 350px;
  background-image: url("https://scontent.fpoz4-1.fna.fbcdn.net/v/t1.0-9/131033579_3692388594117845_8935158420715119533_o.jpg?_nc_cat=110&ccb=2&_nc_sid=8bfeb9&_nc_ohc=otZyR8vZPU4AX_5y37c&_nc_ht=scontent.fpoz4-1.fna&oh=9ce6b87fe7f79defed3839c772225db5&oe=602206D2");
  background-size: contain;
  background-repeat: no-repeat;
  margin-right: 30px;
`;
const ImageWrapper2 = styled.div`
  width: 350px;
  height: 350px;
  background-image: url("https://scontent.fpoz4-1.fna.fbcdn.net/v/t1.0-9/131673833_3695559647134073_5436611300717595420_o.jpg?_nc_cat=100&ccb=2&_nc_sid=8bfeb9&_nc_ohc=Xd5nnug_BJAAX9_7c_-&_nc_ht=scontent.fpoz4-1.fna&oh=b4b82c0d4d0a5d838463f0505d3a3edf&oe=6021D360");
  background-size: contain;
  background-repeat: no-repeat;
`;

const Results = () => (
  <>
    <GlobalStyle />
    <Navbar />
    <StyledWrapper>
      <Title>Wyniki Turniejów Stowarzyszenia Madness</Title>
      <InnerWrapper>
        <ImageWrapper />
        <ImageWrapper2 />
      </InnerWrapper>
    </StyledWrapper>
  </>
);

export default Results;
