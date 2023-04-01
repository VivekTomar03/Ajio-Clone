import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation } from "swiper";
import { Box } from "@chakra-ui/react";


const SliderF3 = () => {
  return (
    <Box>
    <Swiper
      slidesPerView={4}
      spaceBetween={15}
      // dir="rtl"
      navigation={true}
      modules={[Navigation]}
    >
     
      <SwiperSlide>
        <img
          src="https://assets.ajio.com/cms/AJIO/WEB/WHP-D-sponsorbrands-p7-ritukumar-upto65.jpg"
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
          src="https://assets.ajio.com/cms/AJIO/WEB/WHP-D-sponsorbrands-p8-marksfeespencer-min40-extra35.jpg"
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
          src="https://assets.ajio.com/cms/AJIO/WEB/WHP-D-sponsorbrands-p1-lavie-upto75.jpg"
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
          src="https://assets.ajio.com/cms/AJIO/WEB/WHP-D-sponsorbrands-p2-baggit-upto80.jpg"
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
          src="https://assets.ajio.com/cms/AJIO/WEB/WHP-D-sponsorbrands-p3-adidas-min50.jpg"
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
          src="https://assets.ajio.com/cms/AJIO/WEB/WHP-D-sponsorbrands-p4-zivame-upto65.jpg"
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
          src="https://assets.ajio.com/cms/AJIO/WEB/WHP-D-sponsorbrands-p5-melorra-starting2499.jpg"
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
          src="https://assets.ajio.com/cms/AJIO/WEB/WHP-D-sponsorbrands-p6-clovia-upto65.jpg"
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

export default SliderF3