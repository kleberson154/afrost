import {
  Box,
  Heading,
  useColorMode,
  Flex,
  Text,
  Button,
  Icon,
} from "@chakra-ui/react";
import AnimationComp from "../AnimationComp";
import { FaTelegramPlane } from "react-icons/fa";
import AnimationDelay from "../AnimationDelay";
import AnimationRight from "../AnimationRight";
import AnimationLeft from "../AnimationLeft";

function HowLearn() {
  return (
    <>
      <AnimationComp>
        <Heading
          fontWeight={700}
          fontSize="4xl"
          textAlign="center"
          lineHeight="auto"
        >
          Como você vai aprender
        </Heading>
      </AnimationComp>

      <Flex
        flexDirection="column"
        alignItems="center"
        gap={{ base: 4, md: 0 }}
        alignContent="flex-start"
        justifyContent={{ base: "space-between", xl: "center" }}
        h={{ base: "908px", xl: "620px" }}
        w={{ base: "90%", md: "100%" }}
        mt={12}
        mb={28}
      >
        <AnimationLeft>
          <Flex
            flexDirection="row-reverse"
            alignItems="center"
            justifyContent={{ base: "center", xl: "space-between" }}
            h="150px"
            w={{ base: "100%", sm: "467px" }}
            position="relative"
            top="0"
            right={{ base: "0", xl: "18rem" }}
          >
            <Box
              w="52px"
              h="52px"
              bg="#0066FF"
              borderRadius="50px"
              boxShadow="0px 0px 50px #0066FF"
              display={{ base: "none", xl: "initial" }}
            />
            <Flex
              flexDirection="column"
              alignItems={{ base: "center", xl: "flex-end" }}
              textAlign={{ base: "center", xl: "right" }}
              w="369px"
            >
              <Heading fontSize="2xl" mb="10px">
                01. Ser
              </Heading>
              <Box bgGradient="linear(transparent 50%,  #0066FF 50%)">
                <Heading fontSize="2xl">iPhone é devolvido</Heading>
              </Box>

              <Text fontSize="md" mt={4} lineHeight="auto" w="100%">
                Os iPhones novos são vendidos para compradores, que depois
                desistem da compra ou devolvem o aparelho em estado de novo para
                a Apple.
              </Text>
            </Flex>
          </Flex>
        </AnimationLeft>
        <Box
          h="5px"
          w={40}
          position="relative"
          transform="rotate(45deg)"
          display={{ base: "none", xl: "initial" }}
          borderRadius="50px"
          __css={{
            bgGradient: "linear(to-r, #0066FF, #FF00B8)",
          }}
        />
        <AnimationRight>
          <Flex
            flexDirection="row"
            alignItems="center"
            justifyContent={{ base: "center", xl: "space-between" }}
            h="150px"
            w={{ base: "100%", sm: "467px" }}
            position="relative"
            top="0"
            left={{ base: "0", xl: "18rem" }}
          >
            <Box
              w="52px"
              h="52px"
              bg="#FF00B8"
              borderRadius="50px"
              boxShadow="0px 0px 50px #FF00B8"
              display={{ base: "none", xl: "initial" }}
            />
            <Flex
              flexDirection="column"
              alignItems={{ base: "center", xl: "flex-start" }}
              textAlign={{ base: "center", xl: "left" }}
              w="369px"
            >
              <Heading fontSize="2xl" mb="10px">
                02. Fazer
              </Heading>
              <Box bgGradient="linear(transparent 50%,  #FF00B8 50%)">
                <Heading fontSize="2xl">Inspeção</Heading>
              </Box>

              <Text fontSize="md" mt={4} lineHeight="auto" w="100%">
                O aparelho é inspecionado, testado e certificado pela
                CheckPhone, a maior certificadora de celulares do planeta
              </Text>
            </Flex>
          </Flex>
        </AnimationRight>
        <Box
          h="5px"
          w={40}
          position="relative"
          transform="rotate(-45deg)"
          display={{ base: "none", xl: "initial" }}
          borderRadius="50px"
          __css={{
            bgGradient: "linear(to-r, #6EBC00, #FF00B8)",
          }}
        />
        <AnimationLeft>
          <Flex
            flexDirection="row-reverse"
            alignItems="center"
            justifyContent={{ base: "center", xl: "space-between" }}
            h="150px"
            w={{ base: "100%", sm: "467px" }}
            position="relative"
            top="0"
            right={{ base: "0", xl: "18rem" }}
          >
            <Box
              w="52px"
              h="52px"
              bg="#6EBC00"
              borderRadius="50px"
              boxShadow="0px 0px 50px #6EBC00"
              display={{ base: "none", xl: "initial" }}
            />
            <Flex
              flexDirection="column"
              alignItems={{ base: "center", xl: "flex-end" }}
              textAlign={{ base: "center", xl: "right" }}
              w="369px"
            >
              <Heading fontSize="2xl" mb="10px">
                03. Ter
              </Heading>
              <Box bgGradient="linear(transparent 50%,  #6EBC00 50%)">
                <Heading fontSize="2xl">Fornecimento</Heading>
              </Box>

              <Text fontSize="md" mt={4} lineHeight="auto" w="100%">
                O iPhone depois de certificado, vem para a Afrost que fornece o
                iPhone em estado de novo por um preço bem mais acessivel para o
                revendedor
              </Text>
            </Flex>
          </Flex>
        </AnimationLeft>
        <Box
          h="5px"
          w={40}
          position="relative"
          transform="rotate(45deg)"
          display={{ base: "none", xl: "initial" }}
          borderRadius="50px"
          __css={{
            bgGradient: "linear(to-r, #6EBC00, #9E00FF)",
          }}
        />
        <AnimationRight>
          <Flex
            flexDirection="row"
            alignItems="center"
            justifyContent={{ base: "center", xl: "space-between" }}
            h="150px"
            w={{ base: "100%", sm: "467px" }}
            position="relative"
            top="0"
            left={{ base: "0", xl: "18rem" }}
          >
            <Box
              w="52px"
              h="52px"
              bg="#9E00FF"
              borderRadius="50px"
              boxShadow="0px 0px 50px #9E00FF"
              display={{ base: "none", xl: "initial" }}
            />
            <Flex
              flexDirection="column"
              alignItems={{ base: "center", xl: "flex-start" }}
              textAlign={{ base: "center", xl: "left" }}
              w="369px"
            >
              <Heading fontSize="2xl" mb="10px">
                04. Ter
              </Heading>
              <Box bgGradient="linear(transparent 50%,  #9E00FF 50%)">
                <Heading fontSize="2xl">Lucros altos</Heading>
              </Box>

              <Text fontSize="md" mt={4} lineHeight="auto" w="100%">
                Você lucra alto e o seu consumidor final ganha um iPhone em
                condição de novo com preços bem mais acessiveis.
              </Text>
            </Flex>
          </Flex>
        </AnimationRight>
      </Flex>
      <Box w={{ base: "90%", md: "100%" }}>
        <AnimationComp>
          <Button
            variant="secondary"
            fontSize={{ base: "x-small", sm: "sm", md: "xl", lg: "2xl" }}
            w="100%"
            h={{ base: 14, md: 20 }}
          >
            <Icon
              as={FaTelegramPlane}
              fontSize={{ base: "1.5rem", md: "2rem" }}
              mr={{ base: 2, md: 4 }}
              color="#fff"
            />
            Quero participar gratuitamente
          </Button>
        </AnimationComp>
      </Box>
    </>
  );
}

export default HowLearn;
