import {
  Box,
  Heading,
  useColorMode,
  Flex,
  Text,
  Image,
} from "@chakra-ui/react";
import AnimationComp from "../AnimationComp";
import AnimationDelay from "../AnimationDelay";

function WillLearn() {
  const { colorMode, toggleColorMode } = useColorMode();

  const Learn = [
    {
      id: 1,
      color: "#0066FF",
      image: "/assets/iconBlue.svg",
      heading: "Mindset",
      description:
        "O sucesso começa na mentalidade. Desenvolva hábitos milionários e vire uma máquina de produtividade!",
    },
    {
      id: 2,
      color: "#FF00B8",
      image: "/assets/iconPink.svg",
      heading: "Branding 2.0",
      description:
        "Apresente sua marca para o mundo e seja autoridade no seu mercado!",
    },
    {
      id: 3,
      color: "#6EBC00",
      image: "/assets/iconGreen.svg",
      heading: "Torne-se uma máquina de vendas",
      description:
        "Construa relacionamentos e transforme seus clientes em compradores fiéis",
    },
    {
      id: 4,
      color: "#9E00FF",
      image: "/assets/iconPurple.svg",
      heading: "Finanças",
      description:
        "Quanto mais, melhor: aprenda a administrar suas finanças pessoais, empresariais e investir para multiplicar seus rendimentos",
    },
  ];
  return (
    <>
      <AnimationComp>
        <Heading
          fontWeight={700}
          fontSize="4xl"
          textAlign="center"
          lineHeight="auto"
          mt={32}
        >
          O que você vai aprender
        </Heading>
      </AnimationComp>
      <Flex
        flexWrap={{ base: "unset", md: "wrap" }}
        flexDirection={{ base: "column", md: "unset" }}
        alignItems="center"
        gap={{ base: 4, md: 0 }}
        alignContent="space-between"
        justifyContent="space-between"
        h={{ base: "1581px", sm: "1108px", md: "575px" }}
        w="100%"
        mt={12}
        mb={28}
      >
        {Learn.map(Learn => {
          return (
            <>
              <AnimationDelay>
                <Flex
                  position="relative"
                  flexDirection="column"
                  justifyContent="space-between"
                  alignItems="center"
                  bg={colorMode}
                  border="2px solid "
                  borderColor={colorMode === "dark" ? "#12141F" : "#CCCCCC"}
                  borderRadius="10px"
                  p={10}
                  h={{ base: "368px", sm: "276px" }}
                  w={{ base: "279px", sm: "384px" }}
                  overflow="hidden"
                  key={Learn.id}
                >
                  <Box
                    position="absolute"
                    top="-13px"
                    w="240px"
                    h="120px"
                    bg={Learn.color}
                    opacity="0.4"
                    filter="blur(50px)"
                    borderRadius="100px"
                    zIndex="-1"
                  />
                  <Flex mb={6} w="100%">
                    <Image src={Learn.image} h={10} w={10} />
                  </Flex>
                  <Flex flexDirection="column" gap={4}>
                    <Heading fontSize="2xl" fontWeight={700} lineHeight="auto">
                      {Learn.heading}
                    </Heading>
                    <Text fontSize="md" lineHeight="auto">
                      {Learn.description}
                    </Text>
                  </Flex>
                </Flex>
              </AnimationDelay>
            </>
          );
        })}
      </Flex>
    </>
  );
}

export default WillLearn;
