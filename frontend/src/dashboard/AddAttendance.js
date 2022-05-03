import React from "react";
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
  Heading
} from "@chakra-ui/react";

import { GiCheckMark } from "react-icons/gi";
import { ImUserCheck } from "react-icons/im";

const data = {
  name: "Gabriel Rockson",
  student_id: "20594513",
};

const AddAttendance = () => {
  return (
    <>
      <Flex my={10}>
        <Heading fontSize={['lg', 'xl', '3xl']}>Class 2 Attendance - {new Date().toDateString()}</Heading>
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
            {[1, 2, 3, 4, 5].map((number) => (
              <Tr key={number}>
                <Td>{data["name"]}</Td>
                <Td>{data["student_id"]}</Td>
                <Td>
                  <Select borderRadius={0}>
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
                    backgroundColor={"telegram.600"}
                    color="white"
                    borderRadius={0}
                    style={{ boxShadow: "none" }}
                    _hover={{ backgroundColor: "telegram.700" }}
                    _focus={{ backgroundColor: "telegram.800" }}
                    _active={{ backgroundColor: "telegram.800" }}
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
            backgroundColor={"green.600"}
            color="white"
            borderRadius={0}
            style={{ boxShadow: "none" }}
            _hover={{ backgroundColor: "green.700" }}
            _focus={{ backgroundColor: "green.800" }}
            _active={{ backgroundColor: "green.800" }}
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
