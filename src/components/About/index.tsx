import {
  Button,
  Heading,
  useColorMode,
  useDisclosure,
  Flex,
  Text,
  Icon,
  Modal,
} from "@chakra-ui/react";
import { FaTelegramPlane } from "react-icons/fa";
import AnimationComp from "../AnimationComp";
import AnimationDelay from "../AnimationDelay";
import Form from "../Form";

function About() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { onOpen, isOpen, onClose } = useDisclosure();
  const cards = [
    {
      id: 1,
      colorOne: "#0066FF",
      colorTwo: "#6EBC00",
      title: "+4 mil",
      description: "Parceiros Afrost no Brasil",
    },
    {
      id: 2,
      colorOne: "#FF00B8",
      colorTwo: "#9E00FF",
      title: "+18 mil",
      description: "Envios feitos",
    },
    {
      id: 3,
      colorOne: "#6EBC00",
      colorTwo: "#0066FF",
      title: "+4 anos",
      description: "Experiência no mercado",
    },
    {
      id: 4,
      colorOne: "#9E00FF",
      colorTwo: "#0066FF",
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
            {cards.map(card => {
              return (
                <AnimationDelay>
                  <Flex
                    key={card.id}
                    bgGradient={`linear-gradient(to right, ${card.colorOne}, ${card.colorTwo}) border-box`}
                    boxShadow="0 0 10px bgGradient"
                    h="106px"
                    w={{ base: "100%", md: "369px" }}
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
                        bgGradient={`linear-gradient(to right, ${card.colorOne} 0%, ${card.colorTwo} 30%)`}
                        bgClip="text"
                        fontSize="3xl"
                        fontWeight={700}
                        lineHeight="auto"
                        ml={4}
                      >
                        {card.title}
                      </Text>
                      <Text ml={4} fontSize="md" fontWeight={600}>
                        {card.description}
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
          <Button onClick={onOpen} variant="primary" w="100%">
            <Modal isOpen={isOpen} onClose={onClose}>
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
      </Flex>
    </>
  );
}

export default About;
