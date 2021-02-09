import React, { Component } from "react";
import Link from "next/link";
import styled, { css, keyframes } from "styled-components";
import { Article } from "@styled-icons/material-outlined/Article";
import { baseUrl } from "../../utils";

const StyledWrapper = styled.div`
  position: relative;
  top: 80px;

  opacity: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: transparent;
  @media (min-width: 320px) {
    padding: 10px 30px 20px 20px;
  }
  @media (min-width: 800px) {
    padding: 10px 30px 20px 100px;
  }
  @media (min-width: 1200px) {
    padding: 20px 30px 20px 180px;
  }
  @media (min-width: 1366px) {
    padding: 20px 30px 20px 220px;
  }
`;

const ImageWrapper = styled.img`
  width: 240px;
  height: 185px;
  border-radius: 5px;
  background-size: cover;
  /* @media (max-width: 1024px) {
    width: 200px;
    height: 170px;
  } */
  /* @media (min-width: 320px) {
    width: 100px;
    height: 60px;
  } */
  @media (min-width: 320px) {
    width: 100px;
    height: 90px;
  }
  @media (min-width: 460px) {
    width: 140px;
    height: 110px;
  }
  @media (min-width: 640px) {
    width: 160px;
    height: 130px;
  }
  @media (min-width: 800px) {
    width: 180px;
    height: 160px;
  }
  @media (min-width: 1024px) {
    width: 210px;
    height: 180px;
  }
  @media (min-width: 1200px) {
    width: 240px;
    height: 185px;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 20px;
  height: 185px;
  width: 900px;
  /* @media (max-width: 1366px) {
    width: 700px;
  }
  @media (max-width: 1200px) {
    width: 600px;
  }
  @media (max-width: 1024px) {
    width: 550px;
    height: 170px;
  } */
  @media (min-width: 320px) {
    width: 160px;
    height: 90px;
    padding-left: 10px;
  }
  @media (min-width: 460px) {
    width: 270px;
    height: 90px;
  }
  @media (min-width: 640px) {
    width: 420px;
    height: 120px;
    padding-left: 20px;
  }
  @media (min-width: 800px) {
    width: 400px;
    height: 150px;
  }
  @media (min-width: 1024px) {
    width: 700px;
    height: 170px;
  }
  @media (min-width: 1200px) {
    width: 730px;
    height: 175px;
  }
`;

const Title = styled.p`
  text-transform: uppercase;
  color: #fd5825;
  font-weight: 700;
  /* @media (max-width: 1024px) {
    font-size: 14px;
  } */

  @media (min-width: 320px) {
    font-size: 8px;
  }
  @media (min-width: 460px) {
    font-size: 10px;
  }

  @media (min-width: 800px) {
    font-size: 12px;
  }
  @media (min-width: 1024px) {
    font-size: 15px;
  }
  @media (min-width: 1200px) {
    font-size: 16px;
    margin-top: 5px;
  }
`;

const Data = styled.span`
  color: #222;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  height: 180px;
  /* @media (max-width: 1024px) {
    height: 170px;
  } */
  @media (min-width: 320px) {
    height: 65px;
  }
  @media (min-width: 640px) {
    height: 90px;
  }
  @media (min-width: 800px) {
    height: 90px;
  }
  @media (min-width: 1024px) {
    height: 110px;
  }
`;

const ContentText = styled.h2`
  font-size: 22px;
  color: #222;
  padding: 0;
  margin: 0;
  /* @media (max-width: 1024px) {
    font-size: 16px;
  } */
  @media (min-width: 320px) {
    font-size: 8px;
    width: 160px;
  }
  @media (min-width: 460px) {
    font-size: 10px;
    width: 260px;
  }
  @media (min-width: 640px) {
    font-size: 12px;
    width: 300px;
  }
  @media (min-width: 800px) {
    font-size: 15px;
    width: 300px;
  }
  @media (min-width: 1024px) {
    font-size: 18px;
    width: 550px;
  }
  @media (min-width: 1200px) {
    font-size: 20px;
    width: 600px;
  }
`;

const ContentExcerpt = styled.h4`
  color: #222;
  font-weight: 500;
  /* @media (max-width: 1024px) {
    font-size: 14px;
  } */
  @media (min-width: 320px) {
    font-size: 7px;
    width: 160px;
  }
  @media (min-width: 460px) {
    font-size: 9px;
    width: 250px;
  }
  @media (min-width: 640px) {
    font-size: 12px;
    width: 410px;
  }
  @media (min-width: 800px) {
    font-size: 12px;
    width: 350px;
  }
  @media (min-width: 1024px) {
    font-size: 14px;
    width: 650px;
  }
  @media (min-width: 1200px) {
    font-size: 16px;
    width: 750px;
  }
`;

const Button = styled.a`
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 14px;
  margin-left: 20px;
  border-bottom: 2px solid #fd5825;
  cursor: pointer;
  transition: color 0.2s ease;
  &:hover {
    background-color: #fd5825;
    color: white;
  }
  /* @media (max-width: 1024px) {
    font-size: 12px;
  } */
  @media (min-width: 320px) {
    font-size: 8px;
  }
  @media (min-width: 640px) {
    font-size: 10px;
  }
  @media (min-width: 800px) {
    font-size: 12px;
  }
  @media (min-width: 1024px) {
    font-size: 14px;
  }
`;

const MyArticle = styled(Article)`
  width: 25px;
  height: 25px;
  /* @media (max-width: 1024px) {
    width: 20px;
    height: 20px;
  } */
  @media (min-width: 320px) {
    width: 15px;
    height: 15px;
  }
  @media (min-width: 800px) {
    width: 20px;
    height: 20px;
  }
  @media (min-width: 1024px) {
    width: 25px;
    height: 25px;
  }
`;

const ContentButton = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 2px;
  @media (min-width: 320px) {
    margin-top: -2px;
  }
`;

const Card = ({ item }) => (
  <StyledWrapper>
    <ImgStyled src={item.image.url} alt="foto" />
    <InnerWrapper>
      <Title>
        {item.typ} <Data>/ {item.created}</Data>
      </Title>
      <ContentWrapper>
        <ContentText>{item.title}</ContentText>
        <ContentExcerpt>{item.excerpt}</ContentExcerpt>
      </ContentWrapper>
      <ContentButton>
        <MyArticle />

        <Link href={`/items/${item.id}`}>
          <Button>więcej</Button>
        </Link>
      </ContentButton>
    </InnerWrapper>
  </StyledWrapper>
);

export default Card;
