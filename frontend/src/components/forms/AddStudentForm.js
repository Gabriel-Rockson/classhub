import React, { useState, useEffect } from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  VStack,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import StudentService from "../../services/student.service";

import RequiredLabel from "../RequiredLabel";

const AddStudentForm = ({ isOpen, onClose, setStudents, grade }) => {
  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required("First name is required"),
    last_name: Yup.string().required("Last name is required"),
    date_of_birth: Yup.string().required("Date of Birth is required"),
    gender: Yup.string().required("Gender is required"),
    race: Yup.string().required("Race is required"),
    student_id: Yup.string().required("Student ID is required"),
    home_phone: Yup.string()
      .required("Home Phone is required")
      .min(10, "Minimum of 10 digits"),
  });

  const initialValues = {
    first_name: "",
    middle_name: "",
    last_name: "",
    date_of_birth: "",
    gender: "M",
    race: "W",
    student_id: "",
    grade: grade ? grade : "",
    address: "",
    father_name: "",
    father_contact: "",
    mother_name: "",
    mother_contact: "",
    guardian_name: "",
    guardian_email: "",
    home_phone: "",
  };

  const handleFormSubmit = (data, { setSubmitting, setErrors }) => {
    setSubmitting(true);
    StudentService.addStudent(data)
      .then((response) => {
        // TODO sort the names list according to names
        setStudents((prevStudents) => [...prevStudents, response.data]);
        onClose();
      })
      .catch((error) => {
        setErrors(error.response?.data);
      })
      .finally(() => setSubmitting(false));
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        scrollBehavior={"inside"}
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent borderRadius={5}>
          <ModalHeader>Add New Student</ModalHeader>
          <ModalCloseButton style={{ boxShadow: "none" }} color="red" />

          <Formik
            initialValues={initialValues}
            onSubmit={handleFormSubmit}
            validationSchema={validationSchema}
          >
            {({ errors, touched, submitForm }) => (
              <>
                <ModalBody>
                  <Form>
                    <VStack spacing={5}>
                      <FormControl
                        isInvalid={!!errors.first_name && touched.first_name}
                      >
                        <FormLabel htmlFor="first_name">
                          <RequiredLabel>First Name</RequiredLabel>
                        </FormLabel>
                        <Field
                          as={Input}
                          type="text"
                          id="first_name"
                          name="first_name"
                          borderRadius={5}
                        />
                        <FormErrorMessage fontWeight="bold">
                          {errors.first_name}
                        </FormErrorMessage>
                      </FormControl>
                      <FormControl>
                        <FormLabel htmlFor="middle_name">Middle Name</FormLabel>
                        <Field
                          as={Input}
                          id="middle_name"
                          name="middle_name"
                          type="text"
                          borderRadius={5}
                        />
                      </FormControl>
                      <FormControl
                        isInvalid={!!errors.last_name && touched.last_name}
                      >
                        <FormLabel htmlFor="last_name">
                          <RequiredLabel>Last Name</RequiredLabel>
                        </FormLabel>
                        <Field
                          as={Input}
                          id="last_name"
                          name="last_name"
                          type="text"
                          borderRadius={5}
                        />
                        <FormErrorMessage fontWeight="bold">
                          {errors.last_name}
                        </FormErrorMessage>
                      </FormControl>
                      <FormControl
                        isInvalid={
                          !!errors.date_of_birth && touched.date_of_birth
                        }
                      >
                        <FormLabel htmlFor="date_of_birth">
                          <RequiredLabel>Date of Birth</RequiredLabel>
                        </FormLabel>
                        {/* TODO replace this date time picker with a custom component that fits chakra or a package */}
                        <Field
                          as={Input}
                          id="date_of_birth"
                          name="date_of_birth"
                          type="date"
                          borderRadius={5}
                        />
                        <FormErrorMessage fontWeight="bold">
                          {errors.date_of_birth}
                        </FormErrorMessage>
                      </FormControl>
                      <FormControl
                        isInvalid={!!errors.gender && touched.gender}
                      >
                        <FormLabel htmlFor="gender">
                          <RequiredLabel>Gender</RequiredLabel>
                        </FormLabel>
                        <Field
                          as={Select}
                          id="gender"
                          name="gender"
                          borderRadius={5}
                        >
                          <option value="M">Male</option>
                          <option value="F">Female</option>
                          <option value="O">Other</option>
                        </Field>
                        <FormErrorMessage fontWeight="bold">
                          {errors.gender}
                        </FormErrorMessage>
                      </FormControl>
                      <FormControl isInvalid={!!errors.race && touched.race}>
                        <FormLabel htmlFor="race">
                          <RequiredLabel>Race</RequiredLabel>
                        </FormLabel>
                        <Field
                          as={Select}
                          id="race"
                          name="race"
                          borderRadius={5}
                        >
                          <option value="W">White</option>
                          <option value="B">Black / African American</option>
                          <option value="AIN">American Indian</option>
                          <option value="H">Native Hawaiian</option>
                          <option value="O">Some Other Race</option>
                        </Field>
                        <FormErrorMessage fontWeight="bold">
                          {errors.race}
                        </FormErrorMessage>
                      </FormControl>
                      <FormControl
                        isInvalid={!!errors.home_phone && touched.home_phone}
                      >
                        <FormLabel htmlFor="home_phone">
                          <RequiredLabel>Home Phone</RequiredLabel>
                        </FormLabel>
                        <Field
                          as={Input}
                          id="home_phone"
                          name="home_phone"
                          type="text"
                          borderRadius={5}
                        />
                        <FormErrorMessage fontWeight="bold">
                          {errors.home_phone}
                        </FormErrorMessage>
                      </FormControl>
                      <FormControl
                        isInvalid={!!errors.student_id && touched.student_id}
                      >
                        <FormLabel htmlFor="student_id">
                          <RequiredLabel>Student ID</RequiredLabel>
                        </FormLabel>
                        <Field
                          as={Input}
                          id="student_id"
                          name="student_id"
                          type="text"
                          borderRadius={5}
                        />
                        <FormErrorMessage fontWeight="bold">
                          {errors.student_id}
                        </FormErrorMessage>
                      </FormControl>
                      <FormControl htmlFor="address">
                        <FormLabel>Address</FormLabel>
                        <Field
                          as={Input}
                          id="address"
                          name="address"
                          type="text"
                          borderRadius={5}
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel htmlFor="father_name">
                          Father's Name
                        </FormLabel>
                        <Field
                          as={Input}
                          id="father_name"
                          name="father_name"
                          type="text"
                          borderRadius={5}
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel htmlFor="father_contact">
                          Father's Contact
                        </FormLabel>
                        <Field
                          as={Input}
                          id="father_contact"
                          name="father_contact"
                          type="text"
                          borderRadius={5}
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel htmlFor="mother_name">
                          Mother's Name
                        </FormLabel>
                        <Field
                          as={Input}
                          id="mother_name"
                          name="mother_name"
                          type="text"
                          borderRadius={5}
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel htmlFor="mother_contact">
                          Mother's Contact
                        </FormLabel>
                        <Field
                          as={Input}
                          id="mother_contact"
                          name="mother_contact"
                          type="text"
                          borderRadius={5}
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel htmlFor="guardian_name">
                          Guardian's Name
                        </FormLabel>
                        <Field
                          as={Input}
                          id="guardian_name"
                          name="guardian_name"
                          type="text"
                          borderRadius={5}
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel htmlFor="guardian_email">
                          Guardian's Email
                        </FormLabel>
                        <Field
                          as={Input}
                          id="guardian_email"
                          name="guardian_email"
                          type="text"
                          borderRadius={5}
                        />
                      </FormControl>
                    </VStack>
                  </Form>
                </ModalBody>
                <ModalFooter>
                  <HStack spacing={5}>
                    <Button
                      borderRadius={5}
                      colorScheme={"telegram"}
                      style={{ boxShadow: "none" }}
                      onClick={submitForm}
                    >
                      Add Student
                    </Button>
                    <Button
                      borderRadius={5}
                      colorScheme={"red"}
                      style={{ boxShadow: "none" }}
                      onClick={onClose}
                    >
                      Cancel
                    </Button>
                  </HStack>
                </ModalFooter>
              </>
            )}
          </Formik>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddStudentForm;
