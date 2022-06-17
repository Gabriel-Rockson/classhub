import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";

function ClassAttendance() {
  return (
    <>
      <Box>
        <Outlet />
      </Box>
    </>
  );
}

export default ClassAttendance;
