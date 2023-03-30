import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";
import "./Admin.css";
import { useReducer } from "react";
import axios from "axios";
import Skeleton from "@mui/material/Skeleton";
import { Button, TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { Box, Card, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import { AiOutlineHome } from "react-icons/ai";
import { RiDatabase2Line, RiAdminLine } from "react-icons/ri";
import { MdProductionQuantityLimits } from "react-icons/md";
import { AiOutlineSetting, AiOutlineAppstore } from "react-icons/ai";
import { FiUserPlus } from "react-icons/fi";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
const initialState = {
  data: [],
  isLoading: false,
  error: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: false,
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        data: [],
        isLoading: false,
        error: true,
      };
    default:
      throw new Error();
  }
};
let categorys = [
  { label: "Kurtis" },
  { label: "Sarees" },
  { label: "Heels" },
  { label: "Earings" },
  { label: "Sunglasses" },
  { label: "Pants" },
  { label: "T-shirt" },
  { label: "kurta" },
  { label: "shirt" },
  { label: "jeans" },
];
export default function Admin() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { data, isLoading, error } = state;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [title, settitle] = useState("");
  const [price, setprice] = useState(0);
  const [image, setimage] = useState("");
  const [category, setcategory] = useState("");
  const [brand, setbrand] = useState("");
  const nav = useNavigate()
  useEffect(() => {
    dispatch({ type: "FETCH_REQUEST" });
    axios
      .get(`https://embarrassed-fly-yoke.cyclic.app/women`)
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data.reverse() });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_FAILURE", payload: err });
      });
  }, []);
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  const padd = (e) => {
    e.preventDefault()
    let discount = Math.floor(Math.random() * (50 - 20)) + 20;
    let offer_price = Math.floor(price - (discount / 100) * price);
    let obj = {
      title,
      price: +price,
      image,
      category,
      brand,
      discount,
      offer_price,
    };
    fetch(`https://embarrassed-fly-yoke.cyclic.app/women`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    });
  };
  return (
    <>
      <Box
        alignItems={"center"}
        className="adminnavbar"
        bg={"#159895"}
        mb={0}
        h={"60px"}
        w="100%"
        style={{
          marginBottom: "0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Heading marginLeft={50}>Master Admin</Heading>
        <Heading marginRight={50}>Admin name</Heading>
      </Box>
      <Flex className="body" style={{ marginTop: "10" }}>
        <Box
          className="leftPart"
          bg={"gray"}
          w="20%"
          style={{
            marginTop: "0",
            paddingTop: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "start",
          }}
        >
          <Text marginLeft={30} color={"white"}>
            <AiOutlineHome /> Dashboard
          </Text>
          <Text marginLeft={30} color={"white"}>
            <RiDatabase2Line /> Manage Order
          </Text>
          <Text marginLeft={30} color={"white"}>
            <MdProductionQuantityLimits /> Manage Products
          </Text>
          <Text marginLeft={30} color={"white"}>
            <AiOutlineSetting /> User Account Settings
          </Text>
          <Text marginLeft={30} color={"white"}>
            <AiOutlineAppstore />
            API Data Settings
          </Text>
          <Text marginLeft={30} color={"white"}>
            <RiAdminLine /> Admin Managment
          </Text>
          <Text marginLeft={30} color={"white"}>
            <FiUserPlus /> Add Admins
          </Text>
          <Text marginLeft={30} color={"white"}>
            Logout
          </Text>
        </Box>
        {isLoading ? (
          <Skeleton />
        ) : (
          <div>
            <button onClick={handleOpen} id="add">
              Add New Product +
            </button>
            <Paper
              sx={{ width: "100%", overflow: "hidden", marginTop: "20px" }}
            >
              <TableContainer sx={{ maxHeight: "77vh" }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow sx={{ bgcolor: "primary.main" }}>
                      <StyledTableCell align="center">No.</StyledTableCell>
                      <StyledTableCell align="center">Brand</StyledTableCell>
                      <StyledTableCell align="center">Image</StyledTableCell>
                      <StyledTableCell align="center">Price</StyledTableCell>
                      <StyledTableCell align="center">Category</StyledTableCell>
                      <StyledTableCell align="center">Edit</StyledTableCell>
                      <StyledTableCell align="center">Delete</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data?.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell align="center" component="th" scope="row">
                          {row.id}
                        </TableCell>
                        <TableCell align="center">{row.brand}</TableCell>
                        <TableCell align="center">
                          <img src={row.image} id="image" alt="" />
                        </TableCell>
                        <TableCell align="center">
                          ₹
                          {new Intl.NumberFormat("en-IN", {
                            maximumSignificantDigits: 3,
                          }).format(row.price)}
                        </TableCell>
                        <TableCell align="center">
                          {(row.category)}
                        </TableCell>
                        <TableCell align="center">
                          <button id="edit">Edit</button>
                        </TableCell>
                        <TableCell align="center">
                          <button id="delete">Delete</button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </div>
        )}
      </Flex>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <form action="" id="new">
            <TextField
              id="outlined-basic"
              onChange={(e) => settitle(e.target.value)}
              label="Title"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              onChange={(e) => setprice(e.target.value)}
              label="Price"
              variant="outlined"
            />
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={categorys}
              sx={{ width: 336 }}
              onChange={(event, value) => setcategory(value.label)}
              renderInput={(params) => (
                <TextField {...params} label="Category" />
              )}
            />
            <TextField
              id="outlined-basic"
              label="Brand"
              onChange={(e) => setbrand(e.target.value)}
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Image"
              onChange={(e) => setimage(e.target.value)}
              variant="outlined"
            />
            <Button variant="contained" onClick={padd}>
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
    </>
  );
}
