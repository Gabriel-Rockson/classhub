import React from "react";
import { useNavigate } from "react-router-dom";
import {
  TableContainer,
  Table,
  Thead,
  Tbody,
  Th,
  Tr,
  Td,
  Button,
  Flex,
  Icon,
  HStack,
  Box,
  Tooltip,
} from "@chakra-ui/react";

import { MdOutlinePostAdd, MdDelete } from "react-icons/md";
import { IoEyeSharp } from "react-icons/io5";
import { BsFillPatchQuestionFill } from "react-icons/bs";

const data = {
  date: "Tue May 03 2022",
};

const QuestionIcon = () => {
  return (
    <Icon
      cursor="pointer"
      color={"telegram.600"}
      fontSize={"xl"}
      ml={2}
      as={BsFillPatchQuestionFill}
    />
  );
};


// FIX - Warning: Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?
// This is the error that is preventing you from using tooltips or popovers, fix that and use popovers to show more information on the question marks

const AllAttendances = () => {
  const navigate = useNavigate();

  const handleAddAttendance = () => {
    navigate("/app/dashboard/class-attendance/add-attendance");
  };

  return (
    <Box>
      <Flex my={6}>
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
          onClick={handleAddAttendance}
        >
          <Flex alignItems={"center"}>
            <Icon fontSize={"xl"} mr={2} as={MdOutlinePostAdd} /> Add Attendance
          </Flex>
        </Button>
      </Flex>

      <TableContainer py={4} boxShadow="lg" rounded="md">
        <Table variant={"unstyled"}>
          <Thead borderBottom={"2px"} borderColor={"gray.200"}>
            <Tr>
              <Th>Date Submitted</Th>
              <Th>Present</Th>
              <Th>
                <Flex alignItems={"center"}>
                  SC-UNEX <QuestionIcon />
                </Flex>
              </Th>
              <Th>
                <Flex alignItems={"center"}>
                  SC-ETRD
                  <QuestionIcon />
                </Flex>
              </Th>
              <Th>
                <Flex alignItems={"center"}>
                  SC-UTRD <QuestionIcon />
                </Flex>
              </Th>
              <Th>
                <Flex alignItems={"center"}>
                  SC-VTP <QuestionIcon />
                </Flex>
              </Th>
              {/* TODO add tooltips to show the full of the code */}
            </Tr>
          </Thead>
          <Tbody>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
              <Tr key={number}>
                <Td>{data["date"]}</Td>
                <Td>3</Td>
                <Td>5</Td>
                <Td>3</Td>
                <Td>5</Td>
                <Td>3</Td>
                <Td>
                  <HStack spacing={4}>
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
                        view
                      </Flex>
                    </Button>
                    <Button
                      size={"sm"}
                      backgroundColor={"red.700"}
                      style={{ boxShadow: "none" }}
                      borderRadius={0}
                      _hover={{ backgroundColor: "red.800" }}
                      _active={{ backgroundColor: "red.800" }}
                      color="white"
                      onClick={() => handleClick(number)}
                    >
                      <Flex alignItems={"center"}>
                        <Icon as={MdDelete} mr={2} />
                        delete
                      </Flex>
                    </Button>
                  </HStack>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AllAttendances;
