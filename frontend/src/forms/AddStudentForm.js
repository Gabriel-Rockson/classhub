import React from "react";
import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";

const AddStudentForm = ({ initialValues, handleFormSubmit }) => {
  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <VStack spacing={5}>
              <FormControl>
                <FormLabel htmlFor="first_name">First Name</FormLabel>
                <Field
                  as={Input}
                  type="text"
                  id="first_name"
                  name="first_name"
                  borderRadius={0}
                />
                <FormErrorMessage></FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="middle_name">Middle Name</FormLabel>
                <Field
                  as={Input}
                  id="middle_name"
                  name="middle_name"
                  type="text"
                  borderRadius={0}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="last_name">Last Name</FormLabel>
                <Field
                  as={Input}
                  id="last_name"
                  name="last_name"
                  type="text"
                  borderRadius={0}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="date_of_birth">Date of Birth</FormLabel>
                {/* TODO replace this date time picker with a custom component that fits chakra or a package */}
                <Field
                  as={Input}
                  id="date_of_birth"
                  name="date_of_birth"
                  type="date"
                  borderRadius={0}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="gender">Gender</FormLabel>
                <Field as={Select} id="gender" name="gender" borderRadius={0}>
                  <option value="M">Male</option>
                  <option value="F">Female</option>
                  <option value="O">Other</option>
                </Field>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="race">Race</FormLabel>
                <Field as={Select} id="race" name="race" borderRadius={0}>
                  <option value="W">White</option>
                  <option value="B">Black / African American</option>
                  <option value="AIN">American Indian</option>
                  <option value="H">Native Hawaiian</option>
                  <option value="O">Some Other Race</option>
                </Field>
              </FormControl>
              {/* TODO the grade of the student should be automatically filled based on the class list being viewed */}
              <FormControl>
                <FormLabel htmlFor="student_id">Student ID</FormLabel>
                <Field
                  as={Input}
                  id="student_id"
                  name="student_id"
                  type="text"
                  borderRadius={0}
                />
              </FormControl>
              <FormControl htmlFor="address">
                <FormLabel>Address</FormLabel>
                <Field
                  as={Input}
                  id="address"
                  name="address"
                  type="text"
                  borderRadius={0}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="father_name">Father's Name</FormLabel>
                <Field
                  as={Input}
                  id="father_name"
                  name="father_name"
                  type="text"
                  borderRadius={0}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="father_contact">Father's Contact</FormLabel>
                <Field
                  as={Input}
                  id="father_contact"
                  name="father_contact"
                  type="text"
                  borderRadius={0}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="mother_name">Mother's Name</FormLabel>
                <Field
                  as={Input}
                  id="mother_name"
                  name="mother_name"
                  type="text"
                  borderRadius={0}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="mother_contact">Mother's Contact</FormLabel>
                <Field
                  as={Input}
                  id="mother_contact"
                  name="mother_contact"
                  type="text"
                  borderRadius={0}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="guardian_name">Guardian's Name</FormLabel>
                <Field
                  as={Input}
                  id="guardian_name"
                  name="guardian_name"
                  type="text"
                  borderRadius={0}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="guardian_email">Guardian's Email</FormLabel>
                <Field
                  as={Input}
                  id="guardian_email"
                  name="guardian_email"
                  type="text"
                  borderRadius={0}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="home_phone">Home Phone</FormLabel>
                <Field
                  as={Input}
                  id="home_phone"
                  name="home_phone"
                  type="text"
                  borderRadius={0}
                />
              </FormControl>
            </VStack>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AddStudentForm;
