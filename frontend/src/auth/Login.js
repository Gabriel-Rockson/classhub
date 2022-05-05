import React from "react";
import { Link as ReactLink } from "react-router-dom";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
  Heading,
  Link,
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
      <Flex bg="whitesmoke" align="center" justify="center" h="100vh">
        <Box w={["80%", 96]} px={5} py={8}>
          <Heading py={3} textAlign="center" fontSize="2xl">
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
                    colorScheme="messenger"
                    isInvalid={!!errors.username && touched.username}
                  >
                    <FormLabel htmlFor="username">Username</FormLabel>
                    <Field
                      as={Input}
                      type="text"
                      id="username"
                      name="username"
                      variant="filled"
                      borderColor="facebook.400"
                    />
                    <FormErrorMessage>{errors.username}</FormErrorMessage>
                  </FormControl>
                  <FormControl
                    colorScheme="messenger"
                    isInvalid={!!errors.password && touched.password}
                  >
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <Field
                      as={Input}
                      type="password"
                      id="password"
                      name="password"
                      variant="filled"
                      borderColor="facebook.400"
                    />
                    <FormErrorMessage>{errors.password}</FormErrorMessage>
                  </FormControl>
                </VStack>
                <Button
                  mt={8}
                  type="submit"
                  w="full"
                  colorScheme={"telegram"}
                  style={{ boxShadow: "none" }}
                >
                  Login
                </Button>
              </form>
            )}
          </Formik>
          <Box mt={2}>
            <Link
              as={ReactLink}
              to="/app/register"
              color={"telegram.700"}
              style={{ boxShadow: "none" }}
            >
              Not having an account? register
            </Link>
          </Box>
        </Box>
      </Flex>
    </>
  );
}
