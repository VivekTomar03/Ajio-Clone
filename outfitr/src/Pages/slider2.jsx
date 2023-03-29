import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";

import { Scrollbar, Autoplay } from "swiper";
import { Box } from "@chakra-ui/react";

export default function Slider2({img1,img2}) {
  return (
    <Box
      _hover={{
        transform: "scale(1.03)",
        transition: "all 0.8s ease-in-out  ",
        cursor: "pointer",
      }}
      w={{ base: "100%", md: "100%" }}
      mt={{ base: "1rem", md: "1rem", lg: "2rem" }}
      mb={{ base: "1rem", md: "1rem", lg: "2rem" }}
      
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
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src={img1}
            alt="img"
            style={{
              width: "100%",
           
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img2}
            alt="img"
            style={{
              width: "100%",
            }}
          />
        </SwiperSlide>
        
      </Swiper>
    </Box>
  );
}
