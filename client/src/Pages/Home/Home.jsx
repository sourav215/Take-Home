import React from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Select,
  HStack,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";

const Home = () => {
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
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input type="name" />
            </FormControl>
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl>
              <FormLabel>Where do you want to go?</FormLabel>
              <Select placeholder="Select option">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>No. of Travellers</FormLabel>
              <Input type="number" />
            </FormControl>

            <FormControl>
              <FormLabel>Budget Per Person</FormLabel>
              <InputGroup>
                <InputLeftAddon children="$ USD" />
                <Input type="number" placeholder="phone number" />
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
            />
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Home;
