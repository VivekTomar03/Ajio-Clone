import { Box, Button, Container, Flex, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import Login from "../Pages/Login";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
const NavbarTop = () => {
  const nav=useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  let Handlelogin=(e)=>{
    e.preventDefault()
  nav("/adminPage")
  onClose()
}
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
        <Button onClick={onOpen} background="white" _hover={{ bg: "white" }}>
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
        </Button>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody padding="15%" mt="auto">
            <h1
              class="login-title"
              style={{
                textAlign: "center",
                paddingBottom: "20px",
                fontSize: "30px",
                fontWeight: "bold",
              }}
            >
              Admin Login
            </h1>
            <form class="login-form">
              <div>
                <label for="email">Email </label>
                <input
                  id="email"
                  type="email"
                  placeholder="me@example.com"
                  name="email"
                  required
                  onChange={e=>setemail(e.target.value)} 
                />
              </div>
              <div>
                <label for="password">Password </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  name="password"
                  required
                  onChange={e=>setpassword(e.target.value)}
                />
              </div>
              <Button background="black" _hover={{ bg: "black" }} onClick={Handlelogin} color="white">
                Log in
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default NavbarTop;
