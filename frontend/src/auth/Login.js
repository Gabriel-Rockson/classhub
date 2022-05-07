import React from "react";
import { Link as ReactLink, useNavigate } from "react-router-dom";
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
import AuthService from "../services/auth.service";

export default function Login() {
  const navigate = useNavigate();
  const validationSchema = yup.object({
    username: yup.string().required("Username field is required"),
    password: yup
      .string()
      .required("Password field is required")
      .min(8, "Minimum of 8 characters."),
  });

  const handleFormSubmit = (data, { setSubmitting, setErrors }) => {
    setSubmitting(true);
    AuthService.login(data.username, data.password)
      .then((res) => navigate("/app/dashboard"))
      .catch((err) => setErrors(err.response.data))
      .finally(() => setSubmitting(false));
  };

  const formData = {
    username: "",
    password: "",
  };

  return (
    <>
      <Flex bg="whitesmoke" align="center" justify="center" h="100vh">
        <Box w={["80%", 96]} px={5} py={8}>
          <Heading py={3} textAlign="center" fontSize="2xl">
            Login
          </Heading>
          <Formik
            initialValues={formData}
            validationSchema={validationSchema}
            onSubmit={handleFormSubmit}
          >
            {({ errors, handleSubmit, touched, isSubmitting }) => (
              <form method="post" onSubmit={handleSubmit}>
                <VStack spacing={6}>
                  <FormControl isInvalid={!!errors.detail}>
                    <FormErrorMessage>{errors.detail}</FormErrorMessage>
                  </FormControl>
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
                      borderColor="facebook.200"
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
                      borderColor="facebook.200"
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
