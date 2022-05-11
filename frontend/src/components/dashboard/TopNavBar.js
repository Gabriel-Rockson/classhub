import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Heading,
  Flex,
  Avatar,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";

import { useWindowWidth } from "../../hooks/custom-hooks";

import {
  AiFillCaretDown,
  AiOutlineSearch,
  AiOutlineMenuUnfold,
  AiOutlineMenuFold,
} from "react-icons/ai";
import { CgProfile, CgLogOut } from "react-icons/cg";

import SecondaryNavBarMobile from "./SecondaryNavBarMobile";

import AuthService from "../../services/auth.service";

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
          borderColor={"telegram.600"}
          focusBorderColor="telegram.800"
          rounded={"none"}
        />
      </InputGroup>
    </>
  );
};

const TopNavBar = () => {
  const [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser());
  const windowWidth = useWindowWidth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const sideMenuBtn = useRef();
  const navigate = useNavigate();

  const handleLogout = () => {
    AuthService.logout();
    navigate("/", { replace: true });
  };

  return (
    <>
      <Flex
        justifyContent={"space-between"}
        py={[3]}
        px={[2, 4, 6]}
        backgroundColor="white"
        borderBottom={["solid", "none"]}
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
                <DrawerHeader>ClassHub</DrawerHeader>

                <DrawerBody>
                  <SearchInput />
                  <SecondaryNavBarMobile onClose={onClose} />
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          )}
          <Heading
            fontSize={["lg", "xl", "xl"]}
            color={"telegram.900"}
            fontFamily={"fantasy"}
            cursor="pointer"
            onClick={() => {
              navigate("/", { replace: true });
            }}
          >
            ClassHub
          </Heading>
        </Flex>
        <Flex alignItems={"center"}>
          {windowWidth >= 768 && <SearchInput />}

          <Menu>
            <MenuButton>
              <Flex
                alignItems={"center"}
                color="telegram.600"
                fontWeight={"semibold"}
                cursor="pointer"
              >
                <Avatar
                  name="Dan Abrahmov"
                  size={"sm"}
                  src="https://bit.ly/dan-abramov"
                  mr={2}
                />
                {currentUser?.username} <Icon as={AiFillCaretDown} />
              </Flex>
            </MenuButton>
            <MenuList
              border={"1px"}
              borderColor={"telegram.300"}
              color={"telegram.900"}
              fontWeight={"bold"}
            >
              <MenuItem
                icon={<CgProfile />}
                onClick={() => navigate("/app/dashboard/profile")}
              >
                Profile
              </MenuItem>
              <MenuDivider />
              <MenuItem icon={<CgLogOut />} onClick={() => handleLogout()}>
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </>
  );
};

export default TopNavBar;
