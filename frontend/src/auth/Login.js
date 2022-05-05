import React from "react";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
  Heading,
  Button,
} from "@chakra-ui/react";
import { Formik, Field } from "formik";

export default function Login() {
  return (
    <>
      <Flex bg="gray.200" align="center" justify="center" h="100vh">
        <Box bg="white" px={5} py={8} w={["80%", 96]}>
          <Heading py={3} textAlign="center">
            Login
          </Heading>
          <Formik>
            {() => (
              <form method="post">
                <VStack spacing={6}>
                  <FormControl>
                    <FormLabel htmlFor="username">Username</FormLabel>
                    <Field
                      as={Input}
                      type="text"
                      id="username"
                      name="username"
                      borderRadius={0}
                      borderColor="purple.400"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <Field
                      as={Input}
                      type="password"
                      id="password"
                      name="password"
                      borderRadius={0}
                      borderColor="purple.400"
                    />
                  </FormControl>
                  <Button
                    mt={2}
                    type="submit"
                    w="full"
                    bg="telegram.600"
                    color="white"
                    borderRadius={0}
                    _hover={{ bg: "facebook.700", boxShadow: "none" }}
                    _active={{ bg: "facebook.700", boxShadow: "none" }}
                  >
                    Login
                  </Button>
                </VStack>
              </form>
            )}
          </Formik>
        </Box>
      </Flex>
    </>
  );
}
