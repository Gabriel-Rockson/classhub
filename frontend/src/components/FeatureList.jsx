import React from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  Grid,
  GridItem,
  Image,
} from "@chakra-ui/react";

const data = [
  {
    id: 1,
    image: "https://oacohein.sirv.com/Images/feature-1.png",
    heading: "Track Students Performance",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
  {
    id: 2,
    image: "https://oacohein.sirv.com/Images/feature-2.png",
    heading: "Manage Students Personal and Academic Data",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
  {
    id: 3,
    image: "https://oacohein.sirv.com/Images/feature-3.png",
    heading: "Generate Periodic Reports of Individual Student",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
  {
    id: 4,
    image: "https://oacohein.sirv.com/Images/feature-1.png",
    heading: "Take Students Attendances",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
];

const FeatureList = () => {
  return (
    <>
      <Box my={20}>
        <Heading
          fontSize={["4xl", null, "5xl", "6xl"]}
          textDecoration={"underline"}
          textUnderlineOffset={"20px"}
          textAlign={"center"}
          color={"blue.800"}
        >
          Features
        </Heading>
        <Grid templateRows="repeat(2, 1fr)" templateColumns="repeat(4, 1fr)" gap={20} mt={20}>
          {data?.map((feature) => (
            <GridItem
              key={feature.id}
              colSpan={[4, 4, 4, 4, 2]}
              id={feature.id}
              shadow={"lg"}
            >
              <Flex p={5}>
                <Image
                  src={feature.image}
                  objectFit="cover"
                  boxSize={["50px", "100px", "200px"]}
                />
                <Box ml={5} width={"100%"}>
                  <Heading fontSize={["x", "2xl"]}>{feature.heading}</Heading>
                  <Text fontWeight={"500"} color="gray.700">
                    {feature.description}
                  </Text>
                </Box>
              </Flex>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default FeatureList;
