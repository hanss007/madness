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
        spaceBetween={16}
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
            slidesPerView: 1.5,
          },
          991: {
            slidesPerView: 3,
          },
        }}
      >
        {images.map((image, i) => (
          <SwiperSlide key={`slide_${i}`}>
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/${image.path}`}
              width="400"
              height="300"
            />
          </SwiperSlide>
        ))}
        <div className="flex flex-row justify-between mt-5 md:mt-10 md:px-8">
          <div ref={prevRef} className="cursor-pointer">
            <Image
              src="/images/icons/arrow-left-circle-orange.svg"
              height="62"
              width="62"
            />
          </div>
          <div ref={nextRef} className="cursor-pointer">
            <Image
              src="/images/icons/arrow-right-circle-orange.svg"
              height="62"
              width="62"
            />
          </div>
        </div>
      </Swiper>
    </section>
  );
}
