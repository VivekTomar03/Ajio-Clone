import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";

import { Scrollbar, Autoplay } from "swiper";
import { Box } from "@chakra-ui/react";

export default function Slider1() {
  return (
    <Box
      _hover={{
        transform: "scale(1.03)",
        transition: "all 0.8s ease-in-out  ",
        cursor: "pointer",
      }}
      w={{ base: "100%", md: "100%" }}
      mt={{ base: "0rem", md: "0rem", lg: ".2rem" }}
    >
      <Swiper
        scrollbar={{
          hide: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-BirthdayBash-5080.gif"
            alt="img"
            style={{
              width: "100%",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/28032023-UHP-D-Main-P3-Footwearcarnival-PumaCampus-Flat60.jpg"
            alt="img"
            style={{
              width: "100%",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/28032023-UHP-D-Main-P5-HiFashion-AXSuperdry-Min40Extra35.jpg"
            alt="img"
            style={{
              width: "100%",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/28032023-UHP-D-Main-P6-Baggitlavie-Upto75.jpg"
            alt="img"
            style={{
              width: "100%",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/28032023-UHP-D-Main-P7-DNMXTS-Under299.jpg"
            alt="img"
            style={{
              width: "100%",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/28032023-UHP-D-Main-P2-Puma-min40.jpg"
            alt="img"
            style={{
              width: "100%",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/28032023-UHP-D-Main-P4-FashorJompers-Flat60extraupto25.jpg"
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
