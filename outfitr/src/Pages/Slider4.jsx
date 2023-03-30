import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Slider4.modules.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import { Box } from "@chakra-ui/react";

export default function Slider4() {
  return (
    <Box
      bgColor={"rgb(230, 180, 143)"}
      p={{ base: "1rem", md: "1rem", lg: "2rem" }}
      mt="-1rem"
      mb={{ base: "1rem", md: "1rem", lg: "2rem" }}
    >
      <Swiper
   
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 15,
          stretch: 4,
          depth: 100,
          modifier: 10,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Bestsellers-Menswestern-Starting299.jpg"
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.transition = "all 0.5s ease-in-out";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.transition = "all 0.5s ease-in-out";
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Bestsellers-womenswestern-Starting199.jpg"
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.transition = "all 0.5s ease-in-out";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.transition = "all 0.5s ease-in-out";
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Bestsellers-WomensEthnic-Starting249.jpg"
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.transition = "all 0.5s ease-in-out";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.transition = "all 0.5s ease-in-out";
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Bestsellers-Footwear-upto80.jpg"
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.transition = "all 0.5s ease-in-out";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.transition = "all 0.5s ease-in-out";
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Bestsellers-kidswear-starting129.jpg"
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.transition = "all 0.5s ease-in-out";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.transition = "all 0.5s ease-in-out";
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Bestsellers-accessories-starting179.jpg"
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.transition = "all 0.5s ease-in-out";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.transition = "all 0.5s ease-in-out";
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Bestsellers-DecorKitchen-upto80.jpg"
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.transition = "all 0.5s ease-in-out";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.transition = "all 0.5s ease-in-out";
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Bestsellers-MensEthnicwear-upto80.jpg.jpg"
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.transition = "all 0.5s ease-in-out";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.transition = "all 0.5s ease-in-out";
            }}
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
