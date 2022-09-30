import {
  Box,
  Button,
  Heading,
  useColorMode,
  useDisclosure,
  Flex,
  Text,
  Icon,
  Modal,
} from "@chakra-ui/react";
import { BsArrowDown } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import Form from "../Form";

function Hero() {
  const { colorMode } = useColorMode();
  const { onOpen, isOpen, onClose } = useDisclosure();
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
        mt={{ base: 6, sm: 12 }}
        mb={{ base: 6, sm: 24 }}
      >
        Do zero
        <br />
        <Text
          as="strong"
          fontWeight={900}
          bg="brand.green"
          backgroundClip="text"
        >
          aos 10 Milhões
        </Text>
      </Heading>

      <Box w={{ base: "80%", md: "100%" }}>
        <Box
          fontWeight={900}
          fontSize={{ base: "xl", md: "3xl" }}
          mb={{ base: 4, sm: 8 }}
          textAlign="center"
          lineHeight="auto"
        >
          Descubra o passo a passo que percorremos para faturar mais de{" "}
          <Text as="span" bg="brand.green" bgClip="text">
            R$ 10 milhões com um negócio de iPhones
          </Text>{" "}
          (começando do absoluto zero).
        </Box>

        <Text fontSize={{ base: "md", md: "x-large" }} textAlign="center">
          Toque no botão abaixo e participe do Desafio gratuito de 21 dias.
        </Text>
      </Box>

      <Icon
        as={BsArrowDown}
        fontSize="2rem"
        color="brand.green"
        my={{ base: 4, sm: 8 }}
      />

      <Button
        onClick={onOpen}
        variant="primary"
        w={{ base: "90%", md: "100%" }}
      >
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          <Form />
        </Modal>
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
