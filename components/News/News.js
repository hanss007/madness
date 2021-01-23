import React, { Component, useRef } from "react";
import styled from "styled-components";
import CardNews from "./CardNews";
import { fetchQuery } from "../../utils";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const StyledWrapper = styled.div`
  position: relative;
  top: -160px;
  width: 1200px;
  height: 560px;
  margin: 0 auto;
  background-color: transparent;
`;

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export const MySwiper = ({ news }) => {
  return (
    <Swiper
      style={{ height: "610px" }}
      spaceBetween={10}
      slidesPerView={3}
      navigation
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
