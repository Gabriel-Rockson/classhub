import { createRoot } from "react-dom/client";
import React from "react";

import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import HomePage from "./HomePage";
import Dashboard from "./dashboard/Dashboard";
import ClassList from "./dashboard/ClassList";
import ClassAttendance from "./dashboard/ClassAttendance";
import StudentDetail from "./dashboard/StudentDetail";
import StudentList from "./dashboard/StudentList";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/app/dashboard" element={<Dashboard />}>
            <Route index element={<ClassList />} />
            <Route path="class-list" element={<ClassList />}>
              <Route index element={<StudentList />} />
              <Route path=":studentUid" element={<StudentDetail />} />
            </Route>
            <Route path="class-attendance" element={<ClassAttendance />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App tab="home" />);
