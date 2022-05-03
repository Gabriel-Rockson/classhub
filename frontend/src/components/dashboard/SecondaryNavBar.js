import React, { useState, useEffect } from "react";
import { Flex, Link, Icon, HStack } from "@chakra-ui/react";
import { Link as ReactLink, useLocation } from "react-router-dom";

import { MdGroups } from "react-icons/md";
import { GoChecklist } from "react-icons/go";

import { useWindowWidth } from "../../hooks/custom-hooks";

const SecondaryNavBar = () => {
  const windowWidth = useWindowWidth();
  const [addStyleA, setAddStyleA] = useState(false);
  const [addStyleB, setAddStyleB] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/app/dashboard/class-list") {
      setAddStyleA(true);
      setAddStyleB(false);
    } else if (
      location.pathname === "/app/dashboard/class-attendance" ||
      location.pathname === "/app/dashboard"
    ) {
      setAddStyleB(true);
      setAddStyleA(false);
    }
  }, [location]);

  const style = {
    textDecoration: "none",
    boxShadow: "none",
    color: "orange",
    fontWeight: "bold",
  };

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
            style={
              addStyleA ? style : { textDecoration: "none", boxShadow: "none" }
            }
          >
            <Flex alignContent={"center"} mr={5} pb={2}>
              <Icon fontSize={"2xl"} mr={2} as={MdGroups} /> Class List
            </Flex>
          </Link>

          <Link
            as={ReactLink}
            to="/app/dashboard/class-attendance"
            fontSize={"md"}
            style={
              addStyleB ? style : { textDecoration: "none", boxShadow: "none" }
            }
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
