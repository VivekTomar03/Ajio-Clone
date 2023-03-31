import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
  Input,
  Circle,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import React from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import HoverMenu from "../Pages/HoverMenu";
import Hoverwoman from "../Pages/Hoverwoman";
import Hoverkids from "../Pages/Hoverkids";
import HoverHome from "../Pages/HoverHome";
import {Link} from 'react-router-dom'
export default function NavbarBottom() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        maxW={"91%"}
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "end" }}
          justifyContent="space-around"
        >
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
          >
            <Link to={"/"}>
            <Image
              src="/logoPng1.png"
              alt="logo"
              w={{ base: "150px", md: "170px" }}
              mt="-1.4rem"
            /></Link>
          </Text>

          <Flex
            display={{ base: "none", md: "flex" }}
            mr="-7rem"
            mt={{ base: "1rem", md: ".6rem" }}
          >
            <DesktopNav />
          </Flex>
        </Flex>

        <Input
          w={{ base: "100%", md: "280px" }}
          mt="-.4rem"
          placeContent={"center"}
          placeholder={`Search for products                        🔍`}
          size="sm"
          variant="filled"
          p={5}
          _placeholder={{
            color: "gray.500",
          }}
          _hover={{
            bg: "gray.100",
          }}
          _focus={{
            bg: "white",
            borderColor: "teal.500",
          }}
          borderRadius="full"
        />

        <Circle
          bgColor={useColorModeValue("rgb(43, 64, 82)", "rgb(43, 64, 82)")}
          color={useColorModeValue("white", "white")}
          p="0.5rem"
          ml="1rem"
          fontSize="1.3rem"
        >
          <AiOutlineHeart />
        </Circle>
        <Circle
          bgColor={useColorModeValue("rgb(43, 64, 82)", "rgb(43, 64, 82)")}
          color={useColorModeValue("white", "white")}
          fontSize="1.3rem"
          p="0.5rem"
          ml="1rem"
        >
          <AiOutlineShoppingCart />
        </Circle>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={7}>
      {NAV_ITEMS.map((navItem,idx) => (
       idx===NAV_ITEMS.length-1||idx===NAV_ITEMS.length-2?(<Box key={navItem.label}>
        <Popover trigger={"hover"} placement={"bottom-end"}>
          <PopoverTrigger>
            <Link
              p={2}
              href={navItem.href ?? "#"}
              fontSize={"sm"}
              fontWeight={500}
              color={linkColor}
            >
              {navItem.label}
            </Link>
          </PopoverTrigger>

          {navItem.children && (
            <PopoverContent
              border={0}
              boxShadow={"xl"}
              bg={popoverContentBgColor}
              p={4}
              rounded={"xl"}
              minW={"sm"}
            >
              <Stack>
                {navItem.children.map((child) => (
                  <DesktopSubNav key={child.label} {...child} />
                ))}
              </Stack>
            </PopoverContent>
          )}
        </Popover>
      </Box>) :(<Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>)
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href }) => {
  return (
    <a role={"group"} display={"block"} p={2} rounded={"md"}>
      <Stack direction={"row"} zIndex={1} gap={5}>
        <Box>
          <Text transition={"all .3s ease"} fontWeight={500}>
            {label}
          </Text>
        </Box>
      </Stack>
    </a>
  );
};

const MobileNav = () => {
  return (
    <Stack
      zIndex={1}
      bg={useColorModeValue("white", "gray.800")}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        zIndex={1}
        // py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            zIndex={1}
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link
                key={child.label}
                py={2}
                href={child.href}
                textDecoration="none"
              >
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "MEN",
    children: [
      {
        label: <HoverMenu />,
        to: "/mensProduct",
      },
    ],
  },
  {
    label: "WOMEN",
    children: [
      {
        label: <Hoverwoman/>,
        to: "/womensProduct",
      },
    ],
  },
  {
    label: "KIDS",
    children: [
      {
        label: <Hoverkids/>,
        href: "#",
      },
    ]
  },
  {
    label: "HOME",
    children: [
      {
        label: <HoverHome/>,
        href: "#",
      },
    ]
  },
];
