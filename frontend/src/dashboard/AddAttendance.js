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
  Select,
  Button,
  Flex,
  Icon,
  Heading,
  Stack,
  Alert,
  AlertIcon,
  AlertDescription,
  AlertTitle,
  Spinner,
} from "@chakra-ui/react";

// Icons
import { GiCheckMark } from "react-icons/gi";
import { ImUserCheck } from "react-icons/im";
import { AiOutlineRollback } from "react-icons/ai";

// Custom hooks
import { useGradeAndStudents } from "../hooks/custom-hooks";

const AddAttendance = () => {
  const navigate = useNavigate();
  const { isFetching, students, grade } = useGradeAndStudents();

  if (isFetching) {
    return (
      <>
        <Flex justify="center" align="center" py={5}>
          <Spinner color="telegram.700" />
        </Flex>
      </>
    );
  }

  if (!isFetching && students?.length === 0) {
    return (
      <>
        <Flex py={5}>
          <Alert status="info">
            <Stack direction="column" spacing={5}>
              <Flex direction="row">
                <AlertIcon />
                <AlertTitle>Empty Class</AlertTitle>
              </Flex>
              <AlertDescription>
                Sorry!!! There are no students registered in this class yet, you
                can go to the 'Class List' page to register a new student.
              </AlertDescription>
            </Stack>
          </Alert>
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
        mt={6}
        size={["md"]}
        fontSize={"14px"}
        onClick={() => navigate(-1)}
      >
        <Flex alignItems={"center"}>
          <Icon as={AiOutlineRollback} mr={2} /> Attendance List
        </Flex>
      </Button>

      <Flex mt={3} mb={6} justifyContent={"center"}>
        <Heading fontSize={["lg", "xl", "2xl"]}>
          Class {grade?.grade} Attendance - {new Date().toDateString()}
        </Heading>
      </Flex>

      <TableContainer py={4} boxShadow="lg" rounded="md">
        <Table variant={"unstyled"}>
          <Thead borderBottom={"2px"} borderColor={"gray.200"}>
            <Tr>
              <Th>Student</Th>
              <Th>Student ID</Th>
              <Th>Attendance</Th>
            </Tr>
          </Thead>
          <Tbody>
            {students?.map((student) => (
              <Tr key={student.id}>
                <Td>{`${student.first_name} ${student.middle_name} ${student.last_name}`}</Td>
                <Td>{student.student_id}</Td>
                <Td>
                  <Select borderRadius={5}>
                    <option value="P">Present</option>
                    <option value="UNEX">
                      SC-UNEX ( Unexcused / Unverified )
                    </option>
                    <option value="ETRD">SC-ETRD ( Excused Tardy )</option>
                    <option value="UTRD">SC-UTRD ( Unexcused Tardy )</option>
                    <option value="VTP">SC-VTP ( Virtual Present Code )</option>
                  </Select>
                </Td>
                <Td>
                  <Button
                    colorScheme={"telegram"}
                    borderRadius={5}
                    style={{ boxShadow: "none" }}
                  >
                    <Flex alignItems="center">
                      <Icon as={ImUserCheck} mr={2} /> Save
                    </Flex>
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <Flex justifyContent={"center"} py={2}>
          <Button
            borderRadius={5}
            colorScheme={"telegram"}
            style={{ boxShadow: "none" }}
          >
            <Flex alignItems={"center"}>
              <Icon as={GiCheckMark} mr={2} /> Save Attendance
            </Flex>
          </Button>
        </Flex>
      </TableContainer>
    </>
  );
};

export default AddAttendance;
