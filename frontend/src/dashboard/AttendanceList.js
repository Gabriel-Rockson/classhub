import React, { useState, useEffect } from "react";
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

// Services
import ClassService from "../services/class.service";

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

// ! This is the error that is preventing you from using tooltips or popovers, fix that and use popovers to show more information on the question marks

const AllAttendances = () => {
  const navigate = useNavigate();
  const { grade } = useGradeAndStudents();
  const [allAttendances, setAllAttendances] = useState(null);

  useEffect(() => {
    if (grade) {
      ClassService.getGradeAttendaces(grade?.id)
        .then((response) => setAllAttendances(response?.data))
        .catch((error) => console.log(error));
    }
  }, [grade]);

  // Function to group the attendances according to when they were created
  const groupAttendances = (array, key) => {
    return array?.reduce((groupedAttendances, currentAttendance) => {
      (groupedAttendances[currentAttendance[key]] =
        groupedAttendances[currentAttendance[key]] || []).push(
        currentAttendance
      );
      return groupedAttendances;
    }, {});
  };

  const rows = [];
  const groupedAttendances = groupAttendances(allAttendances, "created");

  if (allAttendances) {
    for (let key in groupedAttendances) {
      const attendances = groupedAttendances[key];

      const groupedTypes = attendances.reduce((groupedTypes, attendance) => {
        const {
          PRESENT = 0,
          UNEX = 0,
          ETRD = 0,
          UTRD = 0,
          VTP = 0,
        } = groupedTypes;
        if (attendance.attendance === "P") {
          return { ...groupedTypes, PRESENT: PRESENT + 1 };
        } else if (attendance.attendance === "UNEX") {
          return { ...groupedTypes, UNEX: UNEX + 1 };
        } else if (attendance.attendance === "ETRD") {
          return { ...groupedTypes, ETRD: ETRD + 1 };
        } else if (attendance.attendance === "UTRD") {
          return { ...groupedTypes, UTRD: UTRD + 1 };
        } else if (attendance.attendance === "VTP") {
          return { ...groupedTypes, VTP: VTP + 1 };
        }
      }, {});
      rows.push(
        <Tr key={key}>
          <Td>{new Date(key).toDateString()}</Td>
          <Td>{groupedTypes?.PRESENT || "-"}</Td>
          <Td>{groupedTypes?.UNEX || "-"}</Td>
          <Td>{groupedTypes?.ETRD || "-"}</Td>
          <Td>{groupedTypes?.UTRD || "-"}</Td>
          <Td>{groupedTypes?.VTP || "-"}</Td>
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
      );
    }
  }

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
          <Tbody>{rows}</Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AllAttendances;
