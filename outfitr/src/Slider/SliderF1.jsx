import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";

import { Scrollbar, Autoplay } from "swiper";
import { Box } from "@chakra-ui/react";

const SliderF1 = () => {
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
          src="https://assets.ajio.com/cms/AJIO/WEB/01042023-WHP-D-mainbanner-p2-fig-rio-under499.jpg"
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
          src="https://assets.ajio.com/cms/AJIO/WEB/01042023-WHP-D-mainbanner-p1-paydaysalebanner.gif"
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
          src="https://assets.ajio.com/cms/AJIO/WEB/01042023-WHP-D-mainbanner-p3-lafille-hautesauce-upto80%20(2).jpg"
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
          src="https://assets.ajio.com/cms/AJIO/WEB/01042023-WHP-D-mainbanner-p4-shoetopia-shezone-flat50-extraupto35.jpg"
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
          src="https://assets.ajio.com/cms/AJIO/WEB/01042023-WHP-D-mainbanner-p5-nike-adidas-min40.jpg"
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
          src="https://assets.ajio.com/cms/AJIO/WEB/01042023-WHP-D-mainbanner-p6-allensolly-vanheusen-min40.jpg"
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

export default SliderF1