import React, { useEffect } from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box, Text, Tooltip,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Fade, ScaleFade, Slide, SlideFade, Button, Collapse, Divider
} from '@chakra-ui/react'

import { Link } from '@chakra-ui/react'
import { data } from './SingleProductData'
import { BsCircleFill, BsBag } from 'react-icons/bs'
import SizeDrawer from '../Components/SizeDrawer'
import { CiLocationOn } from 'react-icons/ci'



function OrderList() {
  const [show, setShow] = React.useState(false)

  const handleToggle = () => setShow(!show)

  return (
    <>
      <Collapse in={show}>
        <UnorderedList fontSize="14px">
          <ListItem display={'flex'} gap="10px"><span>MRP</span> <span>:Rs. 599.00 inclusive of all taxes(MRP changes as per size selection)</span></ListItem>

          <ListItem display={'flex'} gap="10px"><Text>Marketed By</Text> <Text>:
            Marks & Spencer, Ground Floor, Infinity Tower C, Cyber City, DLF Phase 2, Gurgaon – 122002, Haryana, India</Text></ListItem>
          <ListItem display={'flex'} gap="10px"><Text>Net Qty</Text> <Text>: 1N</Text></ListItem>
          <ListItem display={'flex'} gap="10px"><Text>Manufactured By</Text> <Text>: Reliance Retail Limited Shed No-77/80, Indian Corporation Godown Mankoli Naka, Village Dapode Taluka, Bhiwandi Dist. Thane Maharashtra PIN-421302</Text></ListItem>
          <ListItem display={'flex'} gap="10px"><Text>Country Of Origin</Text> <Text>: India</Text></ListItem>
          <ListItem display={'flex'} gap="10px"><Text>Customer Care Address</Text> <Text>:
            AJIO, c/o Reliance Retail Limited, SS Plaza, 74/2 Outer Ring Road, 29th Main Road, BTM 1st Stage, BTM Layout, Bangalore 560068, Karnataka, INDIA. Ph. 1800-889-9991. E-mail - customercare@ajio.com</Text></ListItem>
          <ListItem display={'flex'} gap="10px"><Text>Commodity</Text> <Text>:Men's Track Pants
          </Text></ListItem>

        </UnorderedList>
      </Collapse>
      <Button bg={"#fffff"} size='8px' onClick={handleToggle} mt='0.1rem'>
        {show ? 'Less details' : '  Other information '}
      </Button>
    </>
  )
}


