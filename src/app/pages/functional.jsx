"use client";

import Card from "@/app/components/Card";
import cardPicture from "public/assets/cardPicture.png";
import Carousel from "react-spring-3d-carousel";
import uuidv4 from "uuid";
import { config } from "react-spring";
import { useEffect, useState } from "react";

function MyCarousel() {
  const [goToSlide, setGoToSlide] = useState("");
  useEffect(() => {
    console.log(
      document
        .getElementsByClassName("css-1fzpoyk")[0]
        .outerHTML.includes("z-index: 0")
    );
  }, []);
  const slides = [
    {
      key: uuidv4,
      content: (
        <Card
          img={cardPicture}
          name="A"
          review="I was tired of searching WebMD and other sites. I wanted to find honest sources and thoughts as to what I was going through. "
        />
      ),
    },
    {
      key: uuidv4,
      content: (
        <Card
          img={cardPicture}
          name="A"
          review="I was tired of searching WebMD and other sites. I wanted to find honest sources and thoughts as to what I was going through. "
        />
      ),
    },
    {
      key: uuidv4,
      content: (
        <Card
          img={cardPicture}
          name="A"
          review="I was tired of searching WebMD and other sites. I wanted to find honest sources and thoughts as to what I was going through. "
        />
      ),
    },
    {
      key: uuidv4,
      content: (
        <Card
          img={cardPicture}
          name="A"
          review="I was tired of searching WebMD and other sites. I wanted to find honest sources and thoughts as to what I was going through. "
        />
      ),
    },
    {
      key: uuidv4,
      content: (
        <Card
          img={cardPicture}
          name="A"
          review="I was tired of searching WebMD and other sites. I wanted to find honest sources and thoughts as to what I was going through. "
        />
      ),
    },
  ].map((slide, index) => ({
    ...slide,
    onClick: () => setGoToSlide(index),
  }));

  return (
    <div style={{ width: "40%", height: "500px", margin: "0 auto" }}>
      <Carousel
        slides={slides}
        goToSlide={goToSlide}
        offsetRadius="10"
        animationConfig={config.gentle}
        showNavigation
      />
    </div>
  );
}

export default MyCarousel;
