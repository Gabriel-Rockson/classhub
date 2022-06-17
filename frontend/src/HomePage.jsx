import React from "react";
import { Box, Heading, Flex, Text, Stack, Link } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import HomePageNavBar from "./components/navbar/HomePageNavBar";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

import FeatureList from "./components/FeatureList";

function HomePage() {
  return (
    <>
      <Box>
        <HomePageNavBar />
        <Box px={[5, 10, 24, 32]}>
          <Stack direction={["column-reverse", null, null, "row"]}>
            <Flex
              direction="column"
              width={["100%", null, null, "50%", "60%"]}
              py={4}
            >
              <Heading
                fontSize={["3xl", "4xl", "6xl", null, "8xl"]}
                fontWeight={"900"}
                color="gray.800"
              >
                Manage Your Students With{" "}
                <Text as={"span"} fontWeight={"600"}>
                  class
                </Text>
                <Text as={"span"} color="red.600">
                  Hub
                </Text>
              </Heading>
              <Text fontSize={["lg", "lg", "xl"]} py={10} color="blackAlpha.800">
                With classHub, you can have your student's personal data,
                attendance records, class performance, and many more, all in one
                place.
              </Text>
              <Flex>
                <Link
                  py={4}
                  px={8}
                  rounded={"lg"}
                  bg={"blue.500"}
                  _hover={{ bg: "blue.600" }}
                  as={ReactLink}
                  to="/app/register"
                  color={"white"}
                  fontWeight="600"
                  fontSize={["lg", "xl"]}
                  style={{ textDecoration: "none", boxShadow: "none" }}
                >
                  Get Started
                </Link>
              </Flex>
            </Flex>
            <Flex width={["100%", null, null, "50%", "40%"]}>
              <Player
                autoplay
                loop
                src="https://assets3.lottiefiles.com/packages/lf20_yjrdpceb.json"
                style={{ height: "100%", width: "100%" }}
              >
                <Controls
                  visible={false}
                  buttons={["play", "repeat", "frame", "debug"]}
                />
              </Player>
            </Flex>
          </Stack>
          <FeatureList />
        </Box>
      </Box>
    </>
  );
}

export default HomePage;
