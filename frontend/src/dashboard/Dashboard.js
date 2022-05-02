import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import TopNavBar from "../components/dashboard/TopNavBar";
import SecondaryNavBar from "../components/dashboard/SecondaryNavBar";

function Dashboard() {
  return (
    <>
      <Box>
        <TopNavBar />
        <SecondaryNavBar />
        <Box px={[2, 5, 10]} py={2}>
          <Outlet />
        </Box>
      </Box>
    </>
  );
}

export default Dashboard;
