import React from "react";
import { useParams } from "react-router-dom";

import { Box, Flex, Text, Heading } from "@chakra-ui/react";

function StudentDetail() {
  const { studentUid } = useParams();

  return (
    <>
      <Box>
        <Heading>Welcome Student {studentUid}</Heading>
      </Box>
    </>
  );
}

export default StudentDetail;
