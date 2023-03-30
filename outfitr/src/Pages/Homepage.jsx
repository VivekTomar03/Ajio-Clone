import { Box, Image } from "@chakra-ui/react";
import React from "react";
import Slider1 from "./Slider1";
import Slider2 from "./slider2";
import Slider3 from "./Slider3";
import Slider4 from "./Slider4";
import Slider5 from "./Slider5";
import Slider6 from "./Slider6";
import Slider7 from "./Slider7";
import Slider8 from "./Slider8";
import { UpArrow } from "./UpArrow";

const Homepage = () => {
  return (
    <div
      style={{
        cursor: "pointer",
      }}
    >
      <UpArrow />
      <Slider1 />
      <Slider2
        img1={"https://assets.ajio.com/cms/AJIO/WEB/Citibank_1440x128-new.jpg"}
        img2={"https://assets.ajio.com/cms/AJIO/WEB/IDBI-1440x128-23.jpg"}
      />
      <Box>
        <Image
          src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-HitStyles-Sectionheader.jpg"
          alt="heading"
          w={{ base: "100%", md: "100%", lg: "100%" }}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.05)";
            e.target.style.transition = "all 0.5s ease-in-out";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.transition = "all 0.5s ease-in-out";
          }}
          pb=".2rem"
        />
      </Box>
      <Slider3 />
      <Box>
        <Image
          src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-FeatureCollection-SectionHeader.jpg"
          alt="heading"
          w={{ base: "100%", md: "100%", lg: "100%" }}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.05)";
            e.target.style.transition = "all 0.5s ease-in-out";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.transition = "all 0.5s ease-in-out";
          }}
          pb=".2rem"
        />
      </Box>
      <Slider2
        img1={"https://assets.ajio.com/cms/AJIO/WEB/1440x128-mobikwiknew.jpg"}
        img2={"https://assets.ajio.com/cms/AJIO/WEB/1440x128-Paytm-ggg.jpg"}
      />
      <Box>
        <Image
          src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Bestsellers-Sectionheader.jpg"
          alt="heading"
          w={{ base: "100%", md: "100%", lg: "100%" }}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.05)";
            e.target.style.transition = "all 0.5s ease-in-out";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.transition = "all 0.5s ease-in-out";
          }}
          pb=".2rem"
        />
      </Box>
      <Slider4 />
      <Box>
        <Image
          src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-AJIOExclusives.jpg"
          alt="heading"
          w={{ base: "100%", md: "100%", lg: "100%" }}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.04)";
            e.target.style.transition = "all 0.5s ease-in-out";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.transition = "all 0.5s ease-in-out";
          }}
          pb=".2rem"
        />
      </Box>
      <Slider5 />
      <Box>
        <Image
          src="https://assets.ajio.com/cms/AJIO/WEB/M-UHP-Discover%20Online%20Store-Section%20Header.jpg"
          alt="heading"
          w={{ base: "100%", md: "100%", lg: "100%" }}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.04)";
            e.target.style.transition = "all 0.5s ease-in-out";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.transition = "all 0.5s ease-in-out";
          }}
          pb=".2rem"
        />
        <Image
          src="https://assets.ajio.com/cms/AJIO/WEB/M-UHP-Discover%20Online%20Store-Ajio%20Gold.jpg"
          alt="heading"
          w={{ base: "100%", md: "100%", lg: "95%" }}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.04)";
            e.target.style.transition = "all 0.5s ease-in-out";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.transition = "all 0.5s ease-in-out";
          }}
          pb=".2rem"
          m="auto"
        />
      </Box>
      <Box>
        <Image
          src=" https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Aim%20For%20The%20Stars-Section%20Header.jpg"
          alt="heading"
          w={{ base: "100%", md: "100%", lg: "100%" }}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.04)";
            e.target.style.transition = "all 0.5s ease-in-out";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.transition = "all 0.5s ease-in-out";
          }}
          pb=".2rem"
        />
      </Box>
      <Slider6 />
      <Box>
        <Image
          src=" https://assets.ajio.com/cms/AJIO/WEB/D-UHP-For%20Lil%20Show%20Stealers%20-Section%20Header.jpg"
          alt="heading"
          w={{ base: "100%", md: "100%", lg: "100%" }}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.04)";
            e.target.style.transition = "all 0.5s ease-in-out";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.transition = "all 0.5s ease-in-out";
          }}
          pb=".2rem"
        />
      </Box>
      <Slider7 />
      <Box>
        <Image
          src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Explore%20The%20Brand-Verse-Section%20Header.jpg"
          alt="heading"
          w={{ base: "100%", md: "100%", lg: "100%" }}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.04)";
            e.target.style.transition = "all 0.5s ease-in-out";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.transition = "all 0.5s ease-in-out";
          }}
          pb=".2rem"
        />
      </Box>
      <Slider8
        img1={
          "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Explore%20The%20Brand-Verse-P1-Brands-40-70.jpg"
        }
        img2={
          "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Explore%20The%20Brand-Verse-P2-Brands-30-60.jpg"
        }
        img3={
          "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Explore%20The%20Brand-Verse-P3-Brands-40-70.jpg"
        }
        img4={
          "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Explore%20The%20Brand-Verse-P4-Brands-Min40.jpg"
        }
        img5={
          "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Explore%20The%20Brand-Verse-P5-Brands-Starting149.jpg"
        }
      />
      <Slider8
        img1={
          "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Explore%20The%20Brand-Verse-P6-Brands-Upto70.jpg"
        }
        img2={
          "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Explore%20The%20Brand-Verse-P7-Brands-Upto70.jpg"
        }
        img3={
          "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Explore%20The%20Brand-Verse-P8-Brands-Upto60.jpg"
        }
        img4={
          "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Explore%20The%20Brand-Verse-P9-Brands-Starting199.jpg"
        }
        img5={
          "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-BrandVerse-Arrow-Min50uu.jpg"
        }
      />
      <Slider8
        img1={
          "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Explore%20The%20Brand-Verse-P11-Brands-Upto70.jpg"
        }
        img2={
          "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Explore%20The%20Brand-Verse-P12-Brands-Min50.jpg"
        }
        img3={
          "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Explore%20The%20Brand-Verse-P13-Brands-Min40.jpg"
        }
        img4={
          "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Explore%20The%20Brand-Verse-P14-Brands-Upto40.jpg"
        }
        img5={
          "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Explore%20The%20Brand-Verse-P15-Brands-Min30.jpg"
        }
      />
      <Box>
        <Image
          mt={{ base: "1rem", md: "1rem", lg: "1rem" }}
          src="https://assets.ajio.com/cms/AJIO/WEB/190323-Discover%20Online%20Stores%20(D).jpg"
          alt="heading"
          w={{ base: "100%", md: "100%", lg: "100%" }}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.04)";
            e.target.style.transition = "all 0.5s ease-in-out";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.transition = "all 0.5s ease-in-out";
          }}
        />
        <Image
          src="https://assets.ajio.com/cms/AJIO/WEB/08032022-D-unisex-ajiocares-strip%20new%20d.jpg"
          alt="heading"
          w={{ base: "100%", md: "100%", lg: "100%" }}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.04)";
            e.target.style.transition = "all 0.5s ease-in-out";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.transition = "all 0.5s ease-in-out";
          }}
        />
      </Box>
    </div>
  );
};

export default Homepage;
