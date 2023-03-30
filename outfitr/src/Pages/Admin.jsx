import React, { useEffect, useState } from "react";
import "./Admin.css";
import { useNavigate } from 'react-router-dom'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Box,
  Text,
  Card,
  Grid,
  Flex,
  Image,
  Heading,
  Center,
} from "@chakra-ui/react";
import { AiOutlineHome } from "react-icons/ai";
import { RiDatabase2Line, RiAdminLine } from "react-icons/ri";
import { MdProductionQuantityLimits } from "react-icons/md";
import { AiOutlineSetting, AiOutlineAppstore } from "react-icons/ai";
import { FiUserPlus } from "react-icons/fi";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
export default function Admin() {
  const navigate=useNavigate()
  const { isOpen: isAdd, onOpen: onAdd, onClose: onAddClose } = useDisclosure();
  const {
    isOpen: isEdit,
    onOpen: onEdit,
    onClose: onEditClose,
  } = useDisclosure();
  const [data, setdata] = useState();
  const [title, settitle] = useState();
  const [price, setprice] = useState();
  const [category, setcategory] = useState();
  const [brand, setbrand] = useState();
  const [image, setimage] = useState();
  const [url, seturl] = useState(`https://embarrassed-fly-yoke.cyclic.app/women`);
  const [etitle, setetitle] = useState();
  const [eprice, seteprice] = useState();
  const [ecategory, setecategory] = useState();
  const [ebrand, setebrand] = useState();
  const [eimage, seteimage] = useState();
  const [eid, seteid] = useState();
  useEffect(() => {
    fetch(`${url}`)
      .then((res) => res.json())
      .then((data) => setdata(data.reverse()));
  }, []);
  const onadd = (e) => {
    e.preventDefault()
    let discount = Math.floor(Math.random() * (50 - 20)) + 20;
    let offer_price = Math.floor(price - (discount / 100) * price);
    let obj = {
      title,
      price: +price,
      category,
      brand,
      image,
      discount,
      offer_price,
    };
    fetch(`${url}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    });
    // navigate("/admin")
  };

  const Aa = (e) => {
    fetch(`${url}/${e}`)
      .then((res) => res.json())
      .then((data) => {
        setetitle(data.title);
        setebrand(data.brand);
        seteimage(data.image);
        seteprice(data.price);
        setecategory(data.category);
        seteid(data.id);
      });
  };
  const onedit = (e) => {
    e.preventDefault();
    let obj = {
      title: etitle,
      price: +eprice,
      category: ecategory,
      brand: ebrand,
      image: eimage,
    };
    console.log(obj);
    fetch(`${url}/${eid}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    });
    // navigate("/admin")
  };
  const Delete = (e) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-ui">
            <h1>You want to delete this file?</h1>
            <button id="no" onClick={onClose}>
              No
            </button>
            <button
              id="yes"
              onClick={() => {
                fetch(`${url}/${e}`, {
                  method: "DELETE",
                });
                onClose();
                // navigate("/admin")
              }}
            >
              Yes, Delete it!
            </button>
          </div>
        );
      },
    });
  };
  return (
    <div className="main">
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
      <div style={{ display: "flex", flexDirection: "column",marginTop:"15px" }}>
        <div>
          <button onClick={onAdd} id="add">
            Add New Product
          </button>
        </div>
        <div id="div">
          <table>
            <thead>
              <tr>
                <th>No.</th>
                <th>Brand</th>
                <th>Image</th>
                <th>Price</th>
                <th>Category</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.brand}</td>
                  <td>
                    <img src={row.image} id="image" alt="" />
                  </td>
                  <td>
                    ₹
                    {new Intl.NumberFormat("en-IN", {
                      maximumSignificantDigits: 3,
                    }).format(row.price)}
                  </td>
                  <td>{row.category}</td>
                  <td>
                    <button
                      id="edit"
                      onClick={(e) => {
                        onEdit();
                        Aa(row.id);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button id="delete" onClick={(e) => Delete(row.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Modal isOpen={isAdd} onClose={onAddClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form action="">
              <input
                type="text"
                placeholder="Title"
                required
                onChange={(e) => {
                  settitle(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Brand"
                required
                onChange={(e) => {
                  setbrand(e.target.value);
                }}
              />
              <input
                type="url"
                placeholder="Image"
                required
                onChange={(e) => {
                  setimage(e.target.value);
                }}
              />
              <input
                type="number"
                placeholder="Price"
                required
                onChange={(e) => {
                  setprice(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Category"
                required
                onChange={(e) => {
                  setcategory(e.target.value);
                }}
              />
              <input type="submit" value="Submit" onClick={onadd} />
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Modal isOpen={isEdit} onClose={onEditClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form action="">
              <input
                type="text"
                placeholder="Title"
                required
                value={etitle}
                onChange={(e) => {
                  setetitle(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Brand"
                required
                value={ebrand}
                onChange={(e) => {
                  setebrand(e.target.value);
                }}
              />
              <input
                type="url"
                placeholder="Image"
                required
                value={eimage}
                onChange={(e) => {
                  seteimage(e.target.value);
                }}
              />
              <input
                type="number"
                placeholder="Price"
                required
                value={eprice}
                onChange={(e) => {
                  seteprice(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Category"
                required
                value={ecategory}
                onChange={(e) => {
                  setecategory(e.target.value);
                }}
              />
              <input type="submit" value="Edit" onClick={onedit} />
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}