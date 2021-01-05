// Foobar.js
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

import Image from "next/image";
import { useRef } from "react";

SwiperCore.use([Navigation]);

export default function Foobar({ images }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section>
      <h2 className="mb-10">foobar</h2>

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        loop
        navigation={{
          prevEl: prevRef.current ? prevRef.current : undefined,
          nextEl: nextRef.current ? nextRef.current : undefined,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.update();
        }}
        breakpoints={{
          320: {
            slidesPerView: 5,
          },
          991: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
      </Swiper>
    </section>
  );
}
