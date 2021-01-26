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
      spaceBetween={10}
      slidesPerView={3}
      navigation
      breakpoints={
        {
          // 1366: {
          //   width: 1200,
          //   spaceBetween: 10,
          //   slidesPerView: 3,
          // },
          // 1024: {
          //   width: 1024,
          //   spaceBetween: -90,
          //   slidesPerView: 3,
          // },
        }
      }
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
  console.log("new", news);
  return (
    <StyledWrapper>
      <MySwiper news={news} />
    </StyledWrapper>
  );
}
