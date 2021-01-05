import React from "react";
import styled from "styled-components";
import Card from "./Card";

const StyledWrapper = styled.div`
  width: 100vw;
  height: 570px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  justify-content: space-center;
  background-color: #252525;
  overflow: hidden;
`;

const news = [
  {
    title: "React on my mind",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
    imageNews:
      "https://cdn.pixabay.com/photo/2017/05/24/11/40/los-angeles-2340323_1280.jpg",
    created: "1 day",
  },
];

const News = () => (
  <StyledWrapper>
    <Card />
    <Card />
    <Card />
  </StyledWrapper>
);

export default News;
