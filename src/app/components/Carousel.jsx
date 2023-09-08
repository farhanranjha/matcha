"use client";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
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
          initialSlide={1}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={5}
          centeredSlides={true}
          loop={"infinite"}
          navigation
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
          <SwiperSlide>
            <Card
              img={cardPicture}
              name="F"
              review="I was tired of searching WebMD and other sites. I wanted to find honest sources and thoughts as to what I was going through. "
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              img={cardPicture}
              name="G"
              review="I was tired of searching WebMD and other sites. I wanted to find honest sources and thoughts as to what I was going through. "
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
