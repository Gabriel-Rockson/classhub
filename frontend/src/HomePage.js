import React from "react";
import { Box, Heading, Flex, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

function HomePage() {
  return (
    <>
      <Box>
        <Heading textAlign={"center"} color={"telegram.900"} py={10}>
          Students Attendance
        </Heading>

        <Flex justifyContent="center">
          <HStack spacing={5}>
          <Link color="telegram.600" to="/app/login">Login</Link>
          <Link color="telegram.600" as={Button} to="/app/register">Register</Link>
          <Link color="telegram.600" as={Button} to="/app/dashboard">Dashboard</Link>
          </HStack>
        </Flex>
      </Box>
    </>
  );
}

export default HomePage;
