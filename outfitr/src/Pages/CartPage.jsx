import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  Image,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";


 
const CartPage = () => {
  const {userData} = useSelector((state) => state.authReducer)
  const [cartdata, setcartData] = useState([]);
  const navigate = useNavigate()
  const [price , setprice] = useState(0)
  const [qty , setqty] = useState(1)
 
  const orderPlaced = (id, obj={cart:[]})=> {
 
    axios.patch(`https://artistic-butternut-blossom.glitch.me/users/${userData.id}` ,obj)
     .then((res) => {
       console.log(res);
       navigate("/payment" , {state:{price:price}})
     })
     .catch((err) => console.log(err))
    //  console.log(userData, "from cart Page");
    
}
   
const handledelete = (id) => {
// console.log(id);
 const filterdata = cartdata?.filter((el) => el.id!=id)

 axios.patch(`https://artistic-butternut-blossom.glitch.me/users/${userData.id}` ,{cart:filterdata})
 .then((res) => {
  //  console.log(res);
   setcartData(filterdata)
  //  navigate("/")
 })
 .catch((err) => console.log(err))

}
      

useEffect(()=>{
axios.get(`https://artistic-butternut-blossom.glitch.me/users/${userData.id}`).then((res)=>{
  // console.log(res.data, "line 81")
  setcartData(res?.data?.cart)
})
 
 cartdata?.map((el)=> {

  return setprice(el.price*qty)
 })

},[userData.cart,qty])

 useEffect(() => {
  axios.get(`https://artistic-butternut-blossom.glitch.me/users/${userData.id}`).then((res)=>{
     let mydata = res?.data?.cart
       mydata?.map((el) => setprice((price) => (price+el.price)))
  })
   
 },[])
  return (
    <Box mt={10}>
      <Image
        margin={"auto"}
        src="https://assets.ajio.com/cms/AJIO/WEB/28032021-D-cartpagebanner-relianceones.jpg"
        alt="image1"
      />
     { cartdata.length!==0? <Box className="Body" w={"90%"} margin="auto" mt={10} >
        <Flex justifyContent={"space-between"}>
          <Text>My Bag(1 item)</Text>
          <Text>+ Add To Wishlist</Text>
        </Flex>
        <Flex mt={4}>
          <Box marginBottom={80} className="Productdispaly" w={"75%"}>
            {
              cartdata?.map((el) => {
                return (
                  <Flex>
                    <Image
                      w={"200px"}
                      h="200px"
                      src={el.image}
                      alt={el.title}
                      padding={5}
                    />
                   
                    <Grid  gap={10} ml={5} templateColumns="repeat(4, 1fr)">
                      <Text>{el.title}</Text>
                       <Flex gap={1}>
                        Size
                       <Select
                        w={"fit-content"}
                        placeholder="30"
                        size={"10px"}
                      >
                        <option value="option1">30</option>
                        <option value="option2">32</option>
                        <option value="option3">36</option>
                        <option value="option3">38</option>
                        <option value="option3">42</option>
                      </Select>
                       </Flex>
                     <Flex gap={1}>
                       QTY
                     <Select onChange={(e) => setqty(+e.target.value)} w={"fit-content"} placeholder={`selected${qty}`} size={"10px"}>
                     <option value="2">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </Select>
                     </Flex>
                      
                      <Text>Price: {el.price}</Text>
                      <Button
                       onClick={()=>handledelete(el.id)}
                        color={"#179ED5"}
                        ml={"25%"}
                        w={"fit-content"}
                        h="fit-content"
                        mt={"25px"}
                        bg="none"
                        border={"none"}
                      >
                        Delete
                      </Button>
                      <Flex gap={2} mt={"25px"}>
                        {" "}
                        <Text mt={1} color={"#179ED5"}>
                          <AiOutlineHeart />{" "}
                        </Text>{" "}
                        <Text color={"#179ED5"} mr={50}>
                          Add To WishList
                        </Text>
                      </Flex>
                      
                    </Grid>
                    
                  </Flex>
                )
              })}:
          </Box>
          <Box w={"25%"} h={"300px"} className="CartTotal">
            <Flex
              gap={7}
              flexDirection={"column"}
              bg={"#FAFAFA"}
              className="order details"
            >
              <Text fontWeight={"bold"}>Order Details</Text>
              <Flex gap={150} justifyContent={"space-around"}>
                <Text fontSize={"15px"}>Bag Total</Text>
                <Text fontSize={"15px"}>{price}</Text>
              </Flex>
              <Flex gap={120} justifyContent={"space-around"}>
                <Text fontSize={"15px"}>Bag Discount</Text>
                <Text fontSize={"15px"}>10%</Text>
              </Flex>
              <Flex gap={120} justifyContent={"space-around"}>
                <Text fontSize={"15px"}>Delivery Fee</Text>
                <Text fontSize={"15px"}>Free</Text>
              </Flex>
              <Flex gap={120} justifyContent={"space-around"}>
                <Text fontSize={"15px"}>Order Total</Text>
                <Text fontSize={"15px"}>{Math.floor(price/10)*9}</Text>
              </Flex>
              <Button
                _hover={{ backgroundColor: "#D5A249" }}
                border={"none"}
                color="white"
                bg={"#D5A249"}
                w={"100%"}
                h="50px"

                onClick={orderPlaced}
              >
                Place Order
              </Button>
            </Flex>
            <Box mt={5}>
              <Text fontWeight={"bold"}>Apply Coupon</Text>
              <Input h={35} padding="10px" placeholder="enter coupoun code"  />
              <Button
                _hover={{ backgroundColor: "#D5A249" }}
                border={"none"}
                color="white"
                bg={"#D5A249"}
                w={"100%"}
                h={"fit-content"}
                padding="10px"
              >
                Apply
              </Button>
            </Box>
          </Box>
        </Flex>
      </Box> :
        <Container>
          <Center > 
           
             <Image  src="https://cdn.dribbble.com/users/324185/screenshots/15805709/media/98798b7662d8a4b21cb66ad4bd430b48.jpg?compress=1&resize=800x600&vertical=top" alt="empty"/>
            </Center>
          <Center mt={5}> <Button mb={10} onClick={() => navigate("/")} _hover={{backgroundColor:"orange.100"}} bg={"orange"} w={"80%"}>Back To Home</Button></Center>
        </Container>
        
      }
    </Box>
  );
};

export default CartPage;