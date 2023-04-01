import { Box, Container, Flex } from "@chakra-ui/react";
import React from "react";
import Login from "../Pages/Login";
import { Link } from "react-router-dom";
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
          <Login /> / Join OUTFITR
        </Box>
        <Link to={"/mensproduct"}>
        <Box
          fontSize={".9rem"}
          fontFamily="monospace"
          fontWeight="bold"
          cursor={"pointer"}
          opacity={0.7}
          mt={2}
        >
          Customer Care
        </Box>
        </Link>
        <Link to={"/adminPage"}>
          <Box
            fontSize={".9rem"}
            fontFamily="monospace"
            fontWeight="bold"
            backgroundColor={"black"}
            color={"white"}
            mt={-8}
            pt={10}
            pb={3}
            pl={5}
            pr={5}
            cursor={"pointer"}
          >
            Visit AdminPage
          </Box>
        </Link>
      </Flex>
    </Container>
  );
};

export default NavbarTop;
