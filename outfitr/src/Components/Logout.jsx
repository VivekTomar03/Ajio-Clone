import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { Button, Code, Flex,Box } from "@chakra-ui/react";
import Live from "../Pages/Live";
import { getLogoutReq } from "../Redux/Authreducer/action";
import { useToast } from "@chakra-ui/react";




const Logout = () => {
    const toast = useToast();

  let { userData } = useSelector((state) => state.authReducer);
  let dispatch = useDispatch();

  const LogoutUser = () => {
    toast({
        title: "Logout Successful.",
        description: "You have been logged out.",
        status: "warning",
        duration: 4000,
        isClosable: true,
        });

       dispatch(getLogoutReq());
    };
    





  return (
    <div>
      <Flex mt={5} justifyContent="center">
        <Code
          style={{
            display: "flex",
            gap: "7px",
          }}
          px={2}
          fontSize="16"
          colorScheme="teal"
          mt={-3}
          mb={-1}
        >
          {userData.name}
          <Box
            mt={1.5}
          >
            <Live />
          </Box>
        </Code>
        <Button
          colorScheme="teal"
          variant="outline"
          mb={-1}
          mt={-4}
          ml={2}
          pb={1}
          color="red"
            onClick={LogoutUser }

        >
          Logout
        </Button>
      </Flex>
    </div>
  );
};
export default Logout;
