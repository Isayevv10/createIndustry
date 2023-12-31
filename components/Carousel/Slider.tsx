"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "@/styles/components/_slider.scss";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";

const Slider = () => {
  return (
    <Swiper
      spaceBetween={30}
      effect={"coverflow"}
      slidesPerView={"auto"}
      grabCursor={true}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[EffectCoverflow, Pagination, Autoplay]}
    >
      <SwiperSlide>
        <Image
          src="/images/create.png"
          alt="img1"
          width={0}
          height={500}
          sizes="100vw"
          style={{ width: "100%" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/images/shoes2.png"
          alt="img2"
          width={0}
          height={500}
          sizes="100vw"
          style={{ width: "100%" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/images/shoes1.png"
          alt="img3"
          width={0}
          height={500}
          sizes="100vw"
          style={{ width: "100%" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/images/shoes3.png"
          alt="img4"
          width={0}
          height={500}
          sizes="100vw"
          style={{ width: "100%" }}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
