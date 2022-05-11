import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Chakra components
import {
  TableContainer,
  Table,
  Thead,
  Tbody,
  Th,
  Tr,
  Td,
  Select,
  Button,
  Flex,
  Icon,
  Heading,
  Stack,
  Alert,
  AlertIcon,
  AlertDescription,
  AlertTitle,
  Spinner,
  FormErrorMessage,
  FormErrorIcon,
  FormControl,
} from "@chakra-ui/react";

// Formik and Yup
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

// Icons
import { ImUserCheck } from "react-icons/im";
import { AiOutlineRollback } from "react-icons/ai";

// Custom hooks
import { useGradeAndStudents } from "../hooks/custom-hooks";

// Services
import AttendanceService from "../services/attendance.service";

const AddAttendance = () => {
  const navigate = useNavigate();
  const [attendanceToday, setAttendanceToday] = useState(null);
  const { isFetching, students, grade } = useGradeAndStudents();

  useEffect(() => {
    AttendanceService.getTodayAttendances()
      .then((response) => {
        setAttendanceToday(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const checkAttendance = (isSubmitting, status, student) => {
    return (
      (!isSubmitting && status?.status === 201) ||
      attendanceToday?.some((attendance) => attendance.student === student.id)
    );
  };

  const attendanceValidationSchema = Yup.object().shape({
    attendance: Yup.string().required("This field is required"),
  });

  const handleStudentAttendanceSubmit = (
    data,
    { setErrors, setSubmitting, setStatus }
  ) => {
    setSubmitting(true);
    AttendanceService.addStudentAttendance(data)
      .then((response) => {
        setStatus(response);
      })
      .catch((error) => {
        setErrors(error?.response.data);
      })
      .finally(() => setSubmitting(false));
  };

  if (isFetching) {
    return (
      <>
        <Flex justify="center" align="center" py={5}>
          <Spinner color="telegram.700" />
        </Flex>
      </>
    );
  }

  if (!isFetching && students?.length === 0) {
    return (
      <>
        <Flex py={5}>
          <Alert status="info">
            <Stack direction="column" spacing={5}>
              <Flex direction="row">
                <AlertIcon />
                <AlertTitle>Empty Class</AlertTitle>
              </Flex>
              <AlertDescription>
                Sorry!!! There are no students registered in this class yet, you
                can go to the 'Class List' page to register a new student.
              </AlertDescription>
            </Stack>
          </Alert>
        </Flex>
      </>
    );
  }

  return (
    <>
      <Button
        borderRadius={5}
        colorScheme={"orange"}
        style={{ boxShadow: "none" }}
        mt={6}
        size={["md"]}
        fontSize={"14px"}
        onClick={() => navigate(-1)}
      >
        <Flex alignItems={"center"}>
          <Icon as={AiOutlineRollback} mr={2} /> Attendance List
        </Flex>
      </Button>

      <Flex mt={3} mb={6} justifyContent={"center"}>
        <Heading fontSize={["lg", "xl", "2xl"]}>
          Class {grade?.grade} Attendance - {new Date().toDateString()}
        </Heading>
      </Flex>

      <TableContainer py={4} boxShadow="lg" rounded="md">
        <Table variant={"unstyled"}>
          <Thead borderBottom={"2px"} borderColor={"gray.200"}>
            <Tr>
              <Th>Student</Th>
              <Th>Student ID</Th>
              <Th>Attendance</Th>
            </Tr>
          </Thead>
          <Tbody>
            {students?.map((student) => (
              <Tr key={student.id}>
                <Td>{`${student.first_name} ${student.middle_name} ${student.last_name}`}</Td>
                <Td>{student.student_id}</Td>

                <Formik
                  initialValues={{ attendance: "P", student: student.id }}
                  validationSchema={attendanceValidationSchema}
                  onSubmit={handleStudentAttendanceSubmit}
                >
                  {({ errors, isSubmitting, touched, status, submitForm }) => (
                    <>
                      <Td>
                        <Form>
                          <FormControl
                            isInvalid={
                              !!errors.attendance && touched.attendance
                            }
                          >
                            <Field
                              as={Select}
                              id="attendance"
                              name="attendance"
                              borderRadius={5}
                              disabled={checkAttendance(
                                isSubmitting,
                                status,
                                student
                              )}
                            >
                              <option value="P">Present</option>
                              <option value="UNEX">
                                SC-UNEX ( Unexcused / Unverified )
                              </option>
                              <option value="ETRD">
                                SC-ETRD ( Excused Tardy )
                              </option>
                              <option value="UTRD">
                                SC-UTRD ( Unexcused Tardy )
                              </option>
                              <option value="VTP">
                                SC-VTP ( Virtual Present Code )
                              </option>
                            </Field>
                            <FormErrorMessage>
                              <FormErrorIcon />
                              {errors.attendance}
                            </FormErrorMessage>
                          </FormControl>
                        </Form>
                      </Td>
                      <Td>
                        <Button
                          colorScheme={"telegram"}
                          borderRadius={5}
                          style={{ boxShadow: "none" }}
                          onClick={submitForm}
                          disabled={
                            isSubmitting ||
                            checkAttendance(isSubmitting, status, student)
                          }
                        >
                          <Flex alignItems="center">
                            <Icon as={ImUserCheck} mr={2} />{" "}
                            {checkAttendance(isSubmitting, status, student)
                              ? "Saved"
                              : "Save"}
                          </Flex>
                        </Button>
                      </Td>
                    </>
                  )}
                </Formik>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default AddAttendance;
