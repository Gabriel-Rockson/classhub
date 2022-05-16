import React from "react";
import { useNavigate } from "react-router-dom";

import { Flex, Heading } from "@chakra-ui/react";

const AuthNavBar = () => {
  const navigate = useNavigate();

  return (
    <>
      <Flex justify="center" py={2} w="100%">
        <Heading
          fontSize={["xl", "2xl", "3xl"]}
          color={"telegram.900"}
          fontFamily={"sans-serif"}
          cursor="pointer"
          onClick={() => {
            navigate("/", { replace: true });
          }}
        >
          ClassHub
        </Heading>
      </Flex>
    </>
  );
};

export default AuthNavBar;
