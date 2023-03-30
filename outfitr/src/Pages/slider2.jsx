import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";

import { Scrollbar, Autoplay } from "swiper";
import { Box } from "@chakra-ui/react";

export default function Slider2({ img1, img2 }) {
  return (
    <Box
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
      >
        <SwiperSlide>
          <img
            src={img1}
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
            src={img2}
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
  );
}
