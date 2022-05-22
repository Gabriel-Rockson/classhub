import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

// Chakra components
import {
  Flex,
  Button,
  Heading,
  Icon,
  TableContainer,
  Table,
  Tbody,
  Thead,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";

// Icons
import { AiOutlineRollback } from "react-icons/ai";

// Custom hook
import { useGradeAndStudents } from "../hooks/custom-hooks";

export default React.memo(function AttendanceDetail() {
  const { grade } = useGradeAndStudents();
  const navigate = useNavigate();
  const { state } = useLocation();

  console.log(state.attendances);

  return (
    <>
      <Button
        borderRadius={5}
        colorScheme={"orange"}
        style={{ boxShadow: "none" }}
        mt={6}
        size={["md"]}
        fontSize={"14px"}
        onClick={() => navigate("/app/dashboard/class-attendance")}
      >
        <Flex alignItems={"center"}>
          <Icon as={AiOutlineRollback} mr={2} /> Attendance List
        </Flex>
      </Button>

      <Flex mt={3} mb={6} justifyContent={"center"}>
        <Heading fontSize={["lg", "xl", "2xl"]}>
          Grade {grade?.grade} Attendance Taken on -{" "}
          {new Date(state.date).toDateString()}
        </Heading>
      </Flex>

      <TableContainer py={4} boxShadow="lg" rounded="md">
        <Table variant={"unstyled"}>
          <Thead borderBottom={"2px"} borderColor={"gray.200"}>
            <Tr>
              <Th>Student Name</Th>
              <Th>Date</Th>
              <Th>Attendance Code</Th>
              <Th>Attendance Name</Th>
            </Tr>
          </Thead>
          <Tbody>
            {state?.attendances?.map((attendance) => (
              <Tr key={attendance.id}>
                <Td>{attendance.student_name}</Td>
                {/* TODO make the attendance name clickable, on click, take the user to the student's detail page, where they can view the student's full attendance details */}
                <Td>{attendance.created}</Td>
                <Td>{attendance.attendance}</Td>
                <Td>{attendance.attendance_display}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
});
