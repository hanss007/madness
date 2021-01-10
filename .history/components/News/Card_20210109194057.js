import styled from "styled-components";
import { Article } from "@styled-icons/material-outlined/Article";

const StyledWrapper = styled.div`
  padding: 40px 30px 30px 150px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
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
  color: #fdefe5;
  font-weight: 700;
`;

const Data = styled.span`
  color: black;
`;

const ContentText = styled.h2`
  font-size: 25px;
  padding: 0;
  margin: 0;
`;

const Button = styled.a`
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 14px;
  margin-left: 15px;
  border-bottom: 2px solid red;
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
  </StyledWrapper>
);

export default Card;
