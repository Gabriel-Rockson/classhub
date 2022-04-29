import React from "react";
import {
  Box,
  Heading,
  Spacer,
  Text,
  Flex,
  Avatar,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

import { AiFillCaretDown, AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

function TopNavBar() {
  return (
    <>
      <Flex
        justifyContent={"space-between"}
        py={2}
        px={5}
        backgroundColor="white"
      >
        <Flex alignItems={"center"}>
          <Icon
            as={GiHamburgerMenu}
            fontSize={"2xl"}
            mr={3}
            color={"blue.600"}
          />
          <Heading
            fontSize={["3xl", "2xl", "xl"]}
            color={"teal.600"}
            fontFamily={"fantasy"}
          >
            StudentsAttendance
          </Heading>
        </Flex>
        <Flex alignItems={"center"}>
          <InputGroup mr={[10]}>
            <InputLeftElement
              children={
                <Icon as={AiOutlineSearch} color="gray.500" fontSize={"2xl"} />
              }
            />
            <Input
              placeholder="Search ..."
              focusBorderColor="blue.600"
              rounded={"none"}
            />
          </InputGroup>
          <Avatar
            name="Dan Abrahmov"
            size="md"
            src="https://bit.ly/dan-abramov"
            mr={2}
          />
          <Flex alignItems={"center"} color="blue.400" fontWeight={"semibold"}>
            <Text>Nancy</Text> <Icon as={AiFillCaretDown} />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default TopNavBar;
