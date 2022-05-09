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
import * as Yup from "yup";

import AuthService from "../services/auth.service";
import TeacherService from "../services/teacher.service";
import UserService from "../services/user.service";
import ClassService from "../services/class.service";

export default function Profile() {
  const [classes, setClasses] = useState(undefined);
  const [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser());

  useEffect(() => {
    ClassService.getClassList()
      .then((response) => {
        setClasses(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const initialUserData = {
    username: currentUser?.username,
    email: currentUser?.email,
  };

  const teacher_profile = currentUser?.teacher_profile;

  const initialTeacherData = {
    first_name: teacher_profile.first_name ? teacher_profile.first_name : "",
    middle_name: teacher_profile.middle_name ? teacher_profile.middle_name : "",
    last_name: teacher_profile.last_name ? teacher_profile.last_name : "",
    email_address: teacher_profile.email_address
      ? teacher_profile.email_address
      : "",
    grade: teacher_profile.grade ? teacher_profile.grade : "",
    address: teacher_profile.address ? teacher_profile.address : "",
    cell_phone: teacher_profile.cell_phone ? teacher_profile.cell_phone : "",
  };

  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required("First Name is required"),
    last_name: Yup.string().required("Last Name is required"),
    grade: Yup.string().required("You must select a class"),
    email_address: Yup.string()
      .email("Invalid Email")
      .required("Email Address is required"),
  });

  const handleTeacherDataSubmission = (data, { setSubmitting, setErrors }) => {
    setSubmitting(true);
    const id = teacher_profile.id;
    TeacherService.updateTeacherData(id, data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setSubmitting(false));
  };

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
          
          <Text>{initialTeacherData.first_name}</Text>{}
          <Text>{initialTeacherData.grade}</Text>{}

          <Box mt={10}>
            <Heading py={4} fontSize="xl">
              Teacher Profile
            </Heading>

            <Formik
              initialValues={initialTeacherData}
              validationSchema={validationSchema}
              onSubmit={handleTeacherDataSubmission}
            >
              {({ errors, touched, isSubmitting }) => (
                <>
                  <Form>
                    <Stack direction={["column", "column", "row"]} spacing={5}>
                      <FormControl
                        isInvalid={!!errors.first_name && touched.first_name}
                      >
                        <FormLabel htmlFor="first_name">First Name</FormLabel>
                        <Field
                          as={Input}
                          id="first_name"
                          name="first_name"
                          type="text"
                        />
                        <FormErrorMessage>{errors.first_name}</FormErrorMessage>
                      </FormControl>
                      <FormControl
                        isInvalid={!!errors.middle_name && touched.middle_name}
                      >
                        <FormLabel htmlFor="middle_name">Middle Name</FormLabel>
                        <Field
                          as={Input}
                          id="middle_name"
                          name="middle_name"
                          type="text"
                        />
                        <FormErrorMessage>
                          {errors.middle_name}
                        </FormErrorMessage>
                      </FormControl>
                    </Stack>

                    <Stack
                      mt={5}
                      direction={["column", "column", "row"]}
                      spacing={5}
                    >
                      <FormControl
                        isInvalid={!!errors.last_name && touched.last_name}
                      >
                        <FormLabel htmlFor="last_name">Last Name</FormLabel>
                        <Field
                          as={Input}
                          id="last_name"
                          name="last_name"
                          type="text"
                        />
                        <FormErrorMessage>{errors.last_name}</FormErrorMessage>
                      </FormControl>
                      <FormControl
                        isInvalid={
                          !!errors.email_address && touched.email_address
                        }
                      >
                        <FormLabel htmlFor="email_address">
                          Email Address
                        </FormLabel>
                        <Field
                          as={Input}
                          id="email_address"
                          name="email_address"
                          type="email"
                        />
                        <FormErrorMessage>
                          {errors.email_address}
                        </FormErrorMessage>
                      </FormControl>
                    </Stack>

                    <Stack
                      mt={5}
                      direction={["column", "column", "row"]}
                      spacing={5}
                    >
                      {/* TODO when the class is set once, it shouldn't be changed without admin authorization */}
                      <FormControl isInvalid={!!errors.grade && touched.grade}>
                        <FormLabel htmlFor="grade">Class</FormLabel>
                        <Field as={Select} id="grade" name="grade">
                          {classes?.map((grade) => (
                            <option key={grade.id} value={grade.id}>
                              Class {grade.grade}
                            </option>
                          ))}
                        </Field>
                        <FormErrorMessage>{errors.grade}</FormErrorMessage>
                      </FormControl>
                      <FormControl
                        isInvalid={!!errors.address && touched.address}
                      >
                        <FormLabel htmlFor="address">Address</FormLabel>
                        <Field
                          as={Input}
                          id="address"
                          name="address"
                          type="text"
                        />
                        <FormErrorMessage>{errors.address}</FormErrorMessage>
                      </FormControl>
                    </Stack>

                    <Stack
                      mt={5}
                      direction={["column", "column", "row"]}
                      spacing={5}
                    >
                      <FormControl
                        w={["100%", "100%", "50%"]}
                        isInvalid={!!errors.cell_phone && touched.cell_phone}
                      >
                        <FormLabel>Cell Phone</FormLabel>
                        <Field
                          as={Input}
                          id="cell_phone"
                          name="cell_phone"
                          type="text"
                        />
                        <FormErrorMessage>{errors.cell_phone}</FormErrorMessage>
                      </FormControl>
                    </Stack>

                    <Button
                      type="submit"
                      mt={8}
                      _hover={{ bg: "green.700" }}
                      _active={{ bg: "green.700" }}
                      bg="green.600"
                      color="white"
                      style={{ boxShadow: "none" }}
                    >
                      Save Teacher Profile Changes
                    </Button>
                  </Form>
                </>
              )}
            </Formik>
          </Box>
        </Box>
      </Flex>
    </>
  );
}
