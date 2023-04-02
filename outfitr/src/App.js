
import { Box, Container, Image } from "@chakra-ui/react";
import Footer from "./Components/Footer";
import { Hovermenu } from "./Components/Hovermenu";
import NavbarBottom from "./Components/NavbarBottom";
import NavbarTop from "./Components/NavbarTop";
import AllRoute from "./MainRoute/AllRoute";

import { useLocation } from "react-router-dom";
import React from "react";






function App() {




  let location=useLocation()
  return (
    <>
    {location.pathname!=="/payment"?
  <Container maxW={"100%"} p={0} m={0}>
      <Box
        bgColor={"rgb(255, 255, 255)"}
        w={"100%"}
        top="0"
        left="0"
        mt="-.9rem"
        position="sticky"
        zIndex="10"
        boxShadow={"0px 0px 10px 0px rgba(0,0,0,0.75)"}
      >
        <NavbarTop />
        <NavbarBottom />
      </Box>
       <AllRoute/>
      <Box style={{ cursor: "pointer" }} >
        <Image
          pb={{ base: "1rem", md: "1rem", lg: "1rem" }}
          src="/care.png"
          alt="heading"
          w={{ base: "100%", md: "100%", lg: "100%" }}
        />
        <Footer />
      </Box>


    </Container>:
    <AllRoute/>}
    </>

  );
}

export default App;
