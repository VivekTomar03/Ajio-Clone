import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getLoginReq } from "../Redux/Authreducer/action";
import GoogleButton from "./Google";
import { useDispatch } from "react-redux";
export default function LoginMain() {
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let email = useRef();
  let password = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      email: email.current.value,
      password: password.current.value,
    };
    // console.log(data);
    if (data.email.length == 0 || data.password.length == 0) {
      toast({
        description: "Please fill all the details.",
        status: "warning",
        duration: 4000,
        isClosable: true,
      });
    } else {
      dispatch(getLoginReq(data)).then((res) => {
        console.log(res.payload);
        if (res.payload) {
          toast({
            title: "LOGIN SUCCESSFUL.",
            description: "We've created your account for you.",
            status: "success",
            duration: 4000,
            isClosable: true,
          });
        }
        if (!res.payload) {
          toast({
            title: "Account not found.",
            description: "We could not find an account",
            status: "error",
            duration: 4000,
            isClosable: true,
          });
        }
      });
    }
  }

  return (
    <Flex
      flexDirection={"column"}
      borderRadius="10px"
      align={"center"}
      bg={useColorModeValue("rgb(255, 255, 255)", "rgb(255, 255, 255)")}
    >
      <Stack spacing={2} w={"full"} maxW={"md"} rounded={"xl"} p={4} my={1}>
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
          WELCOME!
        </Heading>
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input
            placeholder="your-email@example.com"
            _placeholder={{ color: "gray.500" }}
            type="email"
            ref={email}
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" ref={password} />
        </FormControl>
        <Stack spacing={6}>
          <Button
            bg={"black"}
            color={"white"}
            _hover={{
              bg: "green.500",
            }}
            onClick={handleSubmit}
          >
            LOGIN
          </Button>
          <GoogleButton />
        </Stack>
      </Stack>

      <Box
        p={2}
        textAlign={"center"}
        color={useColorModeValue("gray.600", "gray.400")}
        fontSize={"md"}
        mb={2}
      >
        If you have an account with us, login using your email address and
        password. If you don't have an account click on Create account button.
      </Box>

      <Link
        style={{
          textDecoration: "none",
          width: "100%",
        }}
        to="/register"
      >
        <Button
          mb={2}
          ml={1}
          w={"98%"}
          bg={"black"}
          color={"white"}
          _hover={{
            bg: "red.500",
          }}
        >
          CREATE AN ACCOUNT
        </Button>
      </Link>
    </Flex>
  );
}
