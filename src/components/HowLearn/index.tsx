import {
  Box,
  Heading,
  useColorMode,
  Flex,
  Text,
  Button,
  Icon,
  useDisclosure,
  Modal,
} from "@chakra-ui/react";
import AnimationComp from "../AnimationComp";
import { FaTelegramPlane } from "react-icons/fa";
import Form from "../Form";
import AnimationRight from "../AnimationRight";
import AnimationLeft from "../AnimationLeft";

function HowLearn() {
  const { colorMode } = useColorMode();
  const { onOpen, isOpen, onClose } = useDisclosure();
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
        h={{ base: "1600px", xl: "945px" }}
        w={{ base: "90%", md: "100%" }}
        mt={28}
      >
        <Flex
          flexDirection="row-reverse"
          alignItems="center"
          justifyContent={{ base: "center", xl: "space-between" }}
          h="274px"
          w={{ base: "100%", sm: "467px" }}
          mt={{ base: "2rem", sm: "0" }}
          position="relative"
          top="0"
          right={{ base: "0", xl: "18rem" }}
        >
          <Box
            w="52px"
            h="52px"
            bg="brand.blue"
            borderRadius="50px"
            boxShadow="0px 0px 50px #0066FF"
            display={{ base: "none", xl: "initial" }}
            position="relative"
            top={{ base: "0", xl: "-125px" }}
          />
          <AnimationLeft>
            <Flex
              flexDirection="column"
              alignItems={{ base: "center", xl: "flex-end" }}
              textAlign={{ base: "center", xl: "right" }}
              w={{ base: "100%", sm: "369px" }}
            >
              <Box
                bgGradient="linear(transparent 50%,  brand.blue 50%)"
                mb="10px"
              >
                <Heading fontWeight={700} fontSize="2xl">
                  01. Ser
                </Heading>
              </Box>
              <Heading fontWeight={900} fontSize="2xl" w="90%">
                Aprenda a dominar o poder do seu cérebro e construa uma
                mentalidade F*DA!
              </Heading>

              <Flex
                flexDirection="column"
                fontSize="md"
                mt={4}
                gap="26px"
                lineHeight="auto"
                w="100%"
              >
                <Text>
                  Você receberá pílulas diárias durante 21 dias, por meio de um
                  canal exclusivo e fechado no Telegram.
                </Text>
                <Text>
                  Essas pílulas irão expandir o seu conhecimento, que expandirá
                  sua percepção da realidade.
                </Text>
                <Text>
                  Tudo isso vai gerar novas maneiras de pensar, que vai levar
                  você para o mesmo caminho que eu percorri antes de chegar até
                  aqui…
                </Text>
              </Flex>
            </Flex>
          </AnimationLeft>
        </Flex>
        <Box
          h="5px"
          w="190px"
          position="relative"
          top="-157px"
          transform="rotate(52deg)"
          display={{ base: "none", xl: "initial" }}
          bgGradient={`linear-gradient(to right, transparent 50%, brand.${colorMode}.background 50%), linear-gradient(to right, brand.blue, brand.pink)`}
          bgSize="16px 2px, 100% 2px"
        />
        <Flex
          flexDirection="row"
          alignItems="center"
          justifyContent={{ base: "center", xl: "space-between" }}
          h="150px"
          w={{ base: "100%", sm: "467px" }}
          mt={{ base: "6rem", sm: "0" }}
          left={{ base: "0", xl: "18rem" }}
          position="relative"
          top={{ base: "0", xl: "-55px" }}
        >
          <Box
            w="52px"
            h="52px"
            bg="brand.pink"
            borderRadius="50px"
            boxShadow="0px 0px 50px #FF00B8"
            display={{ base: "none", xl: "initial" }}
            position="relative"
            top={{ base: "0", xl: "-75px" }}
          />
          <AnimationRight>
            <Flex
              flexDirection="column"
              alignItems={{ base: "center", xl: "flex-start" }}
              textAlign={{ base: "center", xl: "left" }}
              w={{ base: "100%", sm: "369px" }}
            >
              <Box
                bgGradient="linear(transparent 50%,  brand.pink 50%)"
                mb="10px"
              >
                <Heading fontWeight={700} fontSize="2xl">
                  02. Fazer
                </Heading>
              </Box>
              <Heading fontWeight={900} fontSize="2xl" w="80%">
                Transformando sua mentalidade em um império
              </Heading>

              <Flex
                flexDirection="column"
                fontSize="md"
                mt={4}
                gap="26px"
                lineHeight="auto"
                w="100%"
              >
                <Text>
                  Meu nome é Angeliny Weffort, eu sou CEO da Afrost e pela
                  primeira vez eu irei revelar os passos que percorri para
                  alcançar os 10 milhões em faturamento com um negócio de iPhone
                  que iniciei com 17 anos…
                </Text>
                <Text>…começando 100% do zero.</Text>
              </Flex>
            </Flex>
          </AnimationRight>
        </Flex>
        <Box
          h="5px"
          w="190px"
          position="relative"
          top="-100px"
          transform="rotate(128deg)"
          display={{ base: "none", xl: "initial" }}
          bgGradient={`linear-gradient(to right, transparent 50%, brand.${colorMode}.background 50%), linear-gradient(to right, brand.pink, brand.green)`}
          bgSize="16px 2px, 100% 2px"
        />
        <Flex
          flexDirection="row-reverse"
          alignItems="center"
          justifyContent={{ base: "center", xl: "space-between" }}
          h="353px"
          w={{ base: "100%", sm: "467px" }}
          mt={{ base: "4rem", sm: "0" }}
          position="relative"
          top={{ base: "0", xl: "-50px" }}
          right={{ base: "0", xl: "18rem" }}
        >
          <Box
            w="52px"
            h="52px"
            bg="brand.green"
            borderRadius="50px"
            boxShadow="0px 0px 50px #a2e347"
            display={{ base: "none", xl: "initial" }}
            position="relative"
            top={{ base: "0", xl: "-125px" }}
          />
          <AnimationLeft>
            <Flex
              flexDirection="column"
              alignItems={{ base: "center", xl: "flex-end" }}
              textAlign={{ base: "center", xl: "right" }}
              w={{ base: "100%", sm: "369px" }}
              position="relative"
            >
              <Box
                bgGradient="linear(transparent 50%,  brand.green 50%)"
                mb="10px"
              >
                <Heading fontWeight={700} fontSize="2xl">
                  03. Ter
                </Heading>
              </Box>
              <Heading fontWeight={900} fontSize="2xl" w="90%">
                O grande dia! Todas suas ações convertidas em money!
              </Heading>

              <Flex
                flexDirection="column"
                fontSize="md"
                mt={4}
                gap="26px"
                lineHeight="auto"
                w="100%"
              >
                <Text>
                  Terminará esses 21 dias com uma mentalidade “mindset”
                  milionário. Sendo capaz de conquistar qualquer objetivo que se
                  propor.
                </Text>
                <Text>
                  Você entenderá como funciona o mercado de iPhones e como você
                  pode iniciar seu negócio e terminar o ano faturando pelo menos
                  15 mil reais por mês.
                </Text>
                <Text>
                  Essa é uma série 100% gratuita (por enquanto, pelo menos)
                </Text>
              </Flex>
            </Flex>
          </AnimationLeft>
        </Flex>
        <Box
          h="5px"
          w="190px"
          position="relative"
          top="-254px"
          transform="rotate(50deg)"
          display={{ base: "none", xl: "initial" }}
          bgGradient={`linear-gradient(to right, transparent 50%, brand.${colorMode}.background 50%), linear-gradient(to right, brand.green, brand.purple)`}
          bgSize="16px 2px, 100% 2px"
        />
        <Flex
          flexDirection="row"
          alignItems="center"
          justifyContent={{ base: "center", xl: "space-between" }}
          h="150px"
          w={{ base: "100%", sm: "467px" }}
          mt={{ base: "4rem", sm: "0" }}
          left={{ base: "0", xl: "18rem" }}
          position="relative"
          top={{ base: "-95", xl: "-207" }}
        >
          <Box
            w="52px"
            h="52px"
            bg="brand.purple"
            borderRadius="50px"
            boxShadow="0px 0px 50px #807AD0"
            display={{ base: "none", xl: "initial" }}
            position="relative"
            top={{ base: "0", xl: "-25px" }}
          />
          <AnimationRight>
            <Flex
              flexDirection="column"
              alignItems={{ base: "center", xl: "flex-start" }}
              textAlign={{ base: "center", xl: "left" }}
              w={{ base: "100%", sm: "369px" }}
            >
              <Box
                bgGradient="linear(transparent 50%,  brand.purple 50%)"
                mb="10px"
              >
                <Heading fontWeight={700} fontSize="2xl">
                  04. Sucesso
                </Heading>
              </Box>
              <Heading fontWeight={900} fontSize="2xl">
                O dia onde você será um vitorioso
              </Heading>

              <Flex
                flexDirection="column"
                fontSize="md"
                mt={4}
                gap="26px"
                lineHeight="auto"
                w="100%"
              >
                Aqui você colherá todas as sementes plantadas ao longo do
                caminho
              </Flex>
            </Flex>
          </AnimationRight>
        </Flex>
      </Flex>
      <Box w={{ base: "90%", md: "100%" }}>
        <AnimationComp>
          <Button onClick={onOpen} variant="primary" w="100%">
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
              <Form />
            </Modal>
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
