import {
  Box,
  Center,
  Flex,
  Heading,
  Icon,
  IconButton,
  Text,
  useDisclosure,
  Link,
  useColorMode,
} from "@chakra-ui/react";
import { useMemo } from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsArrowUpShort, BsFacebook } from "react-icons/bs";
import { TermsOfUseModal } from "../../TermsOfUseModal";
import { PrivacyPolicyModal } from "../../PrivacyPolicyModal";

export const Right = () => {
  const { colorMode } = useColorMode();
  const socialMediaProps = useMemo(
    () => ({
      w: "50px",
      h: "50px",
      borderRadius: "10px",
      bg: "gray.500",
      color: "white",
    }),
    [],
  );

  const {
    isOpen: isOpenPrivacyPolicyModal,
    onOpen: onOpenPrivacyPolicyModal,
    onClose: onClosePrivacyPolicyModal,
  } = useDisclosure();
  const {
    isOpen: isOpenTermsOfUseModal,
    onOpen: onOpenTermsOfUseModal,
    onClose: onCloseTermsOfUseModal,
  } = useDisclosure();

  return (
    <>
      <TermsOfUseModal
        isOpen={isOpenTermsOfUseModal}
        onClose={onCloseTermsOfUseModal}
      />
      <PrivacyPolicyModal
        isOpen={isOpenPrivacyPolicyModal}
        onClose={onClosePrivacyPolicyModal}
      />

      <Flex flexDir="column">
        <Heading as="h4" mb={4} fontSize="lg">
          Termos
        </Heading>
        <Box opacity="0.6">
          <Box mb={1}>
            <Text as="span" cursor="pointer" onClick={onOpenTermsOfUseModal}>
              Considerações importantes
            </Text>
          </Box>
          <Box mb={1}>
            <Text as="span" cursor="pointer" onClick={onOpenTermsOfUseModal}>
              Termos de Uso
            </Text>
          </Box>
          <Box mb={1}>
            <Text as="span" cursor="pointer" onClick={onOpenPrivacyPolicyModal}>
              Política de Privacidade
            </Text>
          </Box>
        </Box>
      </Flex>

      <Flex justifyContent="flex-start" flexDir="column">
        <Link display="flex" columnGap={4} mb={12} alignItems="center" href="#">
          <Center w="24px" h="24px" bg="#00AF4F" borderRadius="full">
            <Icon as={BsArrowUpShort} color="gray.900" fontSize="2xl" />
          </Center>
          <Text fontSize="14px" fontWeight={700}>
            Volte ao início
          </Text>
        </Link>
        <Box>
          <Link
            href="https://www.facebook.com/Afrost-100859838942391/"
            isExternal
          >
            <IconButton
              {...socialMediaProps}
              icon={<BsFacebook size="25px" />}
              aria-label="Botão do facebook"
              bg="#202020"
              _hover={{ opacity: 0.8 }}
            />
          </Link>
          <Link
            href="https://instagram.com/afrost.br?igshid=YmMyMTA2M2Y="
            isExternal
          >
            <IconButton
              {...socialMediaProps}
              icon={<AiOutlineInstagram size="25px" />}
              aria-label="Botão do instagram"
              ml={2}
              bg="#202020"
              _hover={{ opacity: 0.8 }}
            />
          </Link>
        </Box>
      </Flex>
    </>
  );
};
