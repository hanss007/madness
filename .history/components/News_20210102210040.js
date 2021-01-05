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
    imageNews: "/images/stadion.jpg",
    created: "1 day",
  },
];

const News = () => (
  <StyledWrapper>
    {news.map((item) => (
      <Card
        title={item.title}
        content={item.content}
        imageNews={item.imageNews}
        created={item.created}
      />
    ))}
  </StyledWrapper>
);

export default News;
