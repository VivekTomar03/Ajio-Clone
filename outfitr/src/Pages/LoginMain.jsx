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
  import { Link } from "react-router-dom";
import GoogleButton from "./Google";
  
  export default function LoginMain() {
    const toast = useToast();
  
    let email = useRef();
    let password = useRef();
   
    function handleSubmit(e) {
      e.preventDefault();
      const data = {
        email: email.current.value,
        password: password.current.value,
      };
      console.log(data);
    }
    
  
  
    // const fetchData = async (data) => {
    //   const response = await fetch(
    //     "https://frequent-ionized-grapple.glitch.me/user"
    //   );
    //   const user = await response.json();
    //   const check = user.filter(
    //     (user) => user.email === data.email && user.password === data.password
    //   );
    //       console.log(check);
    //   if (check.length > 0) {
    //     dispatch({ type: "LOGIN", payload: check[0] });
    //     toast({
    //       title: "LOGIN SUCCESSFUL.",
    //       description: "We've created your account for you.",
    //       status: "success",
    //       duration: 4000,
    //       isClosable: true,
    //     });
    //     email.current.value = "";
    //     password.current.value = "";
        
    //   } else if (data.email.length == 0 || data.password.length == 0) {
    //     toast({
    //       description: "Please fill all the details.",
    //       status: "warning",
    //       duration: 4000,
    //       isClosable: true,
    //     });
    //   } else {
    //     toast({
    //       title: "Account not found.",
    //       description: "We could not find an account",
    //       status: "error",
    //       duration: 4000,
    //       isClosable: true,
    //     });
    //   }
    //   email.current.value = "";
    //   password.current.value = "";
    // };
  
    
   
  
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
            <GoogleButton/>
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
  