import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray_color to-transparent bottom-0 z-10" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img loading="lazy" src="../images/banner1.jpg" alt="" />
        </div>
        <div>
          <img loading="lazy" src="../images/banner2.jpg" alt="" />
        </div>
        <div>
          <img loading="lazy" src="../images/banner3.jpg" alt="" />
        </div>
        <div>
          <img loading="lazy" src="../images/banner4.jpg" alt="" />
        </div>
        <div>
          <img loading="lazy" src="../images/banner5.jpg" alt="" />
        </div>
        <div>
          <img loading="lazy" src="../images/banner6.jpg" alt="" />
        </div>
        <div>
          <img loading="lazy" src="../images/banner7.jpg" alt="" />
        </div>
        <div>
          <img loading="lazy" src="../images/banner8.jpg" alt="" />
        </div>
        <div>
          <img loading="lazy" src="../images/banner9.jpg" alt="" />
        </div>
        <div>
          <img loading="lazy" src="../images/banner3.jpg" alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
