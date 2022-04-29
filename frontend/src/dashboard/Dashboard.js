import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

import TopNavBar from "../components/dashboard/TopNavBar";

function Dashboard() {
  return (
    <>
      <Box>
        <TopNavBar />
        <Box px={10} py={2}>
          <Heading fontWeight={"bold"} textAlign="center" color="red.600">
            This is the Dashboard
          </Heading>
        </Box>
      </Box>
    </>
  );
}

export default Dashboard;
