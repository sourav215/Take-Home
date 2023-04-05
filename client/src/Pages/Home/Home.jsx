import React, { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading,
  Text,
  useColorModeValue,
  Select,
  InputGroup,
  InputLeftAddon,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    destination: "",
    no_of_travellers: 1,
    budget_per_person: "",
  });
  const toast = useToast({ position: "top" });

  // Function to set form Input
  const handleFormInputChange = (e) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };

  // Function To Validate form
  const validateForm = ({
    name,
    email,
    destination,
    no_of_travellers,
    budget_per_person,
  }) => {
    if (!name) {
      toast({
        title: `Name is required`,
        status: "error",
        isClosable: true,
      });
      return false;
    }
    if (!email) {
      toast({
        title: `Email is required`,
        status: "error",
        isClosable: true,
      });
      return false;
    }
    if (!email.includes("@")) {
      toast({
        title: `Enter valid email`,
        status: "error",
        isClosable: true,
      });
      return false;
    }
    if (!destination) {
      toast({
        title: `Destination is required`,
        status: "error",
        isClosable: true,
      });
      return false;
    }
    if (!no_of_travellers || no_of_travellers == 0) {
      toast({
        title: `No Of Travellers is required`,
        status: "error",
        isClosable: true,
      });
      return false;
    }
    if (budget_per_person == 0) {
      toast({
        title: `Budget is required`,
        status: "error",
        isClosable: true,
      });
      return false;
    }
    return true;
  };

  // function to handle form submit
  const handleFormSubmit = async() => {
    if (!validateForm(formInput)) return;
    toast({
      title: `Form submitted`,
      status: "success",
      isClosable: true,
    });
    try {
      let response = await fetch("https://takehome.onrender.com/api/add",{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({...formInput,budget_per_person: "$"+formInput.budget_per_person })
      })
      let data = await response.json();
      console.log(data)
      setFormInput({
        name: "",
        email: "",
        destination: "",
        no_of_travellers: 1,
        budget_per_person: "",
      });
    } catch (error) {
      console.log(error);
      toast({
        title: `Couldn't Post Data`,
        status: "error",
        isClosable: true,
      });
    }
    
    navigate("/travel")
  };
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Travel Request Form</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            Please fill the correct Information ✈️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                type="name"
                name="name"
                value={formInput.name}
                onChange={handleFormInputChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                name="email"
                value={formInput.email}
                onChange={handleFormInputChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Where do you want to go?</FormLabel>
              <Select
                placeholder="Select Destination"
                name="destination"
                value={formInput.destination}
                onChange={handleFormInputChange}
              >
                <option value="India">India</option>
                <option value="Africa">Africa</option>
                <option value="Europe">Europe</option>
              </Select>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>No. of Travellers</FormLabel>
              <Input
                type="number"
                name="no_of_travellers"
                value={formInput.no_of_travellers}
                onChange={handleFormInputChange}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Budget Per Person</FormLabel>
              <InputGroup>
                <InputLeftAddon children="USD" />
                <Input
                  type="number"
                  name="budget_per_person"
                  value={formInput.budget_per_person}
                  onChange={handleFormInputChange}
                />
              </InputGroup>
            </FormControl>
            <Input
              type="submit"
              value={"Submit"}
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
              onClick={handleFormSubmit}
            />
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Home;
