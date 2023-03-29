import React, { useEffect } from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Box, Text,Input ,Tooltip
} from '@chakra-ui/react'

import { Link } from '@chakra-ui/react'
import { data } from './SingleProductData'
import {BsCircleFill} from 'react-icons/bs'
const SingleProductPage = () => {

  const { brand, title, price, discount, offer_price, category, image } = data

  // useEffect(()=>{

  // },[])

  return (
    <div>
      navbar
      <Box mx="auto" w="90%">

        {/* Navigate LInk Path  Start*/}
        <Box fontSize="sm" marginTop={10} >
          <Breadcrumb color='gray'>
            <BreadcrumbItem>
              <BreadcrumbLink href='#'>Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href='#'>Docs</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href='#'>Breadcrumb</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>

        {/* Navigate Link Path End    */}


        {/* middle Div start  */}


        <Box w="100%" p="0rem 12rem" display="flex" justifyContent='space-between'>
          {/* Product Images  */}

          <Box w="100">
            <img src={image} alt="img" />
          </Box>

          {/* Product Data  */}

          <Box w="40%">
            <Text fontSize='lg' color="#BFAC8E">{brand}</Text>
            <Text fontSize='lg'>{title}</Text>
            <Text fontSize='2xl' pt="14px">₹{offer_price}</Text>
            <Text fontSize='sm' display={'inline'} color="#BFAC8E">MRP <Text display={'inline'} textDecoration="line-through">₹{price}</Text> ({discount}% OFF)</Text>
            <Text color='gray'>Price inclusive of all taxes</Text>

            <Box width={"60%"}
              border={"1.5px dotted gray"}
              textAlign="start" p="1px"
              bg={"#fff8eb"}
              marginBottom="-3%"
              marginLeft="100px">
              <Text fontSize='xs'>Get it for ₹300</Text>
            </Box>
            <Box border={"1.5px dotted gray"} w="90%" display="flex" p="12px" justifyContent="space-between">
              <Box borderRight={"1px solid gray"}>
                <Text fontSize='xs' color="#BFAC8E">  Use Code TRENDS <Link href="#" color="black">T&C</Link></Text>
              </Box>
              <Box>
                <Text fontSize='xs'>  Get upto Extra 40% Off on 1499 and Above. Max Discount Rs. 1000.
                  <Link href="#">View All Products </Link></Text>
              </Box>
            </Box>


              {/* color */}
              <Box w="70%" gap={"22px"} display="flex" flexWrap="wrap" justifyContent={'space-evenly'} >
              <BsCircleFill color="#4C4C39" fontSize={"32px"}/>
              <BsCircleFill color="#222222" fontSize={"32px"}/>
              <BsCircleFill color="#292647" fontSize={"32px"}/>
              <BsCircleFill color="#484848" fontSize={"32px"}/>
              <BsCircleFill color="#254666" fontSize={"32px"}/>
              
              </Box>

          </Box>


        </Box>
      </Box>
    </div>
  )
}

export default SingleProductPage


