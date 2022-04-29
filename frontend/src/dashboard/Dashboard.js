import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

import TopNavBar from "../components/dashboard/TopNavBar";

function Dashboard() {
  return (
    <>
      <Box>
        <TopNavBar />
        <Heading fontWeight={"bold"} color="red.600">
          This is the Dashboard
        </Heading>
      </Box>
    </>
  );
}

export default Dashboard;
