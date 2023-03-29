import { Box } from "@chakra-ui/react";
import NavbarBottom from "./Components/NavbarBottom";
import NavbarTop from "./Components/NavbarTop";



function App() {
  return (
    <>
      <Box
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
      {/* <Homepage/> */}
    </>
  );
}

export default App;
