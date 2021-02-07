import React, { Component, useRef } from "react";
import styled, { css } from "styled-components";
import CardNews from "./CardNews";
import { fetchQuery } from "../../utils";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const StyledWrapper = styled.div`
  position: relative;

  top: -110px;
  width: 90%;
  height: 620px;
  margin: 0 auto;
  background-color: transparent;
  z-index: 9999;
`;

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export const MySwiper = ({ news }) => {
  return (
    <Swiper
      style={{ height: "610px" }}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      breakpoints={{
        460: {
          spaceBetween: 40,
          slidesPerView: 1,
        },
        768: {
          spaceBetween: 0,
          slidesPerView: 2,
        },
        800: {
          spaceBetween: 2,
          slidesPerView: 3,
        },
        1024: {
          spaceBetween: -2,
          slidesPerView: 3,
        },
        1200: {
          spaceBetween: -5,
          slidesPerView: 3,
        },
      }}
    >
      {news.map((item, i) => (
        <SwiperSlide>
          {({ isNext }) => {
            return <CardNews isActive={isNext} key={item.id} item={item} />;
          }}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default function News({ news }) {
  return (
    <StyledWrapper>
      <MySwiper news={news} />
    </StyledWrapper>
  );
}

// news.map((item) => item).sort((a, b) => b.id - a.id);
