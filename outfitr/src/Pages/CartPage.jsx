import { Box, Button, Flex, Grid, Image, Input, Select, Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai';
const inistate = {
    "image": "https://assets.ajio.com/medias/sys_master/root/20220927/pNT8/6332df42aeb269dbb3aa32c0/performax_jet_black_fastdry_active_essential_track_pants.jpg",
    "brand": "PERFORMAX",
    "title": "Fastdry Active Essential Track Pants",
    "price": 419,
    "discount": 30,
    "offer_price": 300,
    "id": 1,
    "category": "Pants"
  }
const CartPage = () => {
 const [cartdata , setcartData] = useState([inistate])  
  return (
    <Box mt={100}>
       <Image src='https://assets.ajio.com/cms/AJIO/WEB/28032021-D-cartpagebanner-relianceones.jpg' alt='image1'/>
      <Box className='Body' w={"90%"} margin="auto" mt={40}>
          <Flex justifyContent={"space-between"}>
          <Text>My Bag(1 item)</Text>
          <Text>+ Add To Wishlist</Text>
          </Flex>
         <Flex>
             <Box className='Productdispaly' w={"75%"}>
                {
                    cartdata && cartdata.map((el)=> {
                       return <Flex>
                         <Image w={"200px"}h="200px" src={el.image} alt={el.title}/>
                        <Grid templateColumns='repeat(4, 1fr)'>
                           
                          
                            <Text>{el.title}</Text>
                            <Select placeholder='size' size={"10px"} mt="25px">
                            <option value='option1'>30</option>
                            <option value='option2'>32</option>
                            <option value='option3'>36</option>
                            <option value='option3'>38</option>
                            <option value='option3'>42</option>
                            </Select>
                            <Select placeholder='Qty' size={"10px"}  mt="25px">
                            <option value='option1'>1</option>
                            <option value='option2'>2</option>
                            <option value='option3'>3</option>
                            <option value='option3'>4</option>
                            <option value='option3'>5</option>
                            </Select>
                            <Text>Price: {el.price}</Text>
                            <Button color={"#179ED5"} ml={"30%"} w={"fit-content"} h="fit-content" mt={"25px"} bg="none" border={"none"}>Delete</Button>
                             <Text color={"#179ED5"} mr={50}><AiOutlineHeart/> Add To WishList</Text>
                       </Grid>
                       </Flex>
                    })
                }
                    
             </Box>
             <Box w={"25%"}  className='CartTotal' >
                   <Box bg={"#FAFAFA"} w={"100%"}  className="order details">
                     <Text >Order Details</Text>
                      <Flex gap={150} justifyContent={"space-around"}>
                        <Text fontSize={"15px"}>Bag Total</Text>
                        <Text fontSize={"15px"}>200</Text>
                      </Flex>
                      <Flex gap={120} justifyContent={"space-around"}>
                        <Text fontSize={"15px"}>Bag Discount</Text>
                        <Text fontSize={"15px"}>20100</Text>
                      </Flex>
                      <Flex gap={120} justifyContent={"space-around"}>
                        <Text fontSize={"15px"}>Delivery Fee</Text>
                        <Text fontSize={"15px"}>Free</Text>
                      </Flex>
                       <Flex gap={120} justifyContent={"space-around"}>
                        <Text fontSize={"15px"}>Order Total</Text>
                        <Text fontSize={"15px"}>Free</Text>
                      </Flex>
                       <Button border={"none"} color="white" bg={"#D5A249"} w={"100%"} h="50px">Place Order</Button>
                   </Box>
                   <Box>
                    <Text>Apply Coupon</Text>
                    <Input h={30} padding="3px" placeholder='enter coupoun code'/>
                     <Button  h={40} padding="10px">Apply</Button>
                   </Box>
             </Box>
         </Flex>
      </Box>
    </Box>
  )
}

export default CartPage
