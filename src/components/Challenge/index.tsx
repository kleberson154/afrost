import { Button, Heading, Flex, Text, Icon } from "@chakra-ui/react";
import { MdArrowForwardIos } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import AnimationComp from "../AnimationComp";

function Challenge() {
  return (
    <>
      <AnimationComp>
        <Heading
          textAlign="center"
          lineHeight="auto"
          fontWeight={700}
          fontSize="3xl"
          mt={32}
        >
          O{" "}
          <Text
            as="span"
            bgGradient="linear(to-r, brand.green, brand.purple)"
            bgClip="text"
          >
            Desafio Afrost
          </Text>{" "}
          foi feito para você que:
        </Heading>
      </AnimationComp>
      <Flex
        flexDirection="column"
        lineHeight="mixed"
        w={{ base: "90%", md: "100%" }}
        fontSize={{ base: "md", md: "2xl" }}
        mt={8}
        gap={8}
      >
        <AnimationComp>
          <Text>
            <Icon
              as={MdArrowForwardIos}
              color="brand.green"
              fontSize="1rem"
              mr="5px"
            />
            Quer construir um negócio{" "}
            <Text as="span" color="brand.green" fontWeight={700}>
              altamente lucrativo
            </Text>{" "}
            com a venda de iPhones
          </Text>
        </AnimationComp>
        <AnimationComp>
          <Text>
            <Icon
              as={MdArrowForwardIos}
              color="brand.green"
              fontSize="1rem"
              mr="5px"
            />
            Está começando um{" "}
            <Text as="span" color="brand.green" fontWeight={700}>
              negócio do zero{" "}
            </Text>
            e quer compreender o passo a passo
          </Text>
        </AnimationComp>
        <AnimationComp>
          <Text>
            <Icon
              as={MdArrowForwardIos}
              color="brand.green"
              fontSize="1rem"
              mr="5px"
            />
            Já vende, mas ainda{" "}
            <Text as="span" color="brand.green" fontWeight={700}>
              não tá satisfeito com os resultados
            </Text>
          </Text>
        </AnimationComp>
        <AnimationComp>
          <Text>
            <Icon
              as={MdArrowForwardIos}
              color="brand.green"
              fontSize="1rem"
              mr="5px"
            />
            Não consegue encontrar{" "}
            <Text as="span" color="brand.green" fontWeight={700}>
              bons fornecedores de iPhones
            </Text>
          </Text>
        </AnimationComp>
        <AnimationComp>
          <Text>
            <Icon
              as={MdArrowForwardIos}
              color="brand.green"
              fontSize="1rem"
              mr="5px"
            />
            <Text as="span" color="brand.green" fontWeight={700}>
              Não tem capital pra investir{" "}
            </Text>
            e quer saber como crescer…
          </Text>
        </AnimationComp>
        <AnimationComp>
          <Text mb={16}>
            <Icon
              as={MdArrowForwardIos}
              color="brand.green"
              fontSize="1rem"
              mr="5px"
            />
            Quer descobrir{" "}
            <Text as="span" color="brand.green" fontWeight={700}>
              como utilizar o digital{" "}
            </Text>
            para potencializar as vendas
          </Text>
        </AnimationComp>

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

export default Challenge;
