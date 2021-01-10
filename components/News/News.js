import React, { Component, useRef } from "react";
import styled from "styled-components";
import CardNews from "./CardNews";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { news } from "../../data/dataNews";

import { Swiper, SwiperSlide } from "swiper/react";

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
  return (
    <Swiper
      style={{ height: "570px" }}
      spaceBetween={10}
      slidesPerView={3}
      navigation
    >
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
