"use client";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Keyboard,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import cardPicture from "public/assets/cardPicture.png";

import Card from "./Card";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect, useState } from "react";

export default function Carousel() {
  register();

  return (
    <>
      <div className=" m-auto mt-10 p-10">
        <Swiper
          //slidesPerView={5}
          breakpoints={{
            // when window width is >= 640px
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 0,
            },
          }}
          spaceBetween={50}
          centeredSlides={true}
          //loop={true}
          navigation={true}
          keyboard={{
            enabled: true,
          }}
          modules={[Keyboard, Navigation, Pagination, Scrollbar, A11y]}
        >
          <SwiperSlide>
            <Card
              img={cardPicture}
              name="A"
              review="I was tired of searching WebMD and other sites. I wanted to find honest sources and thoughts as to what I was going through. "
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              img={cardPicture}
              name="B"
              review="I was tired of searching WebMD and other sites. I wanted to find honest sources and thoughts as to what I was going through. "
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              img={cardPicture}
              name="C"
              review="I was tired of searching WebMD and other sites. I wanted to find honest sources and thoughts as to what I was going through. "
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              img={cardPicture}
              name="D"
              review="I was tired of searching WebMD and other sites. I wanted to find honest sources and thoughts as to what I was going through. "
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              img={cardPicture}
              name="E"
              review="I was tired of searching WebMD and other sites. I wanted to find honest sources and thoughts as to what I was going through. "
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
