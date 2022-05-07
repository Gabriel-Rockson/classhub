import React, { useState } from "react";
import { Link as ReactLink, useNavigate } from "react-router-dom";
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
  Link,
  Spinner,
} from "@chakra-ui/react";
import { Formik, Field } from "formik";
import * as yup from "yup";

import AuthService from "../services/auth.service";

export default function Register() {
  const navigate = useNavigate();
  const validationSchema = yup.object().shape({
    username: yup.string().required("Username field is required"),
    email: yup.string().email("Email must be a valid email").notRequired(),
    password: yup
      .string()
      .required("Password field is required")
      .min(8, "A min of 8 characters required"),
  });

  const handleFormSubmit = (data, { setSubmitting, setErrors }) => {
    setSubmitting(true);
    AuthService.register(data.username, data.email, data.password)
      .then((res) => {
        navigate("/app/dashboard");
      })
      .catch((err) => {
        setErrors(err.response.data);
      })
      .finally(() => setSubmitting(false));
  };

  return (
    <>
      <Flex bg="whitesmoke" align="center" justify="center" h="100vh">
        <Box w={["80%", 96]} px={5} py={8}>
          <Heading py={3} fontSize="2xl" textAlign="center">
            Register Account
          </Heading>
          <Formik
            initialValues={{
              username: "",
              email: "",
              password: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleFormSubmit}
          >
            {({ handleSubmit, errors, touched, isSubmitting }) => (
              <form onSubmit={handleSubmit}>
                <VStack spacing={6}>
                  <FormControl isInvalid={!!errors.detail}>
                    <FormErrorMessage>{errors.detail}</FormErrorMessage>
                  </FormControl>
                  <FormControl
                    colorScheme="messenger"
                    isInvalid={!!errors.username && touched.username}
                  >
                    <FormLabel>Username</FormLabel>
                    <Field
                      as={Input}
                      type="text"
                      id="username"
                      name="username"
                      variant="filled"
                      borderColor="facebook.200"
                    />
                    <FormErrorMessage>{errors.username}</FormErrorMessage>
                  </FormControl>
                  <FormControl
                    colorScheme="messenger"
                    isInvalid={!!errors.email && touched.email}
                  >
                    <FormLabel>Email</FormLabel>
                    <Field
                      as={Input}
                      type="email"
                      id="email"
                      name="email"
                      variant="filled"
                      borderColor="facebook.200"
                    />
                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                  </FormControl>
                  <FormControl
                    colorScheme="messenger"
                    isInvalid={!!errors.password && touched.password}
                  >
                    <FormLabel>Password</FormLabel>
                    <Field
                      as={Input}
                      type="password"
                      id="password"
                      name="password"
                      variant="filled"
                      borderColor="facebook.200"
                    />
                    <FormErrorMessage>{errors.password}</FormErrorMessage>
                  </FormControl>
                </VStack>
                <Button
                  disabled={isSubmitting}
                  mt={8}
                  type="submit"
                  w="full"
                  colorScheme="messenger"
                  style={{ boxShadow: "none" }}
                >
                  {isSubmitting && <Spinner color="white" mr={2} />} Register
                </Button>
              </form>
            )}
          </Formik>
          <Box mt={2}>
            <Link
              as={ReactLink}
              to="/app/login"
              color={"telegram.700"}
              style={{ boxShadow: "none" }}
            >
              Already having an account? login
            </Link>
          </Box>
        </Box>
      </Flex>
    </>
  );
}
