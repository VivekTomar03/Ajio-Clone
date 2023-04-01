import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation } from "swiper";
import { Box } from "@chakra-ui/react";

const SliderF5 = () => {
  return (
    <Box
    bgColor={"rgb(241, 193, 57)"}
    mt={-1}
    mb={1}
    >
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        // dir="rtl"
        navigation={true}
        modules={[Navigation]}
      >
        <SwiperSlide>
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/WHP-D-bestdeals-p1-under399d.jpg"
            alt=""
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
            src="https://assets.ajio.com/cms/AJIO/WEB/WHP-D-bestdeals-p7-flip-flops&slippers.jpg"
            alt=""
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
            src="https://assets.ajio.com/cms/AJIO/WEB/WHP-D-bestdeals-p8-socks&caps.jpg"
            alt=""
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
            src="https://assets.ajio.com/cms/AJIO/WEB/WHP-D-bestdeals-p2-t-shirts.jpg"
            alt=""
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
            src="https://assets.ajio.com/cms/AJIO/WEB/WHP-D-bestdeals-p9-belts.jpg"
            alt=""
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
            src="https://assets.ajio.com/cms/AJIO/WEB/WHP-D-bestdeals-p14-lingeriesetsaza.jpg"
            alt=""
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
            src="https://assets.ajio.com/cms/AJIO/WEB/WHP-D-bestdeals-p6-hairaccessories.jpg"
            alt=""
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
            src="https://assets.ajio.com/cms/AJIO/WEB/WHP-D-bestdeals-p4-topvds.jpg"
            alt=""
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

export default SliderF5