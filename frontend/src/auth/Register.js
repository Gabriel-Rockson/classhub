import React from "react";
import {
  Box,
  Flex,
  Heading,
  VStack,
  Button,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Formik, Field } from "formik";
import * as yup from "yup";

export default function Register() {
  return (
    <>
      <Flex bg="gray.200" align="center" justify="center" h="100vh">
        <Box bg="white" w={["80%", 96]} px={5} py={8}>
          <Heading py={3} fontSize="2xl" textAlign="center">
            Register Account
          </Heading>
          <Formik>
            {() => (
              <form>
                <VStack spacing={6}>
                  <FormControl>
                    <FormLabel>Username</FormLabel>
                    <Field
                      as={Input}
                      type="text"
                      id="username"
                      name="username"
                    />
                    <FormErrorMessage></FormErrorMessage>
                  </FormControl>
                  <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Field as={Input} type="email" id="email" name="email" />
                    <FormErrorMessage></FormErrorMessage>
                  </FormControl>
                  <FormControl>
                    <FormLabel>Password</FormLabel>
                    <Field
                      as={Input}
                      type="password"
                      id="password"
                      name="password"
                    />
                    <FormErrorMessage></FormErrorMessage>
                  </FormControl>
                </VStack>
                <Button
                  mt={10}
                  type="submit"
                  w="full"
                  bg="telegram.600"
                  color="white"
                  borderRadius={0}
                  _hover={{ bg: "facebook.700", boxShadow: "none" }}
                  _active={{ bg: "facebook.700", boxShadow: "none" }}
                  style={{ boxShadow: "none" }}
                >
                  Register
                </Button>
              </form>
            )}
          </Formik>
        </Box>
      </Flex>
    </>
  );
}
