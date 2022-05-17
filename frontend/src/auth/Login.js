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
  Spinner,
  Text
} from "@chakra-ui/react";
import { Formik, Field } from "formik";
import * as yup from "yup";
import AuthService from "../services/auth.service";

import AuthNavBar from "../components/navbar/AuthNavBar";
import RequiredLabel from "../components/RequiredLabel";

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
      .then((res) => {
        navigate("/app/dashboard", { replace: true });
      })
      .catch((err) => console.log(setErrors(err.response?.data)))
      .finally(() => setSubmitting(false));
  };

  const formData = {
    username: "",
    password: "",
  };

  return (
    <>
      <Box>
        <Flex
          direction="column"
          bg="whitesmoke"
          align="center"
          justify="center"
          h="100vh"
        >
          <AuthNavBar />

          <Box w={["80%", 96]} px={5} py={8}>
            <Heading
              py={[3, 4, 5, 6]}
              fontSize={["2xl", "3xl", "4xl"]}
              textAlign="center"
            >
              <Text color="yellow.700" pb={-2}>Welcome!</Text>
              Login to Your ClassHub Account
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
                      <FormErrorMessage fontWeight="bold">
                        {errors.detail}
                      </FormErrorMessage>
                    </FormControl>
                    <FormControl
                      colorScheme="messenger"
                      isInvalid={!!errors.username && touched.username}
                    >
                      <FormLabel htmlFor="username"><RequiredLabel>Username</RequiredLabel></FormLabel>
                      <Field
                        as={Input}
                        type="text"
                        id="username"
                        name="username"
                        variant="filled"
                        borderColor="gray.200"
                        _hover={{ borderColor: "facebook.600" }}
                      />
                      <FormErrorMessage fontWeight="bold">
                        {errors.username}
                      </FormErrorMessage>
                    </FormControl>
                    <FormControl
                      colorScheme="messenger"
                      isInvalid={!!errors.password && touched.password}
                    >
                      <FormLabel htmlFor="password"><RequiredLabel>Password</RequiredLabel></FormLabel>
                      <Field
                        as={Input}
                        type="password"
                        id="password"
                        name="password"
                        variant="filled"
                        borderColor="gray.200"
                        _hover={{ borderColor: "facebook.600" }}
                      />
                      <FormErrorMessage fontWeight="bold">
                        {errors.password}
                      </FormErrorMessage>
                    </FormControl>
                  </VStack>
                  <Button
                    borderRadius={5}
                    colorScheme={"telegram"}
                    style={{ boxShadow: "none" }}
                    mt={8}
                    type="submit"
                    w="full"
                  >
                    {isSubmitting && <Spinner color="white" mr={2} />} Login
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
      </Box>
    </>
  );
}
