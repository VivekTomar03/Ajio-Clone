import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";

import { Scrollbar, Autoplay } from "swiper";
import { Box } from "@chakra-ui/react";

const SliderM1 = () => {
  return (
    <Box
    // _hover={{
    //   transform: "scale(1.03)",
    //   transition: "all 0.8s ease-in-out  ",
    //   cursor: "pointer",
    // }}
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
    >
      <SwiperSlide>
        <img
          src="https://assets.ajio.com/cms/AJIO/WEB/31032023-d-mhp-main-p2-differenceofopinion-eyebolgler-flat55extraupto35.jpg"
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
          src="	https://assets.ajio.com/cms/AJIO/WEB/31032023-d-mhp-main-p3-allensolly-vanheusen-min40.jpg"
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
          src="https://assets.ajio.com/cms/AJIO/WEB/31032023-d-mhp-main-p7-tommyhilfiger-markmaddox-upto70extra10.jpg"
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
          src="https://assets.ajio.com/cms/AJIO/WEB/D-MHP-TopBanner-AjioBdaySale-5080.gif"
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
          src="https://assets.ajio.com/cms/AJIO/WEB/31032023-d-mhp-main-p2-puma-redtape-min60.jpg"
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
          src="https://assets.ajio.com/cms/AJIO/WEB/31032023-d-mhp-main-p6-gas-scotch&soda-min40.jpg"
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
          src="https://assets.ajio.com/cms/AJIO/WEB/31032023-d-mhp-main-p4-johnplayers-netplay-starting499.jpg"
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

export default SliderM1