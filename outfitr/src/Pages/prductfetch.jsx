import { Box, Center, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./product.css";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Heading,
  Text,
  ButtonGroup,
  Button,
  Stack,
  Divider,
} from "@chakra-ui/react";
const ProductData = ({ val, isChecked ,brandname1}) => {
  // console.log(prop.Datachannel1)
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  // console.log(val)
  const getData = (price, order,brandname) => {
    setLoading(true);
    
    axios
      .get(
        `https://embarrassed-fly-yoke.cyclic.app/${
          isChecked ? "mens" : "women"
        }?${
          brandname1 == "JOMPERS" ||
          brandname1 == "NETPLAY" ||
          brandname1 == "PERFORMAX" ||
          brandname1 == "EYEBOGLER"
            ? `brand=${brandname1}`
            : null
        }&_sort=${price ? price : null}&_order=${order ? order : null}`
      )
      .then((res) => setData(res.data));
    setLoading(false);
    // console.log(brandname1)
  };
  useEffect(() => {
  console.log(brandname1)
    if (val == "revelence" || val == "") {
      getData();
    } else if (val == "pl") {
      getData("price", "asc");
    } else if (val == "ph") {
      getData("price", "desc");
    } else if (val == "d") {
      getData("discount", "asc");
      console.log(data);
    
    }
   
    // console.log(brandname1)
  }, [val, isChecked,brandname1]);

  if (loading) {
    // console.log("loading");
    return (
      <Center marginTop={"10%"}>
        <div class="dot-spinner">
          <div class="dot-spinner__dot"></div>
          <div class="dot-spinner__dot"></div>
          <div class="dot-spinner__dot"></div>
          <div class="dot-spinner__dot"></div>
          <div class="dot-spinner__dot"></div>
          <div class="dot-spinner__dot"></div>
          <div class="dot-spinner__dot"></div>
          <div class="dot-spinner__dot"></div>
        </div>
      </Center>
    );
  }
  return (
    <Box id="griditem" paddingLeft={"2px"} maxW={"100%"}>
      {data.map((e) => {
        {
          /* console.log(e); */
        }
        return (
          <Box
            key={e.id}
            onClick={() => console.log(e.id)}
            textAlign={"center"}
            bg="white"
            // border={"1px solid green"}
            marginBottom="20px"
            className="image-container"
            gap="15"
            width={"294.5px"}
            maxW="500px"
            height="470px"
          >
            <div style={{ paddingBottom: "9px" }}>
              <Image src={e.image} width="100%" height={"380px"} />
              <Box className="text-overlay">
                <Text color={"#2c4154"} fontSize="16px">
                  Quick View
                </Text>
              </Box>
            </div>
            <Text
              className="image-text"
              fontSize={"13px"}
              paddingBottom="4px"
              color="#d5a249"
            >
              {e.brand}
            </Text>
            <Text
              className="image-text"
              color={"#333333"}
              paddingBottom="2px"
              fontSize="13px"
            >
              {e.title}
            </Text>
            <Text
              className="image-text"
              paddingBottom={"4px"}
              fontSize={"14px"}
              color="#333333"
            >
              ₹{e.price}
            </Text>
            <Text className="image-text" color={"#3ab649"} fontSize="12px">
              Offer price ₹{e.offer_price}
            </Text>
          </Box>
        );
      })}
    </Box>
  );
};

export default ProductData;
