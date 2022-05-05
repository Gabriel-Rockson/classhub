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
import * as yup from "yup";

export default function Login() {
  const validationSchema = yup.object({
    username: yup.string().required("Username field is required"),
    password: yup
      .string()
      .required("Password field is required")
      .min(8, "Minimum of 8 characters."),
  });

  return (
    <>
      <Flex bg="gray.200" align="center" justify="center" h="100vh">
        <Box bg="white" px={5} py={8} w={["80%", 96]}>
          <Heading py={3} textAlign="center">
            Login
          </Heading>
          <Formik
            initialValues={{
              username: "",
              password: "",
            }}
            validationSchema={validationSchema}
            u
            onSubmit={(data) => alert(JSON.stringify(data, null, 2))}
          >
            {({ errors, handleSubmit, touched }) => (
              <form method="post" onSubmit={handleSubmit}>
                <VStack spacing={6}>
                  <FormControl
                    isInvalid={!!errors.username && touched.username}
                  >
                    <FormLabel htmlFor="username">Username</FormLabel>
                    <Field
                      as={Input}
                      type="text"
                      id="username"
                      name="username"
                    />
                    <FormErrorMessage>{errors.username}</FormErrorMessage>
                  </FormControl>
                  <FormControl
                    isInvalid={!!errors.password && touched.password}
                  >
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <Field
                      as={Input}
                      type="password"
                      id="password"
                      name="password"
                    />
                    <FormErrorMessage>{errors.password}</FormErrorMessage>
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
                    style={{ boxShadow: "none" }}
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
