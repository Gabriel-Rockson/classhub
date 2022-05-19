import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Chakra components
import {
  Box,
  Flex,
  Text,
  Heading,
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Icon,
  Spinner,
} from "@chakra-ui/react";

// Icons
import { AiOutlineRollback } from "react-icons/ai";

// Services
import StudentService from "../services/student.service";
import { Stack } from "@chakra-ui/react";

function StudentDetail() {
  const [studentData, setStudentData] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setIsFetching(true);
    StudentService.getStudentData(id)
      .then((response) => {
        setStudentData(() => response.data);
      })
      .catch((error) => {
        // TODO properly display the error and do something about it HANDLE IT
        console.error(error);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, []);

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
      <Button
        borderRadius={5}
        colorScheme={"orange"}
        style={{ boxShadow: "none" }}
        my={6}
        size={["md"]}
        fontSize={"14px"}
        onClick={() => navigate(-1)}
      >
        <Flex alignItems={"center"}>
          <Icon as={AiOutlineRollback} mr={2} /> Attendance List
        </Flex>
      </Button>

      <Heading
        py={4}
        textAlign={"center"}
        color="gray.600"
        fontSize={["lg", "xl", "2xl"]}
      >
        {`${studentData?.first_name} ${studentData?.middle_name} ${studentData?.last_name}`}
      </Heading>

      <Stack direction={["column", "column", "row"]} spacing={5} w={"100%"}>
        <TableContainer boxShadow="lg" rounded="md" mb={2}  w={["100%", null, "50%"]}>
          <Table variant="striped" colorScheme="telegram">
            <Thead borderBottom={"2px"} borderColor={"gray.200"}>
              <Tr>
                <Th>Field</Th>
                <Th>Value</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td fontWeight="bold">First Name</Td>
                <Td>{studentData?.first_name}</Td>
              </Tr>
              <Tr>
                <Td fontWeight="bold">Middle Name</Td>
                <Td>{studentData?.middle_name}</Td>
              </Tr>
              <Tr>
                <Td fontWeight="bold">Last Name</Td>
                <Td>{studentData?.last_name}</Td>
              </Tr>
              <Tr>
                <Td fontWeight="bold">Date of Birth</Td>
                <Td>{new Date(studentData?.date_of_birth).toDateString()}</Td>
              </Tr>
              <Tr>
                <Td fontWeight="bold">Gender</Td>
                <Td>{studentData?.gender_display}</Td>
              </Tr>
              <Tr>
                <Td fontWeight="bold">Race</Td>
                <Td>{studentData?.race_display}</Td>
              </Tr>

              <Tr>
                <Td fontWeight="bold">Student ID</Td>
                <Td>{studentData?.student_id}</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        <TableContainer boxShadow="lg" rounded="md" mb={10} w={["100%", null, "50%"]}>
          <Table variant="striped" colorScheme={"telegram"}>
            <Thead borderBottom={"2px"} borderColor={"gray.200"}>
              <Tr>
                <Th>Field</Th>
                <Th>Value</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td fontWeight="bold">Home Phone</Td>
                <Td>{studentData?.home_phone}</Td>
              </Tr>
              <Tr>
                <Td fontWeight="bold">Address</Td>
                <Td>{studentData?.address}</Td>
              </Tr>
              <Tr>
                <Td fontWeight="bold">Father's Name</Td>
                <Td>{studentData?.father_name}</Td>
              </Tr>
              <Tr>
                <Td fontWeight="bold">Father's Contact</Td>
                <Td>{studentData?.father_contact}</Td>
              </Tr>
              <Tr>
                <Td fontWeight="bold">Mother's Name</Td>
                <Td>{studentData?.mother_name}</Td>
              </Tr>
              <Tr>
                <Td fontWeight="bold">Mother's Contact</Td>
                <Td>{studentData?.mother_contact}</Td>
              </Tr>
              <Tr>
                <Td fontWeight="bold">Guardian Name</Td>
                <Td>{studentData?.guardian_name}</Td>
              </Tr>
              <Tr>
                <Td fontWeight="bold">Guardian Email</Td>
                <Td>{studentData?.guardian_email}</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Stack>
    </>
  );
}

export default StudentDetail;
