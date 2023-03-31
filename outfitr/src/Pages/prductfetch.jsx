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
import { useNavigate } from "react-router-dom";
const ProductData = ({ val, isChecked, brandname1, toggle,cat,catval }) => {
  // console.log(prop.Datachannel1)
  const navigate=useNavigate()
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [datac, setDatac] = useState(60);
  // console.log(val)
  const getData = (price, order, brandname) => {
    
    setLoading(true);
    if(cat==true){
if (catval == true || catval == false) {
  axios
    .get(
      `https://embarrassed-fly-yoke.cyclic.app/${
        isChecked ? "mens" : "women"
      }?_sort=${price ? price : ""}&_order=${order ? order : ""}`
    )
    .then((res) => {
      setData(res.data);
      setDatac(res.data.length);
    });
  // console.log(data);
} else {
  axios
     .get(
    `https://embarrassed-fly-yoke.cyclic.app/${
      isChecked ? "mens" : "women"
    }${
      catval !== true && catval !== false
        ? `?category=${catval}&_sort=${price ? price : ""}&_order=${
            order ? order : ""
          }`
        : `?_sort=${price ? price : ""}&_order=${order ? order : ""}`
    }`
  )
     .then((res) => {
      // console.log("catcomp")
       setData(res.data);
       setDatac(res.data.length);
     });
}
    }else{

    
if (brandname1 == true || brandname1 == false) {
  axios
    .get(
      `https://embarrassed-fly-yoke.cyclic.app/${
        isChecked ? "mens" : "women"
      }?_sort=${price ? price : ""}&_order=${order ? order : ""}`
    )
    .then((res) => {
      setData(res.data);
      setDatac(res.data.length);
    }); 
    // console.log(data)
} else {
  axios
    .get(
      `https://embarrassed-fly-yoke.cyclic.app/${isChecked ? "mens" : "women"}${
        brandname1 !== "true" && brandname1 !== false
          ? `?brand=${brandname1}&_sort=${price ? price : ""}&_order=${
              order ? order : ""
            }`
          : `?_sort=${price ? price : ""}&_order=${order ? order : ""}`
      }`
    )
    .then((res) => {
      setData(res.data);
      setDatac(res.data.length);
    });
}}
    setLoading(false);
  };
  const Getdc = () => {
    return useNavigate({ data: datac });
  };

  useEffect(() => {
    // Getdc()
    // console.log(catval);
    if (val == "revelence" || val == "") {
      getData();
    } else if (val == "pl") {
      getData("price", "asc");
    } else if (val == "ph") {
      getData("price", "desc");
    } else if (val == "d") {
      getData("discount", "asc");
    }
    console.log(catval);
  }, [val, isChecked, brandname1, toggle, datac,cat,catval]);

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
    <Box
      display="grid"
      gridTemplateColumns={toggle ? "repeat(6, 1fr)" : "repeat(3, 1fr)"}
      id="griditem"
      gap={toggle ? "5px" : "25px"}
      paddingLeft={"2px"}
      maxW={"100%"}
    >
      {data.map((e) => {
        {
          /* console.log(e); */
        }
        return (
          <Box
            key={e.id}
            onClick={() => navigate(`/singleproducts/${e.id}/${isChecked?"mens":"women"}`)}
            textAlign={"center"}
            bg="white"
            // border={"1px solid green"}
            marginBottom="20px"
            className="image-container"
            gap="15"
            // maxW="500px"
            height="470px"
          >
            <Box style={{ paddingBottom: "9px" }}>
              <Image src={e.image} width="100%" height={"380px"} />
              <Box className="text-overlay">
                <Text color={"#2c4154"} fontSize="16px">
                  Quick View
                </Text>
              </Box>
            </Box>
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
