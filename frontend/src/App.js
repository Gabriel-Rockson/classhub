import { createRoot } from "react-dom/client";
import React, { useState, useEffect, Suspense, lazy } from "react";

import { extendTheme, ChakraProvider, Flex, Spinner } from "@chakra-ui/react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const HomePage = lazy(() => import("./HomePage"));
const Login = lazy(() => import("./auth/Login"));
const Register = lazy(() => import("./auth/Register"));
const SuperUserRegister = lazy(() => import("./auth/SuperUserRegister"));

const Dashboard = lazy(() => import("./dashboard/Dashboard"));
const Profile = lazy(() => import("./dashboard/Profile"));

const AddAttendance = lazy(() => import("./dashboard/AddAttendance"));
const AttendanceList = lazy(() => import("./dashboard/AttendanceList"));
const AttendanceDetail = lazy(() => import("./dashboard/AttendanceDetail"));

const ClassList = lazy(() => import("./dashboard/ClassList"));
const ClassAttendance = lazy(() => import("./dashboard/ClassAttendance"));
const StudentDetail = lazy(() => import("./dashboard/StudentDetail"));
const StudentList = lazy(() => import("./dashboard/StudentList"));

import AuthService from "./services/auth.service";

const theme = extendTheme({
  fonts: {
    heading: `'Roboto', 'Raleway', sans-serif`,
    body: `'Roboto', 'Raleway', sans-serif`,
  },
});

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(AuthService.getCurrentUser());
  const [accessToken, setAccessToken] = useState(AuthService.getAccessToken());

  useEffect(() => {
    setUser((prevValue) => AuthService.getCurrentUser());
    setAccessToken((prevValue) => AuthService.getAccessToken());
  }, []);

  if (!user && !accessToken) {
    return <Navigate to="/app/login" replace={true} />;
  }
  return children;
};

const LoadingSpinner = () => {
  return (
    <>
      <Flex
        fontSize={"xl"}
        color="gray.600"
        align={"center"}
        justify="center"
        height="100vh"
      >
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.100"
          color="red.600"
          size="xl"
        />
      </Flex>
    </>
  );
};

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/app/login" element={<Login />} />
            <Route path="/app/register" element={<Register />} />
            <Route
              path="/app/register/admin/pin/2008/"
              element={<SuperUserRegister />}
            />
          </Routes>
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route
              path="/app/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            >
              <Route index element={<AttendanceList />} />
              <Route path="class-list" element={<ClassList />}>
                <Route index element={<StudentList />} />
                <Route path=":id" element={<StudentDetail />} />
              </Route>
              <Route path="class-attendance" element={<ClassAttendance />}>
                <Route index element={<AttendanceList />} />
                <Route path="add-attendance" element={<AddAttendance />} />
                <Route
                  path="attendance-detail"
                  element={<AttendanceDetail />}
                />
              </Route>
              <Route path="profile" element={<Profile />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ChakraProvider>
  );
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App tab="home" />);
