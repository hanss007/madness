import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export const CustomSwiper = ({ slides }) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {slides.map((slide) => (
        <SwiperSlide>{slide.title}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default function IndexPage() {
  return (
    <div>
      Hello World.{" "}
      <Link href="/about">
        <a>About</a>
      </Link>
      <CustomSwiper slides={[{ title: "test" }]} />
    </div>
  );
}
