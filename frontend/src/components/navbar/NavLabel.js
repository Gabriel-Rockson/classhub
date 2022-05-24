import React from "react";
import { Link as ReactLink } from "react-router-dom";
import { Link, Text } from "@chakra-ui/react";

const NavLabel = () => {
  return (
    <>
      <Link
        as={ReactLink}
        to="/"
        fontSize={"2xl"}
        style={{ textDecoration: "none", boxShadow: "none" }}
      >
        <Text
          as="span"
          color="blackAlpha.800"
          fontFamily={"cursive"}
          fontWeight="600"
        >
          class
        </Text>
        <Text as="span" color="red.600" fontWeight="bold">
          Hub
        </Text>
      </Link>
    </>
  );
};

export default NavLabel;
