import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper from "react-id-swiper";

const params = {
  effect: "cube",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
};

const Slider = () => {
  return (
    <Swiper {...params}>
      <div className="myslide">Slide #1</div>
      <div className="myslide">Slide #2</div>
      <div className="myslide">Slide #3</div>
      <div className="myslide">Slide #4</div>
      <div className="myslide">Slide #5</div>
    </Swiper>
  );
};

export default function MySwiper() {
  return (
    <div className="App">
      <Slider />
    </div>
  );
}

// export default function MySwiper() {
//   return (
//     <Swiper
//       spaceBetween={50}
//       slidesPerView={3}
//       navigation={{
//         prevEl: ".prev",
//         nextEl: ".next",
//       }}
//       pagination={{ clickable: true }}
//       scrollbar={{ draggable: true }}
//       onSwiper={(swiper) => console.log(swiper)}
//       onSlideChange={() => console.log("slide change")}
//     >
//       <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
//     </Swiper>
//   );
// }
