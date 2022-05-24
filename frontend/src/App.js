import { createRoot } from "react-dom/client";
import React, { useState, useEffect } from "react";

import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./HomePage";
import Dashboard from "./dashboard/Dashboard";
import ClassList from "./dashboard/ClassList";
import ClassAttendance from "./dashboard/ClassAttendance";
import StudentDetail from "./dashboard/StudentDetail";
import StudentList from "./dashboard/StudentList";
import AddAttendance from "./dashboard/AddAttendance";
import AttendanceList from "./dashboard/AttendanceList";
import AttendanceDetail from "./dashboard/AttendanceDetail";
import Login from "./auth/Login";
import Register from "./auth/Register";
import SuperUserRegister from "./auth/SuperUserRegister";
import Profile from "./dashboard/Profile";

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

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
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
              <Route path="attendance-detail" element={<AttendanceDetail />} />
            </Route>
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="/app/login" element={<Login />} />
          <Route path="/app/register" element={<Register />} />
          <Route
            path="/app/register/admin/pin/2008/"
            element={<SuperUserRegister />}
          />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App tab="home" />);
