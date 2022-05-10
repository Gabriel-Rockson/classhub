import React from "react";
import { useNavigate } from "react-router-dom";

// Chakra components
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
  Heading,
} from "@chakra-ui/react";

// Icons
import { MdOutlinePostAdd, MdDelete } from "react-icons/md";
import { IoEyeSharp } from "react-icons/io5";
import { BsFillPatchQuestionFill } from "react-icons/bs";

// Custom hooks
import { useGradeAndStudents } from "../hooks/custom-hooks";

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

// ! FIX - Warning: Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?
// ! This is the error that is preventing you from using tooltips or popovers, fix that and use popovers to show more information on the question marks

const AllAttendances = () => {
  const navigate = useNavigate();
  const { grade } = useGradeAndStudents();

  const handleAddAttendance = () => {
    navigate("/app/dashboard/class-attendance/add-attendance");
  };

  return (
    <Box>
      <Flex align="center" my={6}>
        <Heading fontSize={["lg", "xl"]} mr={5}>
          Class {grade?.grade}
        </Heading>

        <Button
          borderRadius={5}
          colorScheme={"telegram"}
          style={{ boxShadow: "none" }}
          size={["md"]}
          fontSize={"14px"}
          onClick={handleAddAttendance}
        >
          <Flex alignItems={"center"}>
            <Icon fontSize={"xl"} mr={2} as={MdOutlinePostAdd} /> Add Attendance
          </Flex>
        </Button>
      </Flex>

      <Flex mt={3} mb={6} justifyContent={"center"}>
        <Heading fontSize={["lg", "xl", "2xl"]}>
          All Recorded Attendances
        </Heading>
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
                      borderRadius={5}
                      colorScheme={"telegram"}
                      style={{ boxShadow: "none" }}
                      size={"sm"}
                      onClick={() => handleClick(number)}
                    >
                      <Flex alignItems={"center"}>
                        <Icon as={IoEyeSharp} mr={2} />
                        view
                      </Flex>
                    </Button>
                    <Button
                      borderRadius={5}
                      colorScheme={"red"}
                      style={{ boxShadow: "none" }}
                      size={"sm"}
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
