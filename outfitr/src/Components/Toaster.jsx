import React from 'react'
import { useToast,Box } from '@chakra-ui/react'
import { BsBag } from 'react-icons/bs'

const Toaster = () => {
    const toast = useToast()
    return (
      <Box
      
       style={{ width:"100%" , height:"100%" }}
        onClick={() =>
          toast({
            title: 'Product Added',
            description: "We've added your Product.",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
        }
      >
        <Box display="flex" alignItems={"center"} justifyContent={'center'}  fontSize='14px'
              fontWeight='semibold' flexDirection={"row"} gap={"10px"} width={"100%"} height={"100%"}>
         <BsBag />  ADD TO BAG
        </Box>
      </Box>
    )
}

export default Toaster