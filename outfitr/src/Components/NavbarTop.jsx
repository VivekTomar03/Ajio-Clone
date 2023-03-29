import { Box, Container, Flex } from "@chakra-ui/react";
import React from "react";

const NavbarTop = () => {
  return (
    <Container maxW={"100%"}>
      <Flex w={["90%", "90%", "900%", "90%"]} m={4} gap={10} justify="flex-end">
        <Box
          fontSize={".9rem"}
          fontFamily="monospace"
          fontWeight="bold"
          cursor={"pointer"}
          opacity={0.7}
        >
          Sign In / Join OUTFITR
        </Box>
        <Box
          fontSize={".9rem"}
          fontFamily="monospace"
          fontWeight="bold"
          cursor={"pointer"}
          opacity={0.7}
        >
          Customer Care
        </Box>
        <Box
          fontSize={".9rem"}
          fontFamily="monospace"
          fontWeight="bold"
          backgroundColor={"black"}
          color={"white"}
          mt={-8}
          pt={8}
          pb={3}
          pl={5}
          pr={5}
          cursor={"pointer"}
        >
          Visit AdminPage
        </Box>
      </Flex>
    </Container>
  );
};

export default NavbarTop;
