import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Spinner,
  Flex,
  useToast,
  Text,
} from "@chakra-ui/react";

const Travel = () => {
  const [loadingState, setLoadingState] = useState(true);
  const [allDetails, setAllDetails] = useState([]);
  const toast = useToast({ position: "top" });

  const getData = async () => {
    setLoadingState(true);
    try {
      let res = await fetch("http://localhost:8080/api/");
      let data = await res.json();
      setLoadingState(false);
      console.log(data);
      setAllDetails(data.data);
    } catch (error) {
      console.log(error);
      setLoadingState(false);
      toast({
        title: `Couldn't Get Data`,
        status: "error",
        isClosable: true,
      });
    }
  };
  useEffect(() => {
    getData();
  }, []);

  if (loadingState) {
    return (
      <Flex align={"center"} justify={"center"} p={"20"}>
        <Spinner
          alignItems={"center"}
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Flex>
    );
  }
  return (
    <TableContainer p={"10"} bg={"gray.50"} h={"100vh"}>
      <Text align={"center"} fontSize={"4xl"} marginBottom={"6"}>
        Travellers
      </Text>
      <Table variant="simple" bg={"white"}>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Email Address</Th>
            <Th>Destination</Th>
            <Th isNumeric>No of Travellers</Th>
            <Th isNumeric>Budget Per Person (USD)</Th>
          </Tr>
        </Thead>

        <Tbody>
          {allDetails.map(
            (
              { name, email, destination, no_of_travellers, budget_per_person },
              index
            ) => {
              return (
                <Tr key={index}>
                  <Td>{name}</Td>
                  <Td>{email}</Td>
                  <Td>{destination}</Td>
                  <Td isNumeric>{no_of_travellers}</Td>
                  <Td isNumeric>{budget_per_person}</Td>
                </Tr>
              );
            }
          )}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default Travel;
