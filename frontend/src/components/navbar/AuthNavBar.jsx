import React from "react";

import { Flex } from "@chakra-ui/react";
import NavLabel from "./NavLabel";

const AuthNavBar = () => {
  return (
    <>
      <Flex justify="center" py={2} w="100%">
        <NavLabel />
      </Flex>
    </>
  );
};

export default AuthNavBar;
