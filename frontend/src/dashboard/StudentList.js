import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Chakra components
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
  Alert,
  AlertIcon,
  AlertDescription,
  AlertTitle,
  Stack,
} from "@chakra-ui/react";

// Custom hooks
import { useWindowWidth, useGradeAndStudents } from "../hooks/custom-hooks";

// Icons
import { MdPersonAdd } from "react-icons/md";
import { IoEyeSharp } from "react-icons/io5";

// Forms
import AddStudentForm from "../components/forms/AddStudentForm";

export default function StudentList() {
  const { isFetching, grade, students, currentUser, setStudents } =
    useGradeAndStudents();
  const windowWidth = useWindowWidth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const handleShowMore = (id) => {
    navigate(`/app/dashboard/class-list/${id}`);
  };

  if (isFetching) {
    return (
      <>
        <Flex justify="center" align="center" py={5}>
          <Spinner color="telegram.700" />
        </Flex>
      </>
    );
  }

  return (
    <>
      <Box>
        <Flex alignItems={"center"} my={6}>
          <Heading fontSize={["lg", "xl"]} mr={5}>
            Grade: {grade?.grade}
          </Heading>

          <Button
            borderRadius={5}
            colorScheme={"telegram"}
            style={{ boxShadow: "none" }}
            size={["md"]}
            fontSize={"14px"}
            shadow={"md"}
            onClick={onOpen}
          >
            <Flex alignItems={"center"}>
              <Icon fontSize={"xl"} mr={2} as={MdPersonAdd} /> Add Student
            </Flex>
          </Button>
        </Flex>

        {/* Form to add student */}
        <AddStudentForm
          isOpen={isOpen}
          onClose={onClose}
          setStudents={setStudents}
          grade={currentUser?.teacher_profile?.grade}
        />

        {windowWidth <= 1024 && (
          <Text as={"small"} color={"telegram.900"} fontWeight={"bold"}>
            Swipe on the table to reveal more data
          </Text>
        )}

        {!isFetching && students?.length === 0 && (
          <>
            <Flex py={5}>
              <Alert status="info">
                <Stack direction="column" spacing={5}>
                  <Flex direction="row">
                    <AlertIcon />
                    <AlertTitle>Empty Class</AlertTitle>
                  </Flex>
                  <AlertDescription>
                    Sorry!!! There are no students registered in this class yet,
                    you can click the 'Add Student' button to register a student
                  </AlertDescription>
                </Stack>
              </Alert>
            </Flex>
          </>
        )}

        {!isFetching && students?.length > 0 && (
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
                    <Tr key={student.id}>
                      <Td>{`${student.first_name} ${student.middle_name} ${student.last_name}`}</Td>
                      <Td>{student.gender_display}</Td>
                      <Td>{student.race_display}</Td>
                      <Td>{student.address}</Td>
                      <Td>{student.student_id}</Td>
                      <Td>
                        <Button
                          borderRadius={5}
                          colorScheme={"telegram"}
                          style={{ boxShadow: "none" }}
                          size={"sm"}
                          onClick={() => handleShowMore(student.id)}
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
