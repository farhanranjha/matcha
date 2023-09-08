"use client";

import Card from "@/app/components/Card";
import cardPicture from "public/assets/cardPicture.png";
import Carousel from "react-spring-3d-carousel";
import uuidv4 from "uuid";
import { Component } from "react";
import { config } from "react-spring";

class MyCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goToSlide: "",
    };
  }
  slides = [
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
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  render() {
    return (
      <div style={{ width: "40%", height: "500px", margin: "0 auto" }}>
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius="10"
          animationConfig={config.gentle}
          showNavigation
        />
      </div>
    );
  }
}
export default MyCarousel;
