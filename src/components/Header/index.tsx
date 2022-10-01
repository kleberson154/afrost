import {
  Button,
  Flex,
  Icon,
  Box,
  useColorMode,
  useDisclosure,
  Modal,
} from "@chakra-ui/react";
import { AfrostIcon } from "../AfrostLogo";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import Form from "../Form";

function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { onOpen, isOpen, onClose } = useDisclosure();
  return (
    <Flex justifyContent="space-between" alignItems="flex-start">
      <AfrostIcon
        color="#76BF00"
        _hover={{ opacity: 0.8 }}
        h={{ base: "30px", md: "42px" }}
        ml={{ base: "2rem", lg: "" }}
      />
      <Flex flexDirection="column" mr={{ base: "2rem", lg: "" }}>
        <Button
          onClick={onOpen}
          variant="secondary"
          display={{ base: "none", md: "initial" }}
        >
          <Modal isCentered isOpen={isOpen} onClose={onClose}>
            <Form />
          </Modal>
          quero assistir online de forma gratuita
        </Button>
        <Flex justifyContent="flex-end" position="relative">
          <Button
            maxW="90px"
            maxH="40px"
            bg={colorMode === "dark" ? "#252622" : "#E5E5E5"}
            p="2.5"
            borderRadius="50px"
            position="relative"
            top={{ base: "", md: "74px" }}
            onClick={toggleColorMode}
          >
            <Icon as={FaMoon} mr={4} />
            <Icon as={FaSun} />
            <Box
              position="absolute"
              top="6px"
              left="6px"
              zIndex="999"
              bg="#fff"
              w="40%"
              h="70%"
              borderRadius="50px"
              cursor="pointer"
              __css={{
                transform: `translateX(${
                  colorMode === "dark" ? "0px" : "30px"
                })`,
                transition: "2s ease-in-out",
              }}
            ></Box>
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Nav;
