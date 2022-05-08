import React, { useEffect, useState } from "react";
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
  useDisclosure,
  Spinner,
} from "@chakra-ui/react";
import { useWindowWidth } from "../hooks/custom-hooks";

import { MdPersonAdd } from "react-icons/md";
import { IoEyeSharp } from "react-icons/io5";

import AddStudentForm from "../components/forms/AddStudentForm";

import StudentService from "../services/student.service";

export default function StudentList() {
  const [students, setStudents] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const windowWidth = useWindowWidth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  // TODO fetch the students related to the class that has been opened
  useEffect(() => {
    setIsFetching(true);
    StudentService.getStudentList()
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        // TODO display the error that will arise in an alert on the page
        console.error(error);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, []);

  const handleShowMore = (student_uid) => {
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
            onClick={onOpen}
          >
            <Flex alignItems={"center"}>
              <Icon fontSize={"xl"} mr={2} as={MdPersonAdd} /> Add Student
            </Flex>
          </Button>
        </Flex>

        <AddStudentForm
          isOpen={isOpen}
          onClose={onClose}
          setStudents={setStudents}
        />

        {windowWidth <= 1024 && (
          <Text as={"small"} color={"telegram.900"} fontWeight={"bold"}>
            Swipe on the table to reveal more data
          </Text>
        )}
        {isFetching && (
          <Flex justify="center" align="center" py={5}>
            <Spinner color="telegram.700" size={["xl", "2xl"]} />
          </Flex>
        )}
        {!isFetching && (
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
                {!isFetching &&
                  students?.map((student) => (
                    <Tr key={student.student_uid}>
                      <Td>{`${student.first_name} ${student.middle_name} ${student.last_name}`}</Td>
                      <Td>{student.gender_display}</Td>
                      <Td>{student.race_display}</Td>
                      <Td>{student.address}</Td>
                      <Td>{student.student_id}</Td>
                      <Td>
                        <Button
                          size={"sm"}
                          backgroundColor={"telegram.700"}
                          style={{ boxShadow: "none" }}
                          borderRadius={0}
                          _hover={{ backgroundColor: "telegram.800" }}
                          _active={{ backgroundColor: "telegram.800" }}
                          color="white"
                          onClick={() => handleShowMore(student.student_uid)}
                        >
                          <Flex alignItems={"center"}>
                            <Icon as={IoEyeSharp} mr={2} />
                            show more
                          </Flex>
                        </Button>
                      </Td>
                    </Tr>
                  ))}
              </Tbody>
              <TableCaption>Student List</TableCaption>
            </Table>
          </TableContainer>
        )}
        {/* TODO add class statistics, graphs and numbers showing the class details */}
      </Box>
    </>
  );
}
