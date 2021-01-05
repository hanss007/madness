import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

export default function MySwiper() {
  const swiper = useSwiper({
    loop: true,
    nextButton: <RightIcon size="lg" />,
    prevButton: <LeftIcon size="lg" />,
  });

  return (
    <Swiper {...swiper} height={400}>
      <Swiper.Slide textAlign="center">
        <img
          style={{ maxWidth: "100%", maxHeight: "100%" }}
          src="https://images.unsplash.com/photo-1564460549828-f0219a31bf90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        />
      </Swiper.Slide>
      <Swiper.Slide textAlign="center">
        <img
          style={{ maxWidth: "100%", maxHeight: "100%" }}
          src="https://images.unsplash.com/photo-1575489272413-cb506258027e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        />
      </Swiper.Slide>
      <Swiper.Slide textAlign="center">
        <img
          style={{ maxWidth: "100%", maxHeight: "100%" }}
          src="https://images.unsplash.com/photo-1541959833400-049d37f98ccd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        />
      </Swiper.Slide>
    </Swiper>
  );
}
