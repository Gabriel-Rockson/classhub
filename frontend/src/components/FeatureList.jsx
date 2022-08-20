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
    id: 4,
    image:
      "https://oacohein.sirv.com/Images/%E2%80%94Pngtree%E2%80%94student%20who%20is%20attending%20class_4543897.png",
    heading: "Take Students Attendances",
    description:
      "School attendance is a very powerful predictor of a student's performance. Use classHub to keep track of your\
    student's attendance on a daily basis, and also get to see a charted overall attendance structure of each student.",
    upcoming: false,
  },

  {
    id: 1,
    image:
      "https://oacohein.sirv.com/Images/%E2%80%94Pngtree%E2%80%94png%20performance%20staff%20png_4552142.png",
    heading: "Track Students Performance",
    description:
      "Use classHub's easy to use, course management and grading management system to grade your students on their quizzes, \
    assignments, semester exams.",
    upcoming: true,
  },
  {
    id: 2,
    image: "https://oacohein.sirv.com/Images/feature-2.png",
    heading: "Manage Students Personal and Academic Data",
    description:
      "With the Student DMS of classHub, you are able to keep all necessary information about a student in one place. \
    Personal, academic, medical, and all related data about a student can be kept here which will makes accessing it handy.",
    upcoming: true,
  },
  {
    id: 3,
    image: "https://oacohein.sirv.com/Images/feature-3.png",
    heading: "Generate Periodic Reports of Individual Student",
    description:
      "Do you need to get a report on an individual student on the fly? ClassHub allows you to select different data points \
    on a student such as attendance, course performance, overall performance and get to generate a report on that student \
    in the bink of an eye.",
    upcoming: true,
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
        <Grid
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(4, 1fr)"
          gap={10}
          mt={20}
        >
          {data?.map((feature) => (
            <GridItem
              key={feature.id}
              colSpan={[4, 4, 4, 4, 2]}
              id={feature.id}
              shadow={"dark-lg"}
            >
              <Flex p={5}>
                <Image
                  src={feature.image}
                  objectFit="cover"
                  boxSize={["50px", "100px", "200px"]}
                />
                <Box ml={5} width={"100%"}>
                  <Heading fontSize={["xl", "2xl"]} pb={2}>
                    {feature.heading}
                  </Heading>
                  <Text fontWeight={"500"} color="gray.700">
                    {feature.description}
                  </Text>
                </Box>
              </Flex>{" "}
              {feature.upcoming && (
                <Flex
                  p={1}
                  px={2}
                  textAlign="center"
                  justifySelf="end"
                  w={"150px"}
                  bg={"red.200"}
                  color={"red.800"}
                  my={2}
                  mx={2}
                  rounded="md"
                  fontWeight="bold"
                >
                  upcoming feature
                </Flex>
              )}
            </GridItem>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default FeatureList;
