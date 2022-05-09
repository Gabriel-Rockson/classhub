import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
} from "@chakra-ui/react";

import StudentService from "../services/student.service";

function StudentDetail() {
  const [studentData, setStudentData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    StudentService.getStudentData(id)
      .then((response) => {
        setStudentData(() => response.data);
      })
      .catch((error) => {
        // TODO properly display the error and do something about it HANDLE IT
        console.error(error);
      });
  }, []);

  return (
    <>
      <Box>
        <Heading py={4} fontSize={["lg", "xl", "2xl"]}>
          {`${studentData?.first_name} ${studentData?.middle_name} ${studentData?.last_name}`}
        </Heading>
        <TableContainer
          w={["100vw", null, null, "50vw"]}
          boxShadow="lg"
          rounded="md"
          mb={10}
        >
          <Table variant="striped" colorScheme="linkedin">
            <Thead borderBottom={"2px"} borderColor={"gray.200"}>
              <Tr>
                <Th>Key</Th>
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
                <Td fontWeight="bold">Home Phone</Td>
                <Td>{studentData?.home_phone}</Td>
              </Tr>
              <Tr>
                <Td fontWeight="bold">Student ID</Td>
                <Td>{studentData?.student_id}</Td>
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
      </Box>
    </>
  );
}

export default StudentDetail;
