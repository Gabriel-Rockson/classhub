import { createRoot } from "react-dom/client";
import React from "react";

import { ChakraProvider } from "@chakra-ui/react";

import HomePage from "./HomePage";

function App() {
  return (
    <ChakraProvider>
      <HomePage />
    </ChakraProvider>
  );
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App tab="home" />);
