import { Box, Center, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./product.css"
import { Card, CardHeader, CardBody, CardFooter, Image, Heading, Text, ButtonGroup, Button, Stack, Divider } from '@chakra-ui/react'
const ProductData = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([]);


  const getData = () => {
    setLoading(true)
    axios
      .get(`https://embarrassed-fly-yoke.cyclic.app/mens`)
      .then((res) => setData(res.data));
    setLoading(false)

  };
  useEffect(() => {

    getData();

  }, []);

  if (loading) {
    console.log("loading")
    return <Center marginTop={"10%"}>

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
  }
  return (
    <Box id="griditem" spacing="40px">
      {data.map((e) => {
        {/* console.log(e); */}
        return <Box key={e.id} onClick={()=>console.log(e.id)} textAlign={"center"} bg="white" marginBottom="20px"  className="image-container" gap="45" width={"303px"} height="445px">
        <div>

          <Image src={e.image} width="100%" height={"380px"} />
          <Box className="text-overlay" >
            <Text color={"#2c4154"} fontSize="16px">Quick View</Text></Box>
        </div>
          <Text className="image-text" fontSize={"13px"} color="#d5a249">{e.brand}</Text>
          <Text className="image-text" color={"#333333"} fontSize="13px">{e.title}</Text>
          <Text className="image-text" fontSize={"14px"} color="#333333">₹{e.price}</Text>
          <Text className="image-text" color={"#3ab649"} fontSize="12px">Offer price ₹{e.offer_price}</Text>
        </Box>;
      })}
    </Box>
  );
};

export default ProductData;
