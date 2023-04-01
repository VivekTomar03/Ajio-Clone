import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation } from "swiper";
import { Box } from "@chakra-ui/react";


const SliderM3 = () => {
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
          src="https://assets.ajio.com/cms/AJIO/WEB/D-MHP-SponsoredBrands-levis-flat50extra10.jpg"
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
          src="	https://assets.ajio.com/cms/AJIO/WEB/D-MHP-SponsoredBrands-marks&spencer-min40extra35.jpg"
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
          src="https://assets.ajio.com/cms/AJIO/WEB/D-MHP-SponsoredBrands-adidas-4060.jpg"
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
          src="	https://assets.ajio.com/cms/AJIO/WEB/D-MHP-SponsoredBrands-jack&jones-5070.jpg"
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
          src="https://assets.ajio.com/cms/AJIO/WEB/D-MHP-SponsoredBrands-spykar-4070--.jpg"
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
          src="https://assets.ajio.com/cms/AJIO/WEB/D-MHP-SponsoredBrands-fossil-min40.jpg"
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
          src="	https://assets.ajio.com/cms/AJIO/WEB/D-MHP-SponsoredBrands-fcuk-4080.jpg"
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
          src="https://assets.ajio.com/cms/AJIO/WEB/D-MHP-SponsoredBrands-portico-upto60.jpg"
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

export default SliderM3