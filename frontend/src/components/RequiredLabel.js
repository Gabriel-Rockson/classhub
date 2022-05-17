import React from "react";
import { Text, Flex, FormLabel } from "@chakra-ui/react";

const RequiredLabel = ({ children }) => {
  return (
    <>
      <Flex>
        <Flex>{children}</Flex>
        <Flex color="red.600" ms={2}>
          *
        </Flex>
      </Flex>
    </>
  );
};

export default RequiredLabel;
