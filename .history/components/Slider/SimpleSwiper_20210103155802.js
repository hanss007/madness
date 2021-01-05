import Swiper from "react-id-swiper";
import Slide from "./Slide";

import { useEffect, useState, useCallback } from "react";

const SimpleSwiper = () => {
  const [swiper, setSwiper] = useState(null);

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  const renderItem = useCallback(
    ({ idx, content }) => <Slide content={content} key={`slide_${idx}`} />,
    []
  );

  useEffect(() => {
    let timeout;
    if (swiper !== null) {
      console.log(swiper);
      timeout = setTimeout(() => {
        swiper.update();
      }, 1000);
    }

    return function cleanup() {
      if (swiper !== null) {
        clearTimeout(timeout);
        swiper.destroy();
        console.log("Swiper destroied");
      }
    };
  }, [swiper]);

  // Add eventlisteners for swiper after initializing

  const params = {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
    getSwiper: setSwiper,
  };

  const slides = items.map(renderItem);
  // Try to replace {slides} with <div>Slide1</div> <div>Slide2</div> <div>Slide3</div> ...
  return (
    <>
      <Swiper {...params}>{slides}</Swiper>
      <button onClick={goPrev}>Prev</button>
      <button onClick={goNext}>Next</button>
    </>
  );
};

export default SimpleSwiper;
