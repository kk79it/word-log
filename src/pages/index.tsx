import { Box, Button, Container, HStack, VStack } from "@chakra-ui/react";
import { NextPage } from "next";
import Link from "next/link";

const IndexPage: NextPage = () => {
  return (
    <Container>
      <VStack>
        <Box>dd</Box>
        <Box>dd</Box>
        <Box>dd</Box>
      </VStack>
      <HStack flexDirection={"row-reverse"}>
        <Button as={Link} href="/edit">
          編集する
        </Button>
      </HStack>
    </Container>
  );
};

export default IndexPage;
