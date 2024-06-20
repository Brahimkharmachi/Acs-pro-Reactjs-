import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./swipers.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Swiperr() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      loop={true}
      autoplay={true}
      spaceBetween={30}
      slidesPerView={5}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <img src="./carousel-footer/golden-tulip.webp" alt="Golden Tulip" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./carousel-footer/pfizer.webp" alt="pfizer" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./carousel-footer/gonser.webp" alt="gonser" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./carousel-footer/mediclean.webp" alt="mediclean" />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="./carousel-footer/fondation-tunisie.webp"
          alt="fondation tunisie"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./carousel-footer/sotep.webp" alt="sotep" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./carousel-footer/enda-inter.webp" alt="enda inter" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./carousel-footer/msb.webp" alt="msb" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./carousel-footer/afri.webp" alt="afri" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./carousel-footer/sea.webp" alt="sea" />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="./carousel-footer/carte-assurence.webp"
          alt="carte assurence"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./carousel-footer/slama.webp" alt="slama" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./carousel-footer/oradist.webp" alt="oradist" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./carousel-footer/union.webp" alt="union" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./carousel-footer/caveo.webp" alt="caveo" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./carousel-footer/bonna.webp" alt="bonna" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./carousel-footer/dhl.webp" alt="dhl" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./carousel-footer/marquardt.webp" alt="marquardt" />
      </SwiperSlide>
    </Swiper>
  );
}
