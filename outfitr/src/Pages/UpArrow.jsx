import React from "react";
import { Button, VStack, Text, useColorModeValue, Circle } from "@chakra-ui/react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import {BiUpArrow} from "react-icons/bi"

export function UpArrow() {
  return (
    <Button
      position="fixed"
      bottom="50px"
      right="0"
      zIndex="100"
      w="40px"
      h="40px"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
          zIndex:"1"
        })
      }
      bg={useColorModeValue("rgb(177, 177, 177)", "rgb(177, 177, 177)")}
      _hover={{
        bg: useColorModeValue("rgb(177, 177, 177)", "rgb(177, 177, 177)"),
      }}
    >
      <Circle >
        <BiUpArrow
          fontSize={30}
          color={useColorModeValue("rgb(255, 255, 255)", "rgb(255, 255, 255)")}
        />
      </Circle>
    </Button>
  );
}
