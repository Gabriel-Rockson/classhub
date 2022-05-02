import React from "react";
import { Link as ReactLink } from "react-router-dom";
import { Box, Link, Flex, Icon } from "@chakra-ui/react";
import { MdGroups } from "react-icons/md";
import { GoChecklist } from "react-icons/go";

const SecondaryNavBarMobile = ({onClose}) => {
  return (
    <>
      <Flex
        flexDir={"column"}
        pt={5}
      >
        <Link
          as={ReactLink}
          to="/app/dashboard/class-list"
          fontSize={"md"}
          style={{ textDecoration: "none", boxShadow: "none" }}
          color={"blue.800"}
          fontWeight={600}
          onClick={onClose}
        >
          <Flex alignContent={"center"} mr={5} pb={2}>
            <Icon fontSize={"2xl"} mr={2} as={MdGroups} /> Class List
          </Flex>
        </Link>

        <Box my={1}/>

        <Link
          as={ReactLink}
          to="/app/dashboard/class-attendance"
          fontSize={"md"}
          style={{ textDecoration: "none", boxShadow: "none" }}
          color={"blue.800"}
          fontWeight={600}
          onClick={onClose}
        >
          <Flex pb={2}>
            <Icon as={GoChecklist} fontSize={"2xl"} mr={2} /> Class Attendance
          </Flex>
        </Link>
      </Flex>
    </>
  );
};

export default SecondaryNavBarMobile;
