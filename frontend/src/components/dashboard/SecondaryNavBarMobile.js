import React from "react";
import { Link as ReactLink } from "react-router-dom";
import { Box, Link, Flex, Icon, VStack } from "@chakra-ui/react";
import { MdGroups } from "react-icons/md";
import { GoChecklist } from "react-icons/go";

const SecondaryNavBarMobile = ({onClose}) => {
  return (
    <>
      <VStack spacing={2} mt={6} alignItems={"self-start"}
      >
        <Link
          as={ReactLink}
          to="/app/dashboard/class-list"
          fontSize={"md"}
          style={{ textDecoration: "none", boxShadow: "none" }}
          color={"telegram.700"}
          fontWeight={600}
          onClick={onClose}
        >
          <Flex alignContent={"center"} mr={5} pb={2}>
            <Icon fontSize={"2xl"} mr={2} as={MdGroups} /> Class List
          </Flex>
        </Link>

        <Link
          as={ReactLink}
          to="/app/dashboard/class-attendance"
          fontSize={"md"}
          style={{ textDecoration: "none", boxShadow: "none" }}
          color={"telegram.700"}
          fontWeight={600}
          onClick={onClose}
        >
          <Flex pb={2}>
            <Icon as={GoChecklist} fontSize={"2xl"} mr={2} /> Class Attendance
          </Flex>
        </Link>
      </VStack>
    </>
  );
};

export default SecondaryNavBarMobile;
