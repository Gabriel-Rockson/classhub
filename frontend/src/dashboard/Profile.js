import React, { useEffect, useState } from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

import AuthService from "../services/auth.service";

export default function Profile() {
  const [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser());
  return (
    <>
      <Box>
        <Heading>User Profile</Heading>
        <Text>{currentUser?.user.username}</Text>
      </Box>
    </>
  );
}
