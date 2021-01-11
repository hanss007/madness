import styled, { css } from "styled-components";
import { Article } from "@styled-icons/material-outlined/Article";

const ImageBacground = styled.div`
  background-image: url("https://img.freepik.com/vector-gratis/fondo-futbol-dibujado-mano_1176-68.jpg?size=626&ext=jpg");
  background-size: contain;
`;

const StyledWrapper = styled.div`
  position: relative;
  padding: 20px 30px 30px 250px;
  opacity: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  background-color: transparent;
`;

const ImageWrapper = styled.img`
  width: 200px;
  height: 140px;
  border-radius: 8px;
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
  color: #fd5825;
  font-weight: 700;
`;

const Data = styled.span`
  color: #222;
`;

const ContentText = styled.h2`
  font-size: 25px;
  color: #222;
  padding: 0;
  margin: 0;
`;

const Button = styled.a`
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 14px;
  margin-left: 15px;
  border-bottom: 2px solid #fd5825;
  cursor: pointer;
  transition: background-color 0.4s ease-out;

  &:hover {
    background-color: #fd5825;
    color: white;
  }
`;

const MyArticle = styled(Article)`
  width: 25px;
  height: 25px;
`;

const ContentButton = styled.div`
  display: fex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 40px;
`;

const Card = ({ title, content, imageNews, data, type }) => (
  <StyledWrapper>
    <ImageWrapper src={imageNews} alt="" />
    <InnerWrapper>
      <Title>
        {type} <Data>/ {data}</Data>
      </Title>

      <ContentText>{title}</ContentText>
      <ContentButton>
        <MyArticle />
        <Button href="">więcej</Button>
      </ContentButton>
    </InnerWrapper>
    <ImageBacground />
  </StyledWrapper>
);

export default Card;
