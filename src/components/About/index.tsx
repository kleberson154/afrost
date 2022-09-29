import {
  Box,
  Button,
  Heading,
  useColorMode,
  Flex,
  Text,
  Icon,
} from "@chakra-ui/react";
import { FaTelegramPlane } from "react-icons/fa";
import AnimationComp from "../AnimationComp";
import AnimationDelay from "../AnimationDelay";

function About() {
  const { colorMode, toggleColorMode } = useColorMode();

  const Card = [
    {
      id: 1,
      title: "+4 mil",
      description: "Parceiros Afrost no Brasil",
    },
    {
      id: 2,
      title: "+18 mil",
      description: "Envios feitos",
    },
    {
      id: 3,
      title: "+4 anos",
      description: "Experiência no mercado",
    },
    {
      id: 4,
      title: "+28 milhões",
      description: "Faturados",
    },
  ];
  return (
    <>
      <AnimationComp>
        <Heading
          fontWeight={700}
          fontSize="3xl"
          textAlign="center"
          lineHeight="auto"
          mt={32}
          mb={8}
        >
          Sobre a Afrost
        </Heading>
      </AnimationComp>
      <Flex flexDirection="column" w={{ base: "90%", md: "100%" }}>
        <AnimationComp>
          <Flex
            flexWrap={{ base: "unset", md: "wrap" }}
            flexDirection={{ base: "column", md: "unset" }}
            alignItems="stretch"
            gap={{ base: 4, md: 0 }}
            alignContent="space-between"
            justifyContent="space-between"
            h={{ base: "472px", md: "244px" }}
            w="100%"
          >
            {Card.map((Card: any) => {
              return (
                <AnimationDelay>
                  <Flex
                    key={Card.id}
                    bgGradient="linear-gradient(to right, #0066FF, #6EBC00) border-box"
                    boxShadow="0 0 10px bgGradient"
                    h="106px"
                    w={{ base: "90%", md: "369px" }}
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="12px"
                    transition="5s infinite linear"
                  >
                    <Flex
                      bg={colorMode === "dark" ? "#141414" : "#F5F5F5"}
                      height="100px"
                      w="98%"
                      borderRadius="10px"
                      flexDirection="column"
                      justifyContent="space-evenly"
                    >
                      <Text
                        as="span"
                        bgGradient="linear(to-r, #0066FF 0%, #6EBC00 30%)"
                        bgClip="text"
                        fontSize="3xl"
                        fontWeight={700}
                        lineHeight="auto"
                        ml={4}
                      >
                        {Card.title}
                      </Text>
                      <Text ml={4} fontSize="md" fontWeight={600}>
                        {Card.description}
                      </Text>
                    </Flex>
                  </Flex>
                </AnimationDelay>
              );
            })}
          </Flex>
        </AnimationComp>

        <Flex
          w={{ base: "90%", md: "100%" }}
          flexDirection="column"
          fontSize="md"
          lineHeight="auto"
          gap={4}
          mt={8}
          mb={16}
        >
          <AnimationComp>
            <Text>
              A Afrost nasceu com a missão de diferenciar um mercado altamente
              restrito e competitivo.
            </Text>
          </AnimationComp>
          <AnimationComp>
            <Text>
              Entendendo a importância do consumo consciente, queremos levar o
              acesso à tecnologia de qualidade para a maioria dos brasileiros.
            </Text>
          </AnimationComp>
          <AnimationComp>
            <Text>
              Por isso, procuramos trabalhar com aparelhos tecno-sustentáveis,
              que entregam a alta qualidade de um aparelho novo, enquanto
              possibilitam o acesso à tecnologia de ponta por um preço justo.
            </Text>
          </AnimationComp>
          <AnimationComp>
            <Text>
              Depois de alcançar um faturamento superior a R$ 20 milhões, chegou
              a hora de impulsionar outras empresas e empreendedores.
            </Text>
          </AnimationComp>
        </Flex>

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
      </Flex>
    </>
  );
}

export default About;
