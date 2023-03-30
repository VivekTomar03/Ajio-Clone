import {
  Button,
  Image,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import LoginMain from "./LoginMain";

function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = React.useState(true);

  const btnRef = React.useRef(null);
  return (
    <>
      <Button
        onClick={onOpen}
        bgColor="rgb(255, 255, 255)"
        color="black"
        _hover={{ color: "black" }}
        _active={{ color: "black" }}
        _focus={{ color: "black" }}
        ref={btnRef}
        border="none"
        padding="0"
        margin="0"
        fontFamily="monospace"
      >
        Sign In
      </Button>

      <Modal
        onClose={onClose}
        finalFocusRef={btnRef}
        isOpen={isOpen}
        scrollBehavior={scrollBehavior}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Image
            src="logoPng1.png"
            w={["100px", "100px", "100px", "150px"]}
            />
          </ModalHeader>
         <LoginMain/>
          <ModalCloseButton />
        </ModalContent>
      </Modal>
    </>
  );
}
export default Login;
