import React from "react";
import { Divider, Center, Text, Box } from "@chakra-ui/react";
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
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import ProductData from "./prductfetch"
const Productpage = () => {

  return (
    <div style={{ maxWidth: "1200px", margin: "auto", marginTop: "92px" }}>
      <div
        style={{ marginTop: "2px",  height: "24px" }}
      >
        <Text fontSize={"11px"} textAlign="left" color={"#afacac"}>
          Home / D2C Fashion
        </Text>
      </div>
      <div style={{ display: "flex" }}>
        {/* Left Box */}
        <div id="leftbox">
          <Menu closeOnBlur={false} defaultIsOpen={true}>
            {({ isOpen }) => (
              <>
                <MenuButton
                  isActive={isOpen}
                  isOpen={isOpen}
                  as={Button}
                  backgroundColor="transparent"
                  border={"none"}
                  
                  id="leftbox-1menu"
                  width={"212px"}
                  height={"23px"}
                  textAlign="left"
                  fontSize={"22px"}
                  fontWeight="600"
                  margin={"15px"}
                  color={"#333333"}
                  className="myclass"
                  rightIcon={
                    isOpen ? (
                      <ChevronUpIcon boxSize={"30px"} />
                    ) : (
                      <ChevronDownIcon boxSize={"30px"} />
                    )
                  }
                >
                  {!isOpen ? "Refine By" : "Refine By"}
                </MenuButton>
                <MenuList>
                  <div >
                    <Menu
                      closeOnBlur={false}
                      defaultIsOpen={true}
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
                            marginBottom={isOpen? "53px" :"8px"}
                          >
                            {isOpen ? "- Gender" : "+ Gender"}
                          </MenuButton>
                          <MenuList
                            defaultIsOpen="true"
                            height={"45px"}
                            paddingLeft="10px"
                            alignItems={"left"}
                            // borderBottom="1px solid grey"
                            
                          >
                            <MenuItem
                              border="none"
                              closeOnSelect={false}
                              backgroundColor={"transparent"}
                              
                            >
                              <input type="checkbox" name="" id="" />
                              <label fontSize="16px" htmlFor="Men"> Men</label>
                            </MenuItem>
                            <MenuItem
                              defaultIsOpen={true}
                              closeOnSelect={false}
                              backgroundColor={"transparent"}
                              border="none"
                            >
                              <input type="checkbox" name="" id="" />
                              <label paddingBottom={"20px"} htmlFor="Women">
                                {" "}
                                Women
                              </label>
                            </MenuItem>
                          </MenuList>
                        </>
                      )}
                    </Menu>
                    <hr style={{ borderColor:"#f9f9f9"}} />
                  </div>
                  <div >
                    <Menu
                      closeOnBlur={false}
                      defaultIsOpen={true}
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
                            marginBottom={isOpen ? "114px" : "8px"}
                          >
                            {isOpen ? "- Category" : "+ Category"}
                          </MenuButton>
                          <MenuList
                            defaultIsOpen="true"
                            paddingLeft="10px"
                            alignItems={"left"}
                            // borderBottom="1px solid grey-900"
                            

                          >
                            <MenuItem
                              // border="1px solid red"
                              closeOnSelect={false}
                              backgroundColor={"transparent"}
                              border="none"
                            >
                              <input type="checkbox" name="" id="" />
                              <label htmlFor="Men"> Tshirts</label>
                            </MenuItem>
                            <MenuItem
                              defaultIsOpen={true}
                              closeOnSelect={false}
                              backgroundColor={"transparent"}
                              border="none"
                            >
                              <input type="checkbox" name="" id="" />
                              <label paddingBottom={"20px"} htmlFor="Women">
                                {" "}
                                Shirts
                              </label>
                            </MenuItem>
                            <MenuItem
                              defaultIsOpen={true}
                              closeOnSelect={false}
                              backgroundColor={"transparent"}
                              border="none"
                            >
                              <input type="checkbox" name="" id="" />
                              <label paddingBottom={"20px"} htmlFor="Women">
                                {" "}
                                Sweatshirt & Hoodies
                              </label>
                            </MenuItem>
                            <MenuItem
                              defaultIsOpen={true}
                              closeOnSelect={false}
                              backgroundColor={"transparent"}
                              border="none"
                            >
                              <input type="checkbox" name="" id="" />
                              <label paddingBottom={"20px"} htmlFor="Women">
                                {" "}
                                Jeans
                              </label>
                            </MenuItem>
                            <MenuItem
                              defaultIsOpen={true}
                              closeOnSelect={false}
                              backgroundColor={"transparent"}
                              border="none"
                            >
                              <input type="checkbox" name="" id="" />
                              <label paddingBottom={"20px"} htmlFor="Women">
                                {" "}
                                Track Pants
                              </label>
                            </MenuItem>
                          </MenuList>
                        </>
                      )}
                    </Menu> <hr style={{ borderColor: "#f9f9f9" }} />
                  </div>
                  <div >
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
                            marginBottom={isOpen ? "53px" : "8px"}
                          >
                            {isOpen ? "- Price" : "+ Price"}
                          </MenuButton>
                          <MenuList
                            defaultIsOpen="true"
                            height={"45px"}
                            paddingLeft="10px"
                            alignItems={"left"}
                          // borderBottom="1px solid grey"

                          >
                            <MenuItem
                              border="none"
                              closeOnSelect={false}
                              backgroundColor={"transparent"}

                            >
                              <input type="checkbox" name="" id="" />
                              <label htmlFor="Men"> Low to High</label>
                            </MenuItem>
                            <MenuItem
                              defaultIsOpen={true}
                              closeOnSelect={false}
                              backgroundColor={"transparent"}
                              border="none"
                            >
                              <input type="checkbox" name="" id="" />
                              <label paddingBottom={"20px"} htmlFor="Women">
                                {" "}
                                High to Low
                              </label>
                            </MenuItem>
                          </MenuList>
                        </>
                      )}
                    </Menu> <hr style={{ borderColor: "#f9f9f9" }} />
                  </div>
                  <div >
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
                            marginBottom={isOpen ? "53px" : "8px"}
                          >
                            {isOpen ? "- Brand" : "+ Brand"}
                          </MenuButton>
                          <MenuList
                            defaultIsOpen="true"
                            height={"45px"}
                            paddingLeft="10px"
                            alignItems={"left"}
                          // borderBottom="1px solid grey"

                          >
                            <MenuItem
                              border="none"
                              closeOnSelect={false}
                              backgroundColor={"transparent"}

                            >
                              <input type="checkbox" name="" id="" />
                              <label htmlFor="Men"> Men</label>
                            </MenuItem>
                            <MenuItem
                              defaultIsOpen={true}
                              closeOnSelect={false}
                              backgroundColor={"transparent"}
                              border="none"
                            >
                              <input type="checkbox" name="" id="" />
                              <label paddingBottom={"20px"} htmlFor="Women">
                                {" "}
                                Women
                              </label>
                            </MenuItem>
                          </MenuList>
                        </>
                      )}
                    </Menu> <hr style={{ borderColor: "#f9f9f9" }} />
                  </div>
                  <div >
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
                            marginBottom={isOpen ? "53px" : "8px"}
                          >
                            {isOpen ? "- Discount" : "+ Discount"}
                          </MenuButton>
                          <MenuList
                            defaultIsOpen="true"
                            height={"45px"}
                            paddingLeft="10px"
                            alignItems={"left"}
                          // borderBottom="1px solid grey"

                          >
                            <MenuItem
                              border="none"
                              closeOnSelect={false}
                              backgroundColor={"transparent"}

                            >
                              <input type="checkbox" name="" id="" />
                              <label htmlFor="Men">Low to High</label>
                            </MenuItem>
                            <MenuItem
                              defaultIsOpen={true}
                              closeOnSelect={false}
                              backgroundColor={"transparent"}
                              border="none"
                            >
                              <input type="checkbox" name="" id="" />
                              <label paddingBottom={"20px"} htmlFor="Women">
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
          
        </div>

        <div id="rightbox">
          <div height="32px" marginBottom="10px">
            <Text fontSize={"36px"} textAlign={"center"}>Clothing</Text>
          </div>
          <hr style={{ borderColor: "#f9f9f9" }} />
          <Box height="42px" display="grid" id="rhs1" padding="5px" color={"#939393"} bg="gray.500" alignItems={"center"}>
            <Box color={"black"} fontWeight={"bold"}>60 items found</Box>
            <Box color={"#939393"}>GRID</Box>
            <Box> <span color={"#939393"} marginRight="4px">Sort By</span>
            <select >
              <option>Revelence</option>
              <option>Price (lowest first)</option>
              <option>Discount</option>
              <option>Price (highest first)</option>
            </select>
            </Box>
          </Box>
          <hr style={{ borderColor: "#f9f9f9" }} />
          <ProductData />
        </div>
      </div>
    </div>
  );
};

export default Productpage;
