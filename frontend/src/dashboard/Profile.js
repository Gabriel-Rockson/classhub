import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Stack,
  Select,
  Button,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";

import AuthService from "../services/auth.service";

export default function Profile() {
  const [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser());

  const initialUserData = {
    username: currentUser?.username,
    email: currentUser?.email,
  };

  const initialTeacherData = {
    first_name: currentUser?.teacher_profile.first_name,
    middle_name: currentUser?.teacher_profile.middle_name,
    last_name: currentUser?.teacher_profile.last_name,
    email_address: currentUser?.teacher_profile.email_address,
    grade: currentUser?.teacher_profile.grade,
    address: currentUser?.teacher_profile.address,
    cell_phone: currentUser?.teacher_profile.cell_phone,
  };

  const handleTeacherDataSubmission = (
    data,
    { setSubmitting, setErrors }
  ) => {};

  return (
    <>
      <Flex align="center" justify="center">
        <Box w={["100%", "90%", "80%", "70%", "60%"]} px={4} mb={20}>
          <Heading py={5} fontSize="2xl">
            Account Settings
          </Heading>
          <hr />
          <Box mt={5}>
            <Heading py={4} fontSize="xl">
              User Information
            </Heading>

            {/* Form for the user info data */}
            <Formik initialValues={initialUserData}>
              {({ errors, touched, isSubmitting }) => (
                <>
                  <Form>
                    <Stack direction={["column", "column", "row"]} spacing={5}>
                      <FormControl>
                        <FormLabel htmlFor="username">Username</FormLabel>
                        <Field
                          as={Input}
                          id="username"
                          name="username"
                          value={initialUserData.username}
                          type="text"
                        />
                        <FormErrorMessage></FormErrorMessage>
                      </FormControl>
                      <FormControl>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Field
                          as={Input}
                          id="email"
                          name="email"
                          value={initialUserData.email}
                          type="email"
                        />
                        <FormErrorMessage></FormErrorMessage>
                      </FormControl>
                    </Stack>

                    <Flex mt={5} direction="column">
                      <Text>Staff Member</Text>
                      <Text
                        textAlign="center"
                        bg="green.300"
                        color="green.800"
                        pt={1}
                        rounded="xl"
                        w={20}
                      >
                        Yes
                      </Text>
                    </Flex>
                    <Button
                      my={8}
                      type="submit"
                      _hover={{ bg: "telegram.700" }}
                      bg="telegram.600"
                      color="white"
                      style={{ boxShadow: "none" }}
                    >
                      Save User Info Changes
                    </Button>
                  </Form>
                </>
              )}
            </Formik>
          </Box>

          <hr />

          <Box mt={10}>
            <Heading py={4} fontSize="xl">
              Teacher Profile
            </Heading>

            <Formik
              initialValues={initialTeacherData}
              onSubmit={handleTeacherDataSubmission}
            >
              {({ errors, touched, isSubmitting }) => (
                <>
                  <Stack direction={["column", "column", "row"]} spacing={5}>
                    <FormControl>
                      <FormLabel htmlFor="first_name">First Name</FormLabel>
                      <Field
                        as={Input}
                        id="first_name"
                        name="first_name"
                        value={initialTeacherData.first_name}
                        type="text"
                      />
                      <FormErrorMessage></FormErrorMessage>
                    </FormControl>
                    <FormControl>
                      <FormLabel htmlFor="middle_name">Middle Name</FormLabel>
                      <Field
                        as={Input}
                        id="middle_name"
                        name="middle_name"
                        value={initialTeacherData.middle_name}
                        type="text"
                      />
                      <FormErrorMessage></FormErrorMessage>
                    </FormControl>
                  </Stack>

                  <Stack
                    mt={5}
                    direction={["column", "column", "row"]}
                    spacing={5}
                  >
                    <FormControl>
                      <FormLabel htmlFor="last_name">Last Name</FormLabel>
                      <Field
                        as={Input}
                        id="last_name"
                        name="last_name"
                        value={initialTeacherData.last_name}
                        type="text"
                      />
                      <FormErrorMessage></FormErrorMessage>
                    </FormControl>
                    <FormControl>
                      <FormLabel htmlFor="email_address">
                        Email Address
                      </FormLabel>
                      <Fied
                        as={Input}
                        id="email_address"
                        name="email_address"
                        value={initialTeacherData.email_address}
                        type="email"
                      />
                      <FormErrorMessage></FormErrorMessage>
                    </FormControl>
                  </Stack>

                  <Stack
                    mt={5}
                    direction={["column", "column", "row"]}
                    spacing={5}
                  >
                    {/* TODO when the class is set once, it shouldn't be changed without admin authorization */}
                    <FormControl>
                      <FormLabel htmlFor="grade">Class</FormLabel>
                      <Field
                        as={Select}
                        id="grade"
                        name="grade"
                        value={initialTeacherData.grade}
                      >
                        <option>Class 1</option>
                        <option>Class 2</option>
                      </Field>
                      <FormErrorMessage></FormErrorMessage>
                    </FormControl>
                    <FormControl>
                      <FormLabel htmlFor="address">Address</FormLabel>
                      <Field
                        as={Input}
                        id="address"
                        name="address"
                        value={initialTeacherData.address}
                        type="text"
                      />
                      <FormErrorMessage></FormErrorMessage>
                    </FormControl>
                  </Stack>

                  <Stack
                    mt={5}
                    direction={["column", "column", "row"]}
                    spacing={5}
                  >
                    <FormControl w={["100%", "100%", "50%"]}>
                      <FormLabel>Cell Phone</FormLabel>
                      <Field
                        as={Input}
                        id="cell_phone"
                        name="cell_phone"
                        value={initialTeacherData.cell_phone}
                        type="text"
                      />
                      <FormErrorMessage></FormErrorMessage>
                    </FormControl>
                  </Stack>

                  <Button
                    mt={8}
                    _hover={{ bg: "green.700" }}
                    bg="green.600"
                    color="white"
                    style={{ boxShadow: "none" }}
                  >
                    Save Teacher Profile Changes
                  </Button>
                </>
              )}
            </Formik>
          </Box>
        </Box>
      </Flex>
    </>
  );
}
