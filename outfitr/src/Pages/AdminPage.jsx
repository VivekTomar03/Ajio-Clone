import {
  Box,
  Text,
  Card,
  Grid,
  Flex,
  Image,
  Heading,
  Center,
} from "@chakra-ui/react";
import React from "react";
import "../Pages/AdminPage.css";
import { AiOutlineHome } from "react-icons/ai";
import { RiDatabase2Line, RiAdminLine } from "react-icons/ri";
import { MdProductionQuantityLimits } from "react-icons/md";
import { AiOutlineSetting, AiOutlineAppstore } from "react-icons/ai";
import { FiUserPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
  const navigate = useNavigate();
  const handleEndPoint = (path, pointname) => {
    navigate(`/${path}`, { state: { endpoint: pointname } });
  };

  return (
    <Box className="main">
      <Box className="LeftPart">
        <Text _hover={{ color: "orange" }} display={"flex"} gap="10px">
          <span style={{ marginTop: "5px" }}>
            <AiOutlineHome />
          </span>{" "}
          Dashboard
        </Text>
        <Text _hover={{ color: "orange" }} display={"flex"} gap="10px">
          <span style={{ paddingTop: "5px" }}>
            <RiDatabase2Line />{" "}
          </span>
          Manage Order
        </Text>
        <Text _hover={{ color: "orange" }} display={"flex"} gap="10px">
          <span style={{ paddingTop: "5px" }}>
            <MdProductionQuantityLimits />
          </span>
          Manage Products
        </Text>

        <Text _hover={{ color: "orangered" }} display={"flex"} gap="10px">
          <span style={{ paddingTop: "5px" }}>
            <AiOutlineSetting />
          </span>
          Account Settings
        </Text>

        <Text _hover={{ color: "orange" }} display={"flex"} gap="10px">
          <span style={{ paddingTop: "5px" }}>
            {" "}
            <AiOutlineAppstore />
          </span>
          API Data Settings
        </Text>
        <Text _hover={{ color: "orange" }} display={"flex"} gap="10px">
          <span style={{ paddingTop: "5px" }}>
            <RiAdminLine />
          </span>
          Admin Managment
        </Text>
        <Text _hover={{ color: "orange" }} display={"flex"} gap="10px">
          <span style={{ paddingTop: "5px", marginLeft: "2px" }}>
            <FiUserPlus />
          </span>
          Add Admins
        </Text>
        <Text _hover={{ color: "orange" }}>Logout</Text>
      </Box>
      <Box className="RightPart">
        <Center mt={5}>
          <Heading>Admin's Portal</Heading>
        </Center>
        <Grid margin={5} gridTemplateColumns={"repeat(3,1fr)"} gap={10}>
          <Card
            color={"white"}
            bg={"#150E56"}
            padding="20px"
            onClick={() => handleEndPoint("users", "users")}
          >
            <Flex justifyContent={"space-around"}>
              <Text fontWeight={"bold"} fontSize={"25px"} mt={5}>
                Count :10
              </Text>
              <Image
                w={"100px"}
                src="https://www.citypng.com/public/uploads/small/11640168385jtmh7kpmvna5ddyynoxsjy5leb1nmpvqooaavkrjmt9zs7vtvuqi4lcwofkzsaejalxn7ggpim4hkg0wbwtzsrp1ldijzbdbsj5z.png"
              />
            </Flex>
            <Center p={5}>
              <Text fontWeight={"bold"} fontSize={"32px"}>
                Manage users{" "}
              </Text>
            </Center>
          </Card>

          <Card
            color={"white"}
            bg={"#57C5B6"}
            padding="20px"
            onClick={() => handleEndPoint("users", "mens")}
          >
            <Flex justifyContent={"space-around"}>
              <Text fontWeight={"bold"} fontSize={"25px"} mt={5}>
                Count :50
              </Text>
              <Image
                w={"100px"}
                src="https://cdn2.iconfinder.com/data/icons/user-23/512/User_Group.png"
              />
            </Flex>
            <Center p={5}>
              <Text fontWeight={"bold"} fontSize={"32px"}>
                Manage Mens Products
              </Text>
            </Center>
          </Card>

          <Card
            color={"white"}
            bg={"#2D5C7F"}
            padding="20px"
            onClick={() => handleEndPoint("users", "women")}
          >
            <Flex justifyContent={"space-around"}>
              <Text fontWeight={"bold"} fontSize={"25px"} mt={5}>
                Count :50
              </Text>
              <Image
                w={"100px"}
                src="https://images.freeimages.com/fic/images/icons/747/network/256/user_group.png"
              />
            </Flex>
            <Center p={5}>
              <Text fontWeight={"bold"} fontSize={"32px"}>
                Manage Women Products{" "}
              </Text>
            </Center>
          </Card>

          <Card
            color={"white"}
            bg={"orange"}
            padding="20px"
            //for order amother function come
          >
            <Flex justifyContent={"space-around"}>
              <Text fontWeight={"bold"} fontSize={"25px"} mt={5}>
                Count :50
              </Text>
              <Image
                w={"150px"}
                h="100px"
                src="https://www.pngmart.com/files/3/Order-Now-PNG-Free-Download.png"
              />
            </Flex>
            <Center p={5}>
              <Text fontWeight={"bold"} fontSize={"32px"}>
                Manage users{" "}
              </Text>
            </Center>
          </Card>

          <Card color={"white"} bg={"#FF004D"} padding="20px">
            <Flex justifyContent={"space-around"}>
              <Text fontWeight={"bold"} fontSize={"25px"} mt={5}>
                {" "}
                Count: {Math.floor(Math.random() * 90000) + 100000}
              </Text>
              <Image
                w={"100px"}
                src="https://www.citypng.com/public/uploads/small/11640168385jtmh7kpmvna5ddyynoxsjy5leb1nmpvqooaavkrjmt9zs7vtvuqi4lcwofkzsaejalxn7ggpim4hkg0wbwtzsrp1ldijzbdbsj5z.png"
              />
            </Flex>
            <Center p={5}>
              <Text fontWeight={"bold"} fontSize={"32px"}>
                Total Revenue
              </Text>
            </Center>
          </Card>
        </Grid>
      </Box>
    </Box>
  );
};

export default AdminPage;
