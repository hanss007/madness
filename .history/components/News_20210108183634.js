import React, { Component, useRef } from "react";
import styled from "styled-components";
import CardNews from "./CardNews";
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
  position: relative;
  top: -160px;
  width: 1200px;
  height: 570px;
  margin: 0 auto;
  background-color: transparent;
`;

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export const MySwiper = ({ title, content, created, imageNews }) => {
  const swiperRef = useRef(null);
  console.log("swiper".swiperRef.current);
  return (
    <Swiper spaceBetween={10} slidesPerView={3} navigation ref={swiperRef}>
      {news.map((item, i) => (
        <SwiperSlide>
          {({ isNext }) => {
            return (
              <CardNews
                isActive={isNext}
                title={item.title}
                content={item.content}
                imageNews={item.imageNews}
                created={item.created}
              />
            );
          }}
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
