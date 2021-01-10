import Navbar from "../components/Navbar";
import styled from "styled-components";

const StyledWrapper = styled.div`
  padding: 40px 30px 30px 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ImageWrapper = styled.img`
  width: 200px;
  height: 140px;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  padding: 15px;
`;

const Title = styled.p`
  text-transform: uppercase;
  color: red;
`;

const Data = styled.span`
  color: black;
`;

const ContentText = styled.h2`
  font-size: 25px;
  padding: 0;
`;

const News = () => (
  <>
    <Navbar />
    <h1>Aktualnośći</h1>
    <StyledWrapper>
      <ImageWrapper
        src="https://www.bytom.pl/zdjecie/3,p1bivktnhd1pdq747a0lr0r18kc6.jpg"
        alt=""
      />
      <InnerWrapper>
        <Title>
          Turnieje <Data>/ 09.12.2020</Data>
        </Title>

        <ContentText>Mistrzostwa Ratowników Górniczych</ContentText>
        <a href="">wiecej</a>
      </InnerWrapper>
    </StyledWrapper>
  </>
);

export default News;
