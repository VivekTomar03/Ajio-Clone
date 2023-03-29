import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";

import { Scrollbar, Autoplay } from "swiper";
import { Box } from "@chakra-ui/react";

export default function Slider3() {
  return (
    <Box
      w={{ base: "100%", md: "100%" }}
      mt={{ base: "0rem", md: "0rem", lg: ".2rem" }}

      _hover={{
        transform: "scale(1.03)",
        transition: "all 0.8s ease-in-out  ",
        cursor: "pointer",
      }}
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
            src="https://assets.ajio.com/cms/AJIO/WEB/29032023-UHP-D-Top-P2-MnS-Min40Extra35.jpg"
            alt="img"
            style={{
              width: "100%",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/29032023-UHP-D-Top-P3-PumaSkechers-Min40.jpg"
            alt="img"
            style={{
              width: "100%",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/29032023-UHP-D-Top-P4-Activewear-TSPerformax-Starting299.jpg"
            alt="img"
            style={{
              width: "100%",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/29032023-UHP-D-Top-P5-DealsLikeNeverBefore-Min60.jpg"
            alt="img"
            style={{
              width: "100%",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/29032023-UHP-D-Top-P6-Western-TIGCJP-Flat60.jpg"
            alt="img"
            style={{
              width: "100%",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/29032023-UHP-D-Top-P7-SmartFits-gantMnS-Min40Extra35.jpg"
            alt="img"
            style={{
              width: "100%",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/29032023-UHP-D-Top-P1-Casuals-DennislingoGulmoharJiapur-Min60.jpg"
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
