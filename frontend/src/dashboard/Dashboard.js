import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Heading, Text } from "@chakra-ui/react";

import TopNavBar from "../components/dashboard/TopNavBar";
import SecondaryNavBar from "../components/dashboard/SecondaryNavBar";

function Dashboard() {
  return (
    <>
      <Box>
        <TopNavBar />
        <SecondaryNavBar />
        <Box px={10} py={2}>
          <Heading fontWeight={"bold"} textAlign="center" color="red.600">
            <Outlet />
          </Heading>
        </Box>
      </Box>
    </>
  );
}

export default Dashboard;
