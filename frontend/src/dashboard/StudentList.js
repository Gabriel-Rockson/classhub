import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Flex,
  Text,
  Button,
  Heading,
  Icon,
  Table,
  Thead,
  Tbody,
  TableContainer,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";

import { MdPersonAdd } from "react-icons/md";
import { IoEyeSharp } from "react-icons/io5";

const data = {
  name: "Gabriel Rockson",
  gender: "Male",
  race: "Black / Black American",
  address: "Kotei Rd",
  student_id: "20594513",
};
function StudentList() {
  const navigate = useNavigate();

  const handleClick = (student_uid) => {
    navigate(`/app/dashboard/class-list/${student_uid}`);
  };

  return (
    <>
      <Box>
        <Flex alignItems={"center"} my={6}>
          <Heading fontSize={["lg", "xl"]} mr={5}>
            Class 2
          </Heading>

          <Button
            size={["md"]}
            fontSize={"14px"}
            borderRadius={0}
            style={{ boxShadow: "none" }}
            backgroundColor={"telegram.600"}
            color={"white"}
            _hover={{ backgroundColor: "facebook.800" }}
            _active={{ backgroundColor: "facebook.800" }}
            shadow={"md"}
          >
            <Flex alignItems={"center"}>
              <Icon fontSize={"xl"} mr={2} as={MdPersonAdd} /> Add Student
            </Flex>
          </Button>
        </Flex>

        <Text as={"small"} color={"telegram.900"} fontWeight={"bold"}>
          Swipe on the table to reveal more data
        </Text>
        <TableContainer mb={10} boxShadow="lg" rounded="md">
          <Table variant={"unstyled"}>
            <Thead borderBottom={"2px"} borderColor={"gray.200"}>
              <Tr>
                <Th>Name</Th>
                <Th>Gender</Th>
                <Th>Race</Th>
                <Th>Address</Th>
                <Th>Student ID</Th>
              </Tr>
            </Thead>
            <Tbody>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
                <Tr key={number}>
                  <Td>{data["name"]}</Td>
                  <Td>{data["gender"]}</Td>
                  <Td>{data["race"]}</Td>
                  <Td>{data["address"]}</Td>
                  <Td>{data["student_id"]}</Td>
                  <Td>
                    <Button
                      size={"sm"}
                      backgroundColor={"telegram.700"}
                      style={{ boxShadow: "none" }}
                      borderRadius={0}
                      _hover={{ backgroundColor: "telegram.800" }}
                      _active={{ backgroundColor: "telegram.800" }}
                      color="white"
                      onClick={() => handleClick(number)}
                    >
                      <Flex alignItems={"center"}>
                        <Icon as={IoEyeSharp} mr={2} />
                        view more
                      </Flex>
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}

export default StudentList;
