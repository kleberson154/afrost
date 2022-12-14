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
        bg={`brand.${colorMode}.color`}
        fontSize={{ base: "md", md: "2xl" }}
        fontWeight={700}
        textTransform="uppercase"
      >
        Desafio Afrost
      </Text>

      <Text
        fontSize={{ base: "md", md: "2xl" }}
        textTransform="uppercase"
        gap={2}
      >
        On-line &{" "}
        <Text
          as="span"
          bgGradient="linear(90deg, brand.blue 20.83%, brand.pink 74.48%)"
          bgClip="text"
          fontSize={{ base: "md", md: "2xl" }}
          textTransform="uppercase"
        >
          Gratuito
        </Text>
      </Text>

      <Heading
        fontWeight={900}
        fontSize={{ base: "larger", md: "3xl" }}
        textAlign="center"
        width="100%"
        lineHeight="120%"
        color={`brand.${colorMode}.color`}
        mt={{ base: 8, sm: 12 }}
        mb={{ base: 8, sm: 9 }}
      >
        O sucesso está em desvendar os segredos e aplicá-los.{" "}
        <Text as="span" fontWeight={400}>
          Que bom que eu fiz isso por você…
        </Text>
      </Heading>

      <Box w={{ base: "80%", md: "100%" }}>
        <Box
          fontWeight={900}
          fontSize={{ base: "2xl", md: "5xl" }}
          mb={{ base: 4, sm: 8 }}
          textAlign="center"
          lineHeight="auto"
        >
          Aprenda comigo como faturar{" "}
          <Text bg="brand.green" bgClip="text">
            mais de 1 milhão com um négocio de iPhones
          </Text>{" "}
          (começando do zero)
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
