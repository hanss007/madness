import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import Card from "./Card";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

const news = [
  {
    title: "Mistrzostwa Polski Górników i Przyjaciół",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
    imageNews:
      "https://cdn.pixabay.com/photo/2016/12/25/15/40/ball-1930189_1280.jpg",
    created: "1 day",
  },
  {
    title: "Lorem ipsum 2",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
    imageNews:
      "https://cdn.pixabay.com/photo/2016/11/29/02/05/audience-1866738_1280.jpg",
    created: "3 day",
  },
  {
    title: "Lorem ipsum 3",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
    imageNews:
      "https://cdn.pixabay.com/photo/2020/01/12/14/02/indoor-soccer-4760027_1280.jpg",
    created: "5 day",
  },
  {
    title: "Lorem ipsum 4",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
    imageNews:
      "https://cdn.pixabay.com/photo/2020/01/12/14/02/indoor-soccer-4760027_1280.jpg",
    created: "5 day",
  },
  {
    title: "Lorem ipsum 5",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
    imageNews:
      "https://cdn.pixabay.com/photo/2020/01/12/14/02/indoor-soccer-4760027_1280.jpg",
    created: "5 day",
  },
  {
    title: "Lorem ipsum 6",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
    imageNews:
      "https://cdn.pixabay.com/photo/2020/01/12/14/02/indoor-soccer-4760027_1280.jpg",
    created: "5 day",
  },
];

const StyledWrapper = styled.div`
  position: absolute;
  top: 55%;
  left: 0;

  width: 100vw;
  height: 570px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;

  overflow: hidden;
`;

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export const MySwiper = ({ title, content, created, imageNews }) => {
  return (
    <Swiper spaceBetween={240} slidesPerView={3} navigation>
      {news.map((item) => (
        <SwiperSlide>
          {
            <Card
              title={item.title}
              content={item.content}
              imageNews={item.imageNews}
              created={item.created}
            />
          }
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default function News() {
  return (
    <StyledWrapper>
      <MySwiper />
    </StyledWrapper>
  );
}
