/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
// import "swiper/swiper.scss";
// import "swiper/components/pagination/pagination.scss";
// import "swiper/components/scrollbar/scrollbar.scss";

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
