import React, { useState, useEffect } from "react";
import { Flex, Link, Icon, HStack } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";

import { MdGroups } from "react-icons/md";
import { GoChecklist } from "react-icons/go";

const SecondaryNavBar = () => {
  // TODO you are utilizing this in the TopNavBar too, extract it into a custom hook
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);

      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    };
  }, [windowWidth]);

  return (
    <>
      {windowWidth >= 768 && (
        <HStack
          pt={8}
          px={[null, 5, 10]}
          backgroundColor={"telegram.800"}
          color={"white"}
          alignItems={"start"}
          spacing={10}
        >
          <Link
            as={ReactLink}
            to="/app/dashboard/class-list"
            fontSize={"md"}
            style={{ textDecoration: "none", boxShadow: "none" }}
            _focus={{
              fontWeight: "bold",
              borderBottom: "solid",
              borderColor: "white",
            }}
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
            _focus={{
              fontWeight: "bold",
              borderBottom: "solid",
              borderColor: "white",
            }}
          >
            <Flex pb={2}>
              <Icon as={GoChecklist} fontSize={"2xl"} mr={2} /> Class Attendance
            </Flex>
          </Link>
        </HStack>
      )}
    </>
  );
};

export default SecondaryNavBar;
