import {
  Box,
  Button,
  Heading,
  useColorMode,
  Flex,
  Text,
  Icon,
} from "@chakra-ui/react";
import { BsArrowDown } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import AnimationComp from "../AnimationComp";

function Hero() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      flexDir="column"
      w="100%"
      alignItems="center"
      maxW={{ base: "500px", md: "800px" }}
    >
      <Text
        bgGradient="linear(90deg, #6EBC00 20.83%, #807AD0 74.48%)"
        bgClip="text"
        fontSize={{ base: "md", md: "2xl" }}
        fontWeight={700}
        textTransform="uppercase"
      >
        Desafio Afrost
      </Text>

      <Text fontSize={{ base: "md", md: "2xl" }} textTransform="uppercase">
        On-line & Gratuito
      </Text>

      <Heading
        fontWeight={900}
        fontSize={{ base: "4xl", md: "5xl" }}
        textAlign="center"
        width="100%"
        lineHeight="120%"
        color={`brand.${colorMode}.text`}
        mt={12}
        mb={{ base: 14, md: 24 }}
      >
        Do zero
        <br />
        <Text
          as="strong"
          fontWeight={900}
          bgGradient="linear(to right, brand.green, brand.purple)"
          backgroundClip="text"
        >
          aos 10 Milhões
        </Text>
      </Heading>

      <Box w={{ base: "80%", md: "100%" }}>
        <Box
          fontWeight={900}
          fontSize={{ base: "xl", md: "3xl" }}
          mb={8}
          textAlign="center"
          lineHeight="auto"
        >
          Descubra o passo a passo que percorremos para faturar mais de{" "}
          <Text
            as="span"
            bgGradient="linear(to-r, brand.green, brand.purple)"
            bgClip="text"
          >
            R$ 10 milhões com um negócio de iPhones
          </Text>{" "}
          (começando do absoluto zero).
        </Box>

        <Text fontSize={{ base: "md", md: "x-large" }} textAlign="center">
          Toque no botão abaixo e participe do Desafio gratuito de 21 dias.
        </Text>
      </Box>

      <Icon as={BsArrowDown} fontSize="2rem" color="brand.green" my={8} />

      <Button variant="primary" w={{ base: "90%", md: "100%" }}>
        <Icon
          as={FaTelegramPlane}
          fontSize={{ base: "1.5rem", md: "2rem" }}
          color="#fff"
          mr={{ base: 2, md: 4 }}
        />
        Quero participar gratuitamente
      </Button>
    </Flex>
  );
}

export default Hero;
