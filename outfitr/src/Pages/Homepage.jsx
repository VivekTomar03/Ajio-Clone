import { Box, Image } from "@chakra-ui/react";
import React from "react";
import Slider1 from "./Slider1";
import Slider2 from "./slider2";
import Slider3 from "./Slider3";
import { UpArrow } from "./UpArrow";

const Homepage = () => {
  return (
    <div>
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
          _hover={{
            transform: "scale(1.03)",
            transition: "all 0.8s ease-in-out",
            cursor: "pointer",
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
          _hover={{
            transform: "scale(1.03)",
            transition: "all 0.8s ease-in-out",
            cursor: "pointer",
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
          _hover={{
            transform: "scale(1.03)",
            transition: "all 0.8s ease-in-out",
            cursor: "pointer",
          }}
          
          pb=".2rem"
        />
      </Box>
    </div>
  );
};

export default Homepage;
