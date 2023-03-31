import React, { useState } from "react";
import { Divider, Center, Text, Box, Img } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from "@chakra-ui/react";
import "./product.css";
import Datacount from "./prductfetch";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import ProductData from "./prductfetch";
const Productpage = () => {
  const [isChecked, setIsChecked] = useState(true);
  const [isChecked1, setIsChecked1] = useState(false);
  const [val1, setVal1] = useState("");
  const [lowh, setLowh] = useState(false);
  const [val, setVal] = useState("");
// const [dis,setDis]=useState("");
  const [toggle, setToggle] = useState(false);
  const [brand1, setBrand1] = useState(false);
  const [brand2, setBrand2] = useState(false);
  const [brand3, setBrand3] = useState(false);
  const [brand4, setBrand4] = useState(false);
  const [cat,setCat]=useState(false)
  const [catval,setCatval]=useState("")
   const [cat1, setCat1] = useState(false);
   const [cat2, setCat2] = useState(false);
   const [cat3, setCat3] = useState(false);
   const [cat4, setCat4] = useState(false);
  const cat11 = () => {
    setCat(true)
    setCat1(true);
    setCat2(false);
    setCat3(false);
    setCat4(false);
    setCat1(!cat1);
    if (cat1 == true) {
      setCatval(true);
    } else {
      if(isChecked){setCatval("kurta")}else{setCatval("Kurtis");}
    }
    // console.log(catval)
   
  };
  const cat22 = () => {
     setCat(true);
     setCat1(false);
     setCat2(true);
     setCat3(false);
     setCat4(false);
     setCat2(!cat2);
     if (cat2 == true) {
       setCatval(true);
     } else {
      if(isChecked){

        setCatval("T-shirt");
      }else{
        setCatval("Sarees")
      }
     }
   
  };

  const cat33 = () => {
     setCat(true);
    setCat1(false);
    setCat2(false);
    setCat3(true);
    setCat4(false);
    setCat3(!cat3);
    if (cat3 == true) {
      setCatval(true);
    } else {
      if(isChecked){

        setCatval("shirt");
      }else{
        setCatval("Heels")
      }
    }
   
  };
  const cat44 = () => {
     setCat(true);
     setCat1(false);
     setCat2(false);
     setCat3(false);
     setCat4(true);
     setCat4(!cat4);
     if (cat4 == true) {
       setCatval(true);
     } else {
      if(isChecked){

        setCatval("Pants");
      }else{
        setCatval("Earrings")
      }
     }
   
  };
  const Datachannel1 = (val1) => {
    setVal(val1);
  };
  const brand11 = (e) => {
    setCat(false)
    setBrand1(true);
    setBrand2(false);
    setBrand3(false);
    setBrand4(false);
    setBrand1(!brand1)
    if(brand1==true){
      setLowh(true)
    }else{
      if (isChecked) {
        setLowh("JOMPERS");
      } else {
        setLowh("PRAKHYA");
      }
      
    }
    console.log(brand1);
  };
  const brand22 = () => {
     setCat(false);
    setBrand1(false);
    setBrand2(true);
    setBrand3(false);
    setBrand4(false);
    setBrand2(!brand2);
    if (brand2 == true) {
      setLowh(true);
    } else {
      if(isChecked){

        setLowh("NETPLAY");
      }else{
        setLowh("Siril")
      }
    }
  };

  const brand33 = () => {
     setCat(false);
    setBrand1(false);
    setBrand2(false);
    setBrand3(true);
    setBrand4(false);
    setBrand3(!brand3);
    if (brand3 == true) {
      setLowh(true);
    } else {
      if(isChecked){

        setLowh("PERFORMAX");
      }else{
        setLowh("Curiozz")
      }
    }
  };
  const brand44 = () => {
     setCat(false);
    setBrand1(false);
    setBrand2(false);
    setBrand3(false);
    setBrand4(true);
    setBrand4(!brand4);
    if (brand4 == true) {
      setLowh(true);
    } else {
      if(isChecked){

        setLowh("EYEBOGLER");
      }else{
        setLowh("ZIKARAA")
      }
    }
  };
  return (
    <div style={{ maxWidth: "1262px", margin: "auto", marginTop: "32px" }}>
      <div style={{ marginTop: "2px", height: "24px" }}>
        <Text fontSize={"11px"} textAlign="left" color={"#afacac"}>
          Home / D2C Fashion /{isChecked ? " Mens" : " Female"}
        </Text>
      </div>
      {/* <Datacount/> */}
      <Box style={{ display: "flex" }}>
        {/* Left Box */}
        <Box id="leftbox">
          <Menu closeOnBlur={false} defaultIsOpen={true}>
            {({ isOpen }) => (
              <>
                <MenuButton
                  as={Button}
                  width={"212px"}
                  height={"25px"}
                  textAlign="left"
                  fontSize={"22px"}
                  fontWeight="510"
                  bg={isOpen ? "gray.100" : "white"}
                  color={"#333333"}
                  isActive={isOpen}
                  rightIcon={
                    isOpen ? (
                      <ChevronUpIcon boxSize={"30px"} />
                    ) : (
                      <ChevronDownIcon boxSize={"30px"} />
                    )
                  }
                  _active={{ bg: "transparent" }}
                  _hover={{ bg: "transparent" }}
                  _focus={{ outline: "none" }}
                >
                  {!isOpen ? "Refine By" : "Refine By"}
                </MenuButton>
                <MenuList w={34} border="none">
                  <Menu
                    h="26px"
                    closeOnBlur={false}
                    defaultIsOpen={true}
                    closeOnSelect={false}
                  >
                    {({ isOpen }) => (
                      <>
                        <MenuButton
                          _active={{ bg: "transparent" }}
                          _hover={{ bg: "transparent" }}
                          _focus={{ outline: "none" }}
                          as={Button}
                          width={"200px"}
                          textAlign="left"
                          fontSize={"18px"}
                          color={"#333333"}
                          height="22px"
                          border="none"
                          defaultIsOpen="true"
                          backgroundColor={"transparent"}
                          defaultValue={"true"}
                          marginBottom={isOpen ? 103 : 3}
                          className="myclass"
                        >
                          {isOpen ? "- Gender" : "+ Gender"}
                        </MenuButton>
                        <MenuList
                          defaultIsOpen="true"
                          // height={"45px"}
                          paddingLeft="10px"
                          alignItems={"left"}
                          border="none"
                        >
                          <MenuItem
                            border="none"
                            closeOnSelect={false}
                            backgroundColor={"transparent"}
                          >
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={(e) => setIsChecked(e.target.checked)}
                              name=""
                              id=""
                            />
                            <label fontSize="16px" htmlFor="Men">
                              {" "}
                              Men
                            </label>
                          </MenuItem>
                          <MenuItem
                            defaultIsOpen={true}
                            closeOnSelect={false}
                            backgroundColor={"transparent"}
                            border="none"
                          >
                            <input
                              checked={!isChecked}
                              onChange={(pre) => setIsChecked(!pre)}
                              type="checkbox"
                              name=""
                              id=""
                            />
                            <label pb={40} htmlFor="Women">
                              {" "}
                              Women
                            </label>
                          </MenuItem>
                        </MenuList>
                      </>
                    )}
                  </Menu>
                  <hr style={{ borderColor: "#f9f9f9" }} />
                  {/* </Box> */}
                  <Box>
                    <Menu
                      closeOnBlur={false}
                      defaultIsOpen={true}
                      closeOnSelect={false}
                    >
                      {({ isOpen }) => (
                        <>
                          <MenuButton
                            _active={{ bg: "transparent" }}
                            _hover={{ bg: "transparent" }}
                            _focus={{ outline: "none" }}
                            as={Button}
                            width={"200px"}
                            textAlign="left"
                            fontSize={"18px"}
                            color={"#333333"}
                            height="auto"
                            border="none"
                            defaultIsOpen="true"
                            backgroundColor={"transparent"}
                            defaultValue={"true"}
                            className="myclass"
                            marginBottom={isOpen ? "170px" : "8px"}
                          >
                            {isOpen ? "- Category" : "+ Category"}
                          </MenuButton>
                          <MenuList
                            defaultIsOpen="true"
                            height={"45px"}
                            paddingLeft="10px"
                            alignItems={"left"}
                            border="none"
                          >
                            <MenuItem
                              border="none"
                              closeOnSelect={false}
                              backgroundColor={"transparent"}
                            >
                              <input
                                type="checkbox"
                                checked={cat1}
                                onChange={(e) => cat11(e.target.value)}
                                name=""
                                id=""
                              />
                              <label htmlFor="Men">
                                {" "}
                                {isChecked ? "Kurta" : "Kurties"}
                              </label>
                            </MenuItem>
                            <MenuItem
                              defaultIsOpen={true}
                              closeOnSelect={false}
                              backgroundColor={"transparent"}
                              border="none"
                            >
                              <input
                                type="checkbox"
                                checked={cat2}
                                onChange={(e) => cat22(e.target.value)}
                                name=""
                                id=""
                              />
                              <label paddingBottom={"20px"} htmlFor="Women">
                                {" "}
                                {isChecked ? "T-shirt" : "Sarees"}
                              </label>
                            </MenuItem>
                            <MenuItem
                              defaultIsOpen={true}
                              closeOnSelect={false}
                              backgroundColor={"transparent"}
                              border="none"
                            >
                              <input
                                type="checkbox"
                                checked={cat3}
                                onChange={(e) => cat33(e.target.value)}
                                name=""
                                id=""
                              />
                              <label paddingBottom={"20px"} htmlFor="Women">
                                {" "}
                                {isChecked ? "Shirt" : "Heels"}
                              </label>
                            </MenuItem>
                            <MenuItem
                              defaultIsOpen={true}
                              closeOnSelect={false}
                              backgroundColor={"transparent"}
                              border="none"
                            >
                              <input
                                type="checkbox"
                                checked={cat4}
                                onChange={(e) => cat44(e.target.value)}
                                name=""
                                id=""
                              />
                              <label paddingBottom={"20px"} htmlFor="Women">
                                {" "}
                                {isChecked ? "Pants" : "Earrings"}
                              </label>
                            </MenuItem>
                          </MenuList>
                        </>
                      )}
                    </Menu>{" "}
                    <hr style={{ borderColor: "#f9f9f9" }} />
                  </Box>
                  <div>
                    <Menu
                      closeOnBlur={false}
                      defaultIsOpen={false}
                      closeOnSelect={false}
                    >
                      {({ isOpen }) => (
                        <>
                          <MenuButton
                            as={Button}
                            width={"200px"}
                            textAlign="left"
                            fontSize={"18px"}
                            color={"#333333"}
                            height="auto"
                            border="none"
                            defaultIsOpen="true"
                            backgroundColor={"transparent"}
                            defaultValue={"true"}
                            className="myclass"
                            marginBottom={isOpen ? "93px" : "8px"}
                          >
                            {isOpen ? "- Price" : "+ Price"}
                          </MenuButton>
                          <MenuList
                            defaultIsOpen="true"
                            height={"45px"}
                            paddingLeft="10px"
                            alignItems={"left"}
                            border="none"
                          >
                            <MenuItem
                              border="none"
                              closeOnSelect={false}
                              backgroundColor={"transparent"}
                            >
                              <input
                                type="checkbox"
                                onChange={() => setVal("pl")}
                                name="low"
                                id="lo"
                              />
                              <label htmlFor="Men"> Low to High</label>
                            </MenuItem>
                            <MenuItem
                              defaultIsOpen={true}
                              closeOnSelect={false}
                              backgroundColor={"transparent"}
                              border="none"
                            >
                              <input
                                onChange={() => setVal("ph")}
                                type="checkbox"
                                name=""
                                id=""
                              />
                              <label paddingBottom={"20px"} htmlFor="Women">
                                {" "}
                                High to Low
                              </label>
                            </MenuItem>
                          </MenuList>
                        </>
                      )}
                    </Menu>{" "}
                    <hr style={{ borderColor: "#f9f9f9" }} />
                  </div>
                  <div>
                    <Menu
                      closeOnBlur={false}
                      defaultIsOpen={false}
                      closeOnSelect={false}
                    >
                      {({ isOpen }) => (
                        <>
                          <MenuButton
                            as={Button}
                            width={"200px"}
                            textAlign="left"
                            fontSize={"18px"}
                            color={"#333333"}
                            height="auto"
                            border="none"
                            defaultIsOpen="true"
                            backgroundColor={"transparent"}
                            defaultValue={"true"}
                            className="myclass"
                            marginBottom={isOpen ? "173px" : "8px"}
                          >
                            {isOpen ? "- Brand" : "+ Brand"}
                          </MenuButton>
                          <MenuList
                            defaultIsOpen="true"
                            height={"45px"}
                            paddingLeft="10px"
                            alignItems={"left"}
                            border="none"
                          >
                            <MenuItem
                              border="none"
                              closeOnSelect={false}
                              backgroundColor={"transparent"}
                            >
                              <input
                                type="checkbox"
                                onChange={(e) => brand11(e.target.value)}
                                name=""
                                id=""
                              />
                              <label htmlFor="Men">
                                {" "}
                                {isChecked ? "JOMPERS" : "PRAKHYA"}
                              </label>
                            </MenuItem>
                            <MenuItem
                              defaultIsOpen={true}
                              closeOnSelect={false}
                              backgroundColor={"transparent"}
                              border="none"
                            >
                              <input
                                type="checkbox"
                                onChange={(e) => brand22(e.target.value)}
                                name=""
                                id=""
                              />
                              <label paddingBottom={"20px"} htmlFor="Women">
                                {" "}
                                {isChecked ? "NETPLAY" : "Siril"}
                              </label>
                            </MenuItem>
                            <MenuItem
                              defaultIsOpen={true}
                              closeOnSelect={false}
                              backgroundColor={"transparent"}
                              border="none"
                            >
                              <input
                                type="checkbox"
                                onChange={(e) => brand33(e.target.value)}
                                name=""
                                id=""
                              />
                              <label paddingBottom={"20px"} htmlFor="Women">
                                {" "}
                                {isChecked ? "PERFORMAX" : "Curiozz"}
                              </label>
                            </MenuItem>
                            <MenuItem
                              defaultIsOpen={true}
                              closeOnSelect={false}
                              backgroundColor={"transparent"}
                              border="none"
                            >
                              <input
                                type="checkbox"
                                onChange={(e) => brand44(e.target.value)}
                                name=""
                                id=""
                              />
                              <label paddingBottom={"20px"} htmlFor="Women">
                                {" "}
                                {isChecked ? "EYEBOGLER" : "ZIKARAA"}
                              </label>
                            </MenuItem>
                          </MenuList>
                        </>
                      )}
                    </Menu>{" "}
                    <hr style={{ borderColor: "#f9f9f9" }} />
                  </div>
                  <div>
                    <Menu
                      closeOnBlur={false}
                      defaultIsOpen={false}
                      closeOnSelect={false}
                    >
                      {({ isOpen }) => (
                        <>
                          <MenuButton
                            as={Button}
                            width={"200px"}
                            textAlign="left"
                            fontSize={"18px"}
                            color={"#333333"}
                            height="auto"
                            border="none"
                            defaultIsOpen="true"
                            backgroundColor={"transparent"}
                            defaultValue={"true"}
                            className="myclass"
                            marginBottom={isOpen ? "103px" : "8px"}
                          >
                            {isOpen ? "- Discount" : "+ Discount"}
                          </MenuButton>
                          <MenuList
                            defaultIsOpen="true"
                            height={"78px"}
                            border="none"
                            paddingLeft="10px"
                            alignItems={"left"}
                            // borderBottom="1px solid grey"
                          >
                            <MenuItem
                              border="none"
                              closeOnSelect={false}
                              backgroundColor={"transparent"}
                            >
                              <input
                                type="checkbox"
                                name=""
                                onChange={() => setVal("pl")}
                                id=""
                              />
                              <label htmlFor="Men">Low to High</label>
                            </MenuItem>
                            <MenuItem
                              defaultIsOpen={true}
                              closeOnSelect={false}
                              backgroundColor={"transparent"}
                              border="none"
                            >
                              <input
                                mb={22}
                                type="checkbox"
                                name=""
                                id=""
                                onChange={() => setVal("ph")}
                              />
                              <label border="1px solid red" htmlFor="Women">
                                {" "}
                                High to Low
                              </label>
                            </MenuItem>
                          </MenuList>
                        </>
                      )}
                    </Menu>
                  </div>
                  <hr style={{ borderColor: "#f9f9f9" }} />
                  <Menu>
                    <MenuButton
                      isActive={isOpen}
                      as={Button}
                      backgroundColor="transparent"
                      border={"none"}
                      id="leftbox-1menu"
                      width={"212px"}
                      height={"23px"}
                      textAlign="left"
                      fontSize={"22px"}
                      margin={"15px"}
                      marginLeft="10px"
                      color={"black"}
                      className="myclass"
                      rightIcon={
                        isOpen ? (
                          <ChevronDownIcon boxSize={"30px"} />
                        ) : (
                          <ChevronUpIcon boxSize={"30px"} />
                        )
                      }
                    >
                      {!isOpen ? "More Filters" : "More Filter"}
                    </MenuButton>
                  </Menu>
                </MenuList>
              </>
            )}
          </Menu>
        </Box>

        <div id="rightbox">
          <Box height="93px">
            <Text fontSize={"36px"} paddingTop="1.5%" textAlign={"center"}>
              Clothing
            </Text>
          </Box>
          <hr />
          <Box
            height="42px"
            display="grid"
            id="rhs1"
            textAlign={"center"}
            color={"#939393"}
            bg="gray.500"
            justifyContent={"space-between"}
            maxW={"99%"}
            margin="auto"
          >
            <Box color={"black"} fontWeight={"bold"}>
              {isChecked?"60":"70"} items found
            </Box>
            <Box
              onClick={() => {
                setToggle(!toggle);
              }}
              color={"#939393"}
            >
              <Center>
                <Box
                  id="gridbox"
                  display="flex"
                  paddingRight={"5px"}
                  alignItems={"center"}
                >
                  GRID
                </Box>
                <Box>
                  <img
                    id="gridbox"
                    width={"83px"}
                    src="https://i.ibb.co/2dgZHmZ/grid-img.png"
                    alt="image"
                  />
                </Box>
              </Center>
            </Box>
            <Box>
              {" "}
              <span color={"#939393"} marginRight="4px">
                Sort By
              </span>
              <select id="stag" onChange={(e) => Datachannel1(e.target.value)}>
                <option value={"revelence"}>Revelence</option>
                <option value={"pl"}>Price (lowest first)</option>
                <option value={"d"}>Discount</option>
                <option value={"ph"}>Price (highest first)</option>
              </select>
            </Box>
          </Box>
          <hr />
          <ProductData
            val={val}
            brandname1={lowh}
            isChecked={isChecked}
            toggle={toggle}
            cat={cat}
            catval={catval}
          />
        </div>
      </Box>
    </div>
  );
};

export default Productpage;
