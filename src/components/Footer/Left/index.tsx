import { Flex, Text } from "@chakra-ui/react";
import { AfrostIcon } from "../../AfrostLogo";

export const Left = () => {
  return (
    <Flex flexDir="column">
      <AfrostIcon
        mr="auto"
        h={{ base: "60px", md: "50px", lg: "60px" }}
        mb={12}
      />
      <Text fontWeight={500} fontSize="md">
        Afrost 2022 <br /> Todos os direitor reservados
      </Text>
      <Text mt={2} opacity="0.6" fontSize="md">
        CNPJ: 35.858.020.0001/82
      </Text>
    </Flex>
  );
};
