import React from "react";
import { useNavigate } from "react-router-dom";

// Chakra components
import { Flex, Button, Heading, Icon } from "@chakra-ui/react";

// Icons
import { AiOutlineRollback } from "react-icons/ai";

// Custom hook
import { useGradeAndStudents } from "../hooks/custom-hooks";

export default function AttendanceDetail({ attendance }) {
  const { grade } = useGradeAndStudents();
  const navigate = useNavigate();

  return (
    <>
      <Button
        borderRadius={5}
        colorScheme={"orange"}
        style={{ boxShadow: "none" }}
        mt={6}
        size={["md"]}
        fontSize={"14px"}
        onClick={() => navigate("/app/dashboard/class-attendance")}
      >
        <Flex alignItems={"center"}>
          <Icon as={AiOutlineRollback} mr={2} /> Attendance List
        </Flex>
      </Button>

      <Flex mt={3} mb={6} justifyContent={"center"}>
        <Heading fontSize={["lg", "xl", "2xl"]}>
          Grade {grade?.grade} Attendance Taken on - {new Date().toDateString()}
        </Heading>
      </Flex>

      <Flex my={10} justifyContent={"center"}>
        <Heading fontSize={["lg", "xl", "2xl"]} color="yellow.800">
          This feature is underway
        </Heading>
      </Flex>
    </>
  );
}
