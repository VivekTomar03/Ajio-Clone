

import { Box, Container } from "@chakra-ui/react";
import { Hovermenu } from "./Components/Hovermenu";
import NavbarBottom from "./Components/NavbarBottom";
import NavbarTop from "./Components/NavbarTop";
import Homepage from "./Pages/Homepage";





function App() {
  return (
  <Container maxW={"100%"} p={0} m={0}>
      <Box
        bgColor={"rgb(255, 255, 255)"}
        w={"100%"}
        top="0"
        left="0"
        mt="-.9rem"
        position="sticky"
        zIndex="100"
        boxShadow={"0px 0px 10px 0px rgba(0,0,0,0.75)"}
      >
        <NavbarTop />
        <NavbarBottom />
      </Box>
      <Homepage/>
     
    </Container>

  );
}

export default App;
