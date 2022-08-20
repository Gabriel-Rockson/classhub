import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  Flex,
} from "@chakra-ui/react";

const IncompleteProfileAlert = () => {
  return (
    <>
      <Alert status="warning" flexDirection={["column", null, "row"]}>
        <AlertIcon />
        <AlertTitle>Your profile is incomplete.</AlertTitle>

        <AlertDescription>
          Please complete your profile to be able to access the classlist.
        </AlertDescription>
      </Alert>
    </>
  );
};

export default IncompleteProfileAlert;
