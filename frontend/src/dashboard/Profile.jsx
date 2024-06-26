import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Chakra components
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
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  useDisclosure,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Spinner,
} from "@chakra-ui/react";

// Formik and Yp
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

// Services
import AuthService from "../services/auth.service";
import TeacherService from "../services/teacher.service";
import UserService from "../services/user.service";
import ClassService from "../services/class.service";

import IncompleteProfileAlert from "../components/alerts/IncompleteFormAlert.jsx";

// Components
import RequiredLabel from "../components/RequiredLabel";

// TODO add alert on successfully updating the user info

export default function Profile() {
  const [classes, setClasses] = useState(undefined);
  const [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser());
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const cancelRef = React.useRef();

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

  const show_alert =
    teacher_profile.first_name &&
    teacher_profile.last_name &&
    teacher_profile.grade;

  if (teacher_profile === null) {
    return (
      <Heading>There is no associated teacher profile for this user</Heading>
    );
  }

  const initialTeacherData = {
    first_name: teacher_profile.first_name ? teacher_profile.first_name : "",
    middle_name: teacher_profile.middle_name ? teacher_profile.middle_name : "",
    last_name: teacher_profile.last_name ? teacher_profile.last_name : "",
    email_address: teacher_profile.email ? teacher_profile.email : "",
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

  const fetchUpdatedUserData = () => {
    UserService.getUserData(currentUser.id)
      .then((response) => {
        setCurrentUser((prevValue) => AuthService.getCurrentUser());
        onOpen();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleTeacherDataSubmission = (data, { setSubmitting, setErrors }) => {
    setSubmitting(true);
    const id = teacher_profile.id;
    TeacherService.updateTeacherData(id, data)
      .then((response) => {
        fetchUpdatedUserData();
      })
      .catch((error) => {
        setErrors(error.response?.data);
      })
      .finally(() => setSubmitting(false));
  };

  return (
    <>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent bg={"blackAlpha.900"}>
            <AlertDialogBody>
              <Alert variant="top-accent" status="success">
                <AlertIcon />
                <Box>
                  <AlertTitle>Profile Update Successful</AlertTitle>
                  <AlertDescription>
                    You have successfully updated your profile details
                  </AlertDescription>
                </Box>
              </Alert>
            </AlertDialogBody>

            <AlertDialogFooter>
              <Stack direction="row" spacing={5}>
                <Button
                  borderRadius={5}
                  colorScheme={"telegram"}
                  style={{ boxShadow: "none" }}
                  onClick={() =>
                    navigate("/app/dashboard/class-list", { replace: true })
                  }
                >
                  Go to Class List
                </Button>
                <Button
                  borderRadius={5}
                  colorScheme={"whatsapp"}
                  style={{ boxShadow: "none" }}
                  ref={cancelRef}
                  onClick={onClose}
                >
                  OK
                </Button>
              </Stack>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
      <Flex align="center" justify="center">
        <Box w={["100%", "90%", "80%", "70%", "60%"]} px={4} mb={20}>
          {!show_alert && <IncompleteProfileAlert />}
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
                        <FormLabel htmlFor="username">
                          Username <RequiredLabel />
                        </FormLabel>
                        <Field
                          variant="filled"
                          as={Input}
                          id="username"
                          name="username"
                          type="text"
                        />
                        <FormErrorMessage fontWeight="bold"></FormErrorMessage>
                      </FormControl>
                      <FormControl>
                        <FormLabel htmlFor="email">
                          Email <RequiredLabel />
                        </FormLabel>
                        <Field
                          variant="filled"
                          as={Input}
                          id="email"
                          name="email"
                          type="email"
                        />
                        <FormErrorMessage fontWeight="bold"></FormErrorMessage>
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
                      borderRadius={5}
                      colorScheme={"telegram"}
                      style={{ boxShadow: "none" }}
                      my={8}
                      type="submit"
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
            <Heading py={5} mb={5} fontSize="xl">
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
                        <FormLabel htmlFor="first_name">
                          <RequiredLabel>First Name</RequiredLabel>
                        </FormLabel>
                        <Field
                          variant="filled"
                          as={Input}
                          id="first_name"
                          name="first_name"
                          type="text"
                        />
                        <FormErrorMessage fontWeight="bold">
                          {errors.first_name}
                        </FormErrorMessage>
                      </FormControl>
                      <FormControl
                        isInvalid={!!errors.middle_name && touched.middle_name}
                      >
                        <FormLabel htmlFor="middle_name">Middle Name</FormLabel>
                        <Field
                          variant="filled"
                          as={Input}
                          id="middle_name"
                          name="middle_name"
                          type="text"
                        />
                        <FormErrorMessage fontWeight="bold">
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
                        <FormLabel htmlFor="last_name">
                          <RequiredLabel>Last Name</RequiredLabel>
                        </FormLabel>
                        <Field
                          variant="filled"
                          as={Input}
                          id="last_name"
                          name="last_name"
                          type="text"
                        />
                        <FormErrorMessage fontWeight="bold">
                          {errors.last_name}
                        </FormErrorMessage>
                      </FormControl>
                      <FormControl
                        isInvalid={
                          !!errors.email_address && touched.email_address
                        }
                      >
                        <FormLabel htmlFor="email_address">
                          <RequiredLabel>Email Address</RequiredLabel>
                        </FormLabel>
                        <Field
                          variant="filled"
                          as={Input}
                          id="email_address"
                          name="email_address"
                          type="email"
                        />
                        <FormErrorMessage fontWeight="bold">
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
                        <FormLabel htmlFor="grade">
                          <RequiredLabel>Class</RequiredLabel>
                        </FormLabel>
                        <Field
                          variant="filled"
                          as={Select}
                          id="grade"
                          name="grade"
                        >
                          {/* TODO fix options default value */}
                          <option value="">---------</option>
                          {classes?.map((grade) => (
                            <option key={grade.id} value={grade.id}>
                              Grade {grade.grade}
                            </option>
                          ))}
                        </Field>
                        <FormErrorMessage fontWeight="bold">
                          {errors.grade}
                        </FormErrorMessage>
                      </FormControl>
                      <FormControl
                        isInvalid={!!errors.address && touched.address}
                      >
                        <FormLabel htmlFor="address">Address</FormLabel>
                        <Field
                          variant="filled"
                          as={Input}
                          id="address"
                          name="address"
                          type="text"
                        />
                        <FormErrorMessage fontWeight="bold">
                          {errors.address}
                        </FormErrorMessage>
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
                          variant="filled"
                          as={Input}
                          id="cell_phone"
                          name="cell_phone"
                          type="text"
                        />
                        <FormErrorMessage fontWeight="bold">
                          {errors.cell_phone}
                        </FormErrorMessage>
                      </FormControl>
                    </Stack>

                    <Button
                      borderRadius={5}
                      colorScheme={"telegram"}
                      style={{ boxShadow: "none" }}
                      disabled={isSubmitting}
                      type="submit"
                      mt={8}
                    >
                      {isSubmitting && <Spinner color="white" mr={2} />} Save
                      Teacher Profile Changes
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
