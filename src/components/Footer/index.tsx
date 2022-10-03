import { Container, Divider, Flex } from "@chakra-ui/react";

import { Left } from "./Left";
import { Right } from "./Right";

const Footer = () => {
  return (
    <>
      <Divider
        h="1px"
        w="100%"
        bgGradient="linear(to-r, brand.blue, brand.pink)"
      />

      <Flex
        py={14}
        px={4}
        justifyContent="center"
        columnGap={24}
        h="full"
        flexDir={{ base: "column", md: "row" }}
        rowGap={{ base: 10, md: "initial" }}
      >
        <Left />
        <Right />
      </Flex>
    </>
  );
};

export default Footer;
