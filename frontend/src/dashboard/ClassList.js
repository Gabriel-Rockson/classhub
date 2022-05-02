import React from "react";
import { Box, Flex, Text, Button, Heading, Icon } from "@chakra-ui/react";

import { MdPersonAdd } from "react-icons/md";

function ClassList() {
  return (
    <>
      <Box>
        <Flex alignItems={"center"} my={4}>
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
          >
            {" "}
            <Icon fontSize={"xl"} mr={2} as={MdPersonAdd} /> Add Student
          </Button>
        </Flex>
      </Box>
    </>
  );
}

export default ClassList;
