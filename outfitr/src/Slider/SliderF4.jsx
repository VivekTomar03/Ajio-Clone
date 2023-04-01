import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";

import { Scrollbar, Autoplay } from "swiper";
import { Box } from "@chakra-ui/react";

const SliderF4 = () => {
  return (
    <Box
    w={{ base: "100%", md: "100%" }}
    mt={{ base: "0rem", md: "0rem", lg: ".2rem" }}
  >
    <Swiper
      scrollbar={{
        hide: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Scrollbar]}
  
    >
      <SwiperSlide>
        <img
          src="https://assets.ajio.com/cms/AJIO/WEB/01042023-WHP-D-dailybanner-p5-aks-gulmoharjaipur-min50-75-extra30.jpg"
          alt="img"
          style={{
            width: "100%",
          }}
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
          src="https://assets.ajio.com/cms/AJIO/WEB/01042023-WHP-D-dailybanner-p1-marks&spencers-upto70.jpg"
          alt="img"
          style={{
            width: "100%",
          }}
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
          src="https://assets.ajio.com/cms/AJIO/WEB/01042023-WHP-D-dailybanner-p2-carltonlondon-everqupid-starting799.jpg"
          alt="img"
          style={{
            width: "100%",
          }}
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
          src="https://assets.ajio.com/cms/AJIO/WEB/01042023-WHP-D-dailybanner-p3-shoetopia-shezone-upto75.jpg"
          alt="img"
          style={{
            width: "100%",
          }}
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
          src="https://assets.ajio.com/cms/AJIO/WEB/01042023-WHP-D-dailybanner-p4-avaasa-svrnaa-under499.jpg"
          alt="img"
          style={{
            width: "100%",
          }}
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
  )
}

export default SliderF4