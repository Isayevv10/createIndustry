"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@/styles/components/_carousel.scss";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import { urlFor } from "@/app/lib/sanity";
import { v4 } from "uuid";
import { IImages } from "@/types/ProductTypes";

interface IImagesProps {
  pics: IImages[];
}
const CarouselSwiper = ({ pics }: IImagesProps) => {
  return (
    <div>
      {pics[0]?.image?.map((item: any, index: number) => {
        return (
          <div key={v4()}>
            <Image
              src={urlFor(item)!.url()!}
              alt={"shoes"}
              width={500}
              height={500}
              unoptimized={true}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CarouselSwiper;