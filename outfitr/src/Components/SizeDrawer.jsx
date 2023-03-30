
import React from 'react'
import {BiLike,BiDislike} from 'react-icons/bi'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    Tabs, TabList, TabPanels, Tab, TabPanel, Text,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Checkbox,
    Divider,
    Box,
    Image
} from '@chakra-ui/react'






const SizeDrawer = ({ brand, image }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    return (
        <>
            <Button ref={btnRef} border="none" bgColor={"white"} size="xs" textColor="blue" onClick={onOpen}>
                check size chart
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
                size="lg"
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader size="md" >Brand : {brand}</DrawerHeader>

                    <DrawerBody>
                        <Tabs>
                            <TabList color="blackAlpha.900">
                                <Tab>Size Guide</Tab>
                                <Tab >How To Measure</Tab>

                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    <Text fontWeight={"bold"} display="inline">Garment Measurement </Text> <Text color={"gray"} display={"inline"}>(inches)</Text>

                                    {/* Table */}

                                    <TableContainer pt={"3.5"} width="70%">
                                        <Table variant='unstyled' size='sm'>
                                            <TableCaption><Box display={'flex'} gap="5px" justifyContent={"space-between"} width="50%">
                                    <Box><Text fontSize={"14px"} color={"gray"}>Was this information useful? </Text></Box>
                                    <Box display={'flex'} gap="8px" color={"gray"}><BiLike fontSize={"20px"}/><BiDislike fontSize={"20px"}/></Box>
                                    </Box></TableCaption>
                                            <Thead bg={"#ffffff"}>
                                                <Tr>
                                                    <Th>Size</Th>
                                                    <Th>Brand Size</Th>
                                                    <Th isNumeric>Waist</Th>
                                                    <Th isNumeric>Inseam</Th>
                                                </Tr>
                                            </Thead>
                                            <Tbody>
                                                <Tr>
                                                    <Td><Checkbox disabled>XS</Checkbox></Td>
                                                    <Td>XS</Td>
                                                    <Td isNumeric>28</Td>
                                                    <Td isNumeric>31</Td>

                                                </Tr>
                                                <Tr>
                                                    <Td><Checkbox>S</Checkbox></Td>
                                                    <Td>S</Td>
                                                    <Td isNumeric>30</Td>
                                                    <Td isNumeric>31</Td>

                                                </Tr>
                                                <Tr>
                                                    <Td><Checkbox>M</Checkbox></Td>
                                                    <Td>M</Td>
                                                    <Td isNumeric>32</Td>
                                                    <Td isNumeric>31</Td>

                                                </Tr>
                                                <Tr>
                                                    <Td><Checkbox>L</Checkbox></Td>
                                                    <Td>L</Td>
                                                    <Td isNumeric>34</Td>
                                                    <Td isNumeric>31</Td>

                                                </Tr>
                                                <Tr>
                                                    <Td><Checkbox>XL</Checkbox></Td>
                                                    <Td>XL</Td>
                                                    <Td isNumeric>36</Td>
                                                    <Td isNumeric>31</Td>

                                                </Tr>
                                                <Tr>
                                                    <Td><Checkbox>XXL</Checkbox></Td>
                                                    <Td>XXL</Td>
                                                    <Td isNumeric>38</Td>
                                                    <Td isNumeric>31</Td>

                                                </Tr>
                                            </Tbody>
                                        </Table>
                                    </TableContainer>

                                    <Divider />

                                    <Text pt={"10px"} fontWeight={"bold"} fontSize={'sm'}>Model Measurements</Text>
                                    <Box display={"flex"} gap="10px" pt={"12px"}>
                                        <Box w={"20%"}>
                                            <img width={"100%"} height="50%" src={image} alt='Product-Image' />
                                        </Box>
                                        <Box color={"#1A191C"}>
                                            <Text fontSize={'sm'}>Size:Medium</Text>
                                            <Text fontSize={'sm'}>Height:6'2"</Text>
                                            <Text fontSize={'sm'}>Waist:32"</Text>
                                        </Box>
                                    </Box>
                                    <Divider />
                                    <Text pt="12" color={'#1A191C'} fontSize="13px">Tip : If you dont find an exact match, go for the next size</Text>
                                </TabPanel>
                                <TabPanel>
                                    <Box boxSize='50%'>
                                        <Image src='https://www.ajio.com/sizeguide/SizeGuide_Trousrs.jpg' alt='description' />
                                    </Box>
                                    <Box display={'flex'} gap="5px" justifyContent={"space-between"} width="50%">
                                    <Box><Text color={"gray"}>Was this information useful? </Text></Box>
                                    <Box display={'flex'} gap="8px" color={"gray"}><BiLike fontSize={"25px"}/><BiDislike fontSize={"25px"}/></Box>
                                    </Box>
                                  
                                  <Divider />
                                </TabPanel>

                            </TabPanels>
                        </Tabs>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default SizeDrawer