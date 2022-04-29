import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <Box>
        <Heading color="blue.600">This is the HomePage</Heading>
        <Link to="/dashboard">Dashboard</Link>
      </Box>
    </>
  );
}

export default HomePage;
