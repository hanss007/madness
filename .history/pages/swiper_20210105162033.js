import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const slides = [
  {
    title: "Mistrzostwa Polski Górników i Przyjaciół",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
    imageNews:
      "https://cdn.pixabay.com/photo/2016/12/25/15/40/ball-1930189_1280.jpg",
    created: "1 day",
  },
  {
    title: "Lorem ipsum",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
    imageNews:
      "https://cdn.pixabay.com/photo/2016/11/29/02/05/audience-1866738_1280.jpg",
    created: "3 day",
  },
  {
    title: "Lorem ipsum",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
    imageNews:
      "https://cdn.pixabay.com/photo/2020/01/12/14/02/indoor-soccer-4760027_1280.jpg",
    created: "5 day",
  },
];

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
      <CustomSwiper slides={[{ title: slide.title }]} />
    </div>
  );
}
