import React, { useEffect, useState } from "react";
import { Link as ReactLink } from "react-router-dom";
import { Flex, Text, Link, Stack } from "@chakra-ui/react";

import NavLabel from "./NavLabel";
import AuthService from "../../services/auth.service";

const HomePageNavBar = () => {
  const [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser());

  useEffect(() => {
    if (!currentUser) {
      setCurrentUser(AuthService.getCurrentUser());
    }
  }, []);

  return (
    <>
      <Flex py={5} px={[5, 10, 24, 32]} justify={"space-between"}>
        <Flex align="center">
          <NavLabel />
        </Flex>
        <Flex>
          {currentUser ? (
            <Link
              py={2}
              px={4}
              rounded={"lg"}
              bg={"blue.500"}
              _hover={{ bg: "blue.600" }}
              as={ReactLink}
              to="/app/dashboard"
              color={"white"}
              fontWeight="500"
              fontSize={"md"}
              style={{ textDecoration: "none", boxShadow: "none" }}
            >
              Dashboard
            </Link>
          ) : (
            <Stack direction="row" spacing={4} align="center">
              <Link
                as={ReactLink}
                to="/app/login"
                color={"telegram.600"}
                fontWeight="600"
                fontSize={"lg"}
                style={{ boxShadow: "none" }}
              >
                login
              </Link>
              <Link
                py={3}
                px={6}
                rounded={"lg"}
                bg={"red.500"}
                _hover={{ bg: "red.600" }}
                as={ReactLink}
                to="/app/register"
                color={"white"}
                fontWeight="500"
                fontSize={"md"}
                style={{ textDecoration: "none", boxShadow: "none" }}
              >
                Get Started
              </Link>
            </Stack>
          )}
        </Flex>
      </Flex>
    </>
  );
};

export default HomePageNavBar;
