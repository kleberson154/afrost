import { Box, useColorMode, Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import About from "../components/About";
import Challenge from "../components/Challenge";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { motion } from "framer-motion";
import WillLearn from "../components/WillLearn";
import AnimationComp from "../components/AnimationComp";
import HowLearn from "../components/HowLearn";

const Home: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg={`brand.${colorMode}.background`} minH="480vh">
      <Flex justifyContent="center">
        <Box
          position="absolute"
          top="5rem"
          zIndex="1"
          className="circleGreen"
          w="50%"
          height="600px"
          backgroundColor="brand.green"
          opacity="0.2"
          borderRadius="1e+06px"
          filter="blur(100px)"
        />
        <Box
          position="absolute"
          top="25rem"
          zIndex="1"
          className="circlePurple"
          w="50%"
          height="600px"
          backgroundColor="#9d00ffbc"
          opacity="0.3"
          borderRadius="1e+06px"
          filter="blur(100px)"
        />
      </Flex>
      <Flex
        w="100%"
        flexDirection="column"
        pt={16}
        maxW="1200px"
        px={3.75}
        mx="auto"
        mb={28}
        zIndex="3"
      >
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Header />
        </motion.div>
      </Flex>

      <Flex
        position="relative"
        top="-5rem"
        w="100%"
        flexDirection="column"
        alignItems="center"
        maxW={{ base: "500px", md: "800px" }}
        px={3.75}
        mx="auto"
        zIndex="3"
      >
        <AnimationComp>
          <Hero />
        </AnimationComp>
        <WillLearn />
        <HowLearn />
        <Challenge />
        <About />
      </Flex>
    </Box>
  );
};

export default Home;
