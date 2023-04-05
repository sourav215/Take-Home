import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

const Travel = () => {
  return (
    <TableContainer p={"10"} bg={"gray.50"} h={"100vh"}>
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
          <Tr>
            <Td>Sourav Jana</Td>
            <Td>sourav10080@gmail.com</Td>
            <Td>India</Td>
            <Td isNumeric>3</Td>
            <Td isNumeric>$ 1200</Td>
          </Tr>
          <Tr>
            <Td>Sourav Jana</Td>
            <Td>sourav10080@gmail.com</Td>
            <Td>India</Td>
            <Td isNumeric>3</Td>
            <Td isNumeric>$ 1200</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default Travel;
