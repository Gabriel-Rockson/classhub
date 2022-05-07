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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  VStack,
  Spinner,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import { useWindowWidth } from "../hooks/custom-hooks";

import { MdPersonAdd } from "react-icons/md";
import { IoEyeSharp } from "react-icons/io5";
import { HStack } from "@chakra-ui/react";

import AddStudentForm from "../forms/AddStudentForm";

import StudentService from "../services/student.service";

export default function StudentList() {
  const [students, setStudents] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const windowWidth = useWindowWidth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

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

  const handleClick = (student_uid) => {
    navigate(`/app/dashboard/class-list/${student_uid}`);
  };

  const handleFormSubmit = () => {};

  const initialValues = {
    first_name: "",
    middle_name: "",
    last_name: "",
    date_of_birth: "",
    gender: "M",
    race: "W",
    student_id: "",
    address: "",
    father_name: "",
    father_contact: "",
    mother_name: "",
    mother_contact: "",
    guardian_name: "",
    guardian_email: "",
    home_phone: "",
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

        <Modal
          isOpen={isOpen}
          onClose={onClose}
          scrollBehavior={"inside"}
          closeOnOverlayClick={false}
        >
          <ModalOverlay />
          <ModalContent borderRadius={0}>
            <ModalHeader>Add New Student</ModalHeader>
            <ModalCloseButton style={{ boxShadow: "none" }} color="red" />

            <ModalBody>
              <AddStudentForm
                initialValues={initialValues}
                handleFormSubmit={handleFormSubmit}
              />
            </ModalBody>

            <ModalFooter>
              <HStack spacing={5}>
                <Button
                  color="white"
                  borderRadius={0}
                  backgroundColor={"green.600"}
                  style={{ boxShadow: "none" }}
                  _hover={{ backgroundColor: "green.800" }}
                  _active={{ backgroundColor: "green.800" }}
                >
                  Add Student
                </Button>
                <Button
                  color="white"
                  borderRadius={0}
                  backgroundColor={"red.600"}
                  style={{ boxShadow: "none" }}
                  _hover={{ backgroundColor: "red.800" }}
                  _active={{ backgroundColor: "red.800" }}
                  onClick={onClose}
                >
                  Cancel
                </Button>
              </HStack>
            </ModalFooter>
          </ModalContent>
        </Modal>

        {windowWidth <= 1024 && (
          <Text as={"small"} color={"telegram.900"} fontWeight={"bold"}>
            Swipe on the table to reveal more data
          </Text>
        )}
        {isFetching && (
          <Flex justify="center" align="center" py={5}>
            <Spinner color="telegram.700" size={["md", "lg"]} />
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
              <TableCaption>Student List</TableCaption>
            </Table>
          </TableContainer>
        )}
      </Box>
    </>
  );
}
