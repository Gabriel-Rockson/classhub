import React from "react";
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
  FormLabel,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";
import { DatePicker } from "@orange_digital/chakra-datepicker";

import { MdPersonAdd } from "react-icons/md";
import { IoEyeSharp } from "react-icons/io5";
import { HStack } from "@chakra-ui/react";

const data = {
  name: "Gabriel Rockson",
  gender: "Male",
  race: "Black / Black American",
  address: "Kotei Rd",
  student_id: "20594513",
};
function StudentList() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate = useNavigate();

  const handleClick = (student_uid) => {
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

        <Modal
          isOpen={isOpen}
          onClose={onClose}
          scrollBehavior={"inside"}
          closeOnOverlayClick={false}
        >
          <ModalOverlay />
          <ModalContent borderRadius={0}>
            <ModalHeader>Add Student</ModalHeader>
            <ModalCloseButton style={{ boxShadow: "none" }} color="red" />

            <ModalBody>
              <VStack spacing={5}>
                <FormControl>
                  <FormLabel>First Name</FormLabel>
                  <Input borderRadius={0} />
                </FormControl>
                <FormControl>
                  <FormLabel>Middle Name</FormLabel>
                  <Input borderRadius={0} />
                </FormControl>
                <FormControl>
                  <FormLabel>Last Name</FormLabel>
                  <Input borderRadius={0} />
                </FormControl>
                <FormControl>
                  <FormLabel>Date of Birth</FormLabel>
                  {/* TODO replace this date time picker with a custom component that fits chakra or a package */}
                  <Input type="date" borderRadius={0} />
                </FormControl>
                <FormControl>
                  <FormLabel>Gender</FormLabel>
                  <Select borderRadius={0}>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                    <option value="O">Other</option>
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel>Race</FormLabel>
                  <Select borderRadius={0}>
                    <option value="W">White</option>
                    <option value="B">Black / African American</option>
                    <option value="AIN">American Indian</option>
                    <option value="H">Native Hawaiian</option>
                    <option value="O">Some Other Race</option>
                  </Select>
                </FormControl>
                {/* TODO the grade of the student should be automatically filled based on the class list being viewed */}
                <FormControl>
                  <FormLabel>Student ID</FormLabel>
                  <Input borderRadius={0} />
                </FormControl>
                <FormControl>
                  <FormLabel>Address</FormLabel>
                  <Input borderRadius={0} />
                </FormControl>
                <FormControl>
                  <FormLabel>Father's Name</FormLabel>
                  <Input borderRadius={0} />
                </FormControl>
                <FormControl>
                  <FormLabel>Father's Contact</FormLabel>
                  <Input borderRadius={0} />
                </FormControl>
                <FormControl>
                  <FormLabel>Mother's Name</FormLabel>
                  <Input borderRadius={0} />
                </FormControl>
                <FormControl>
                  <FormLabel>Mother's Contact</FormLabel>
                  <Input borderRadius={0} />
                </FormControl>
                <FormControl>
                  <FormLabel>Guardian's Name</FormLabel>
                  <Input borderRadius={0} />
                </FormControl>
                <FormControl>
                  <FormLabel>Guardian's Email</FormLabel>
                  <Input borderRadius={0} />
                </FormControl>
                <FormControl>
                  <FormLabel>Home Phone</FormLabel>
                  <Input borderRadius={0} />
                </FormControl>
              </VStack>
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

        <Text as={"small"} color={"telegram.900"} fontWeight={"bold"}>
          Swipe on the table to reveal more data
        </Text>
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
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
                <Tr key={number}>
                  <Td>{data["name"]}</Td>
                  <Td>{data["gender"]}</Td>
                  <Td>{data["race"]}</Td>
                  <Td>{data["address"]}</Td>
                  <Td>{data["student_id"]}</Td>
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
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}

export default StudentList;
