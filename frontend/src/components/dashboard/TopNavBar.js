import React, { useEffect, useState, useRef, forwardRef } from "react";
import {
  Heading,
  Text,
  Flex,
  Avatar,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import {
  AiFillCaretDown,
  AiOutlineSearch,
  AiOutlineMenuUnfold,
  AiOutlineMenuFold,
} from "react-icons/ai";

import SecondaryNavBarMobile from "./SecondaryNavBarMobile";

const SearchInput = () => {
  return (
    <>
      <InputGroup mr={[null, 10]}>
        <InputLeftElement
          children={
            <Icon as={AiOutlineSearch} color="gray.500" fontSize={"xl"} />
          }
        />
        <Input
          placeholder="Search ..."
          borderColor={"blue.200"}
          focusBorderColor="blue.600"
          rounded={"none"}
        />
      </InputGroup>
    </>
  );
};

const TopNavBar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const sideMenuBtn = useRef();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  return (
    <>
      <Flex
        justifyContent={"space-between"}
        py={[2, 3]}
        px={[2, 4, 6]}
        backgroundColor="white"
      >
        <Flex alignItems={"center"}>
          {windowWidth < 768 &&
            (isOpen ? (
              <Icon
                as={AiOutlineMenuFold}
                fontSize={"2xl"}
                mr={3}
                color={"blue.900"}
                onClick={onOpen}
              />
            ) : (
              <Icon
                as={AiOutlineMenuUnfold}
                fontSize={"2xl"}
                mr={3}
                color={"blue.900"}
                onClick={onOpen}
              />
            ))}
          {windowWidth < 768 && (
            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              finalFocusRef={sideMenuBtn}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton
                  style={{ boxShadow: "none" }}
                  color={"red.600"}
                />
                <DrawerHeader>StudentsAttendance</DrawerHeader>

                <DrawerBody>
                  <SearchInput />
                  <SecondaryNavBarMobile onClose={onClose} />
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          )}
          <Heading
            fontSize={["lg", "xl", "xl"]}
            color={"facebook.800"}
            fontFamily={"fantasy"}
          >
            StudentsAttendance
          </Heading>
        </Flex>
        <Flex alignItems={"center"}>
          {windowWidth >= 768 && <SearchInput />}

          <Flex
            alignItems={"center"}
            color="blue.400"
            fontWeight={"semibold"}
            cursor="pointer"
          >
            <Avatar
              name="Dan Abrahmov"
              size={"sm"}
              src="https://bit.ly/dan-abramov"
              mr={2}
            />
            <Text>Nancy</Text> <Icon as={AiFillCaretDown} />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default TopNavBar;