const SingleProductPage = () => {

  const { brand, title, price, discount, offer_price, category, image } = data

  // useEffect(()=>{

  // },[])




  return (
    <div>
      navbar
      <Box mx="auto" w="95%"  border={"1px solid black"}>

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


        <Box w="100%" p="0rem 5rem"
          display="flex" gap="50px" justifyContent='space-between' flexDirection={{ base: "column", md: "row" }} border="1px solid black">
          {/* Product Images  */}

          <Box w="100%" border={"1px solid black"}>
            <img src={image} alt="img" />
          </Box>

          {/* Product Data  */}

          <Box w="40%" margin={"auto"} border="1px solid black" >
            <Text pt="10px" textAlign={"center"} fontSize='lg' color="#BFAC8E">{brand}</Text>
            <Text textAlign={"center"} fontSize='lg'>{title}</Text>
            <Text textAlign={"center"} fontSize='2xl' pt="14px">₹{offer_price}</Text>
            <Text paddingLeft={"100px"} fontSize='sm' display={'inline'} color="#BFAC8E">MRP <Text   display={'inline'} textDecoration="line-through">₹{price}</Text> ({discount}% OFF)</Text>
            <Text textAlign={"center"} color='gray' marginBottom={"12px"}>Price inclusive of all taxes</Text>

            {/* <Box width={"60%"}
              border={"1.5px dotted gray"}
              textAlign="start" p="1px"
              bg={"#fff8eb"}
              marginBottom="-3%"
              marginLeft="100px">
              <Text fontSize='xs'>Get it for ₹300</Text>
            </Box> */}
            <Box border={"1.5px dotted gray"} w="90%" display="flex" margin={"auto"} p="12px" justifyContent="space-between">
              <Box borderRight={"1px solid gray"}>
                <Text fontSize='xs' color="#BFAC8E">  Use Code TRENDS <Link href="#" color="black">T&C</Link></Text>
              </Box>
              <Box paddingLeft={"10px"}> 
                <Text fontSize='xs'>  Get upto Extra 40% Off on 1499 and Above. Max Discount Rs. 1000.
                  <Link href="#">View All Products </Link></Text>
              </Box>
            </Box>


            {/* color */}
            <Box pt="5px" w="50%" m="auto" marginTop={"12px"} gap={"5px"} display="grid "  gridTemplateColumns={"repeat(4,1fr)"} alignItems={"center"} >

              <Tooltip label="Olive" aria-label='A tooltip' fontSize='xs'>
                <span> <BsCircleFill color="#4C4C39" fontSize={"32px"} /></span>
              </Tooltip>

              <Tooltip label="jet-black" aria-label='A tooltip' fontSize='xs'>
                <span> <BsCircleFill color="#222222" fontSize={"32px"} /></span>
              </Tooltip>

              <Tooltip label="navy" aria-label='A tooltip' fontSize='xs'>
                <span> <BsCircleFill color="#292647" fontSize={"32px"} /></span>
              </Tooltip>

              <Tooltip label="dark-grey" aria-label='A tooltip' fontSize='xs'>
                <span> <BsCircleFill color="#484848" fontSize={"32px"} /></span>
              </Tooltip>

              <Tooltip label="teal" aria-label='A tooltip' fontSize='xs' >
                <span> <BsCircleFill color="#254666" fontSize={"32px"} /></span>
              </Tooltip>

            </Box>


            {/* Size Drawer */}

            <Box p={"20px 0px"}  width="40%" margin={"auto"}  >
              <SizeDrawer   brand={brand} image={image} />
            </Box>
            <Box bg={"#FDF8EB"} padding="10px" fontSize={'sm'} display="flex" w="100%" margin={"auto"}>
              <CiLocationOn fontSize={"22px"} />
              <Text>
                Select your size to know your estimated delivery date.</Text>
            </Box>

            {/* buuton  */}
            <Box width={"100%"}
            marginTop={"8px"}
              as='button'
              height='48px'
              lineHeight='1.2'
              transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
              border='1px'
              px='80px'

              fontSize='14px'
              fontWeight='semibold'
              bg='#D5A249'
              borderColor='#ffffff'
              color='#ffffff'
              _hover={{ bg: '#D5A249', border: "1px solid #ffffff" }}
              _active={{
                bg: '#D5A249',
                transform: 'scale(0.98)',
                borderColor: '#ffffff'
              }}
              _focus={{
                boxShadow:
                  '0 0 1px 2px #D5A249, 0 1px 1px rgba(255, 255, 255, 0.15)',
              }}
            >
              <Box display="flex" flexDirection={"row"} gap={"10px"}>
                <BsBag />
                <Text> ADD TO BAG</Text>
              </Box>

            </Box>

            <Text color={'gray'} fontSize="11px" textAlign={"center"} marginBottom={"25px"}>HANDPICKED STYLES | ASSURED QUALITY</Text>

            {/* Add to WIshlist Button  */}


            <Box width={"100%"}
              as='button'
              height='48px'
              lineHeight='1.2'
              transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
              border='1px'
              px='60px'
              margin="auto"
              fontSize='14px'
              fontWeight='semibold'
              bg='#ffffff'
              borderColor='#D5A249'
              color='#D5A249'
              _hover={{ bg: '#ffffff', border: "1px solid #D5A249" }}
              _active={{
                bg: '#ffffff',
                transform: 'scale(0.98)',
                borderColor: '#D5A249'
              }}
              _focus={{
                boxShadow:
                  '0 0 1px 2px #ffffff, 0 1px 1px rgba(255, 255, 255, 0.15)',
              }}
            >
              <Box display="flex" gap={"10px"}>
                <BsBag />
                <Text> SAVE TO WISHLIST</Text>
              </Box>

            </Box>

            <Box textAlign={"left"}>
              <Text marginBottom={"5px"} color={"teal"} fontWeight={"bold"} fontSize="13px" textAlign={'left'}>Product Details</Text>
              <UnorderedList textAlign={"left"} fontSize="14px">
                <ListItem>Insert pockets</ListItem>
                <ListItem>Contrast taping</ListItem>
                <ListItem>Machine wash</ListItem>
                <ListItem>100% polyester</ListItem>
                <ListItem>Product Code: 440971924001</ListItem>
                <ListItem color={'teal'}><Link href='#'>About PERFORMAX</Link></ListItem>
              </UnorderedList>
              <OrderList />
            </Box>

            
          </Box>



        </Box>
        <Box display={'flex'} margin="auto" justifyContent="space-evenly" w={"90%"}><Divider/>  <Box ><Text>About {brand}</Text></Box> <Divider/> </Box>
      </Box>
    </div>
  )
}

export default SingleProductPage


