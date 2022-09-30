import {
  Button,
  Text,
  Flex,
  useColorMode,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { AfrostIcon } from "../AfrostLogo";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { isValidPhoneNumber } from "libphonenumber-js";

import { Input } from "../Input";

const schema = yup.object({
  firstName: yup
    .string()
    .required("O nome é obrigatório")
    .min(3, "O nome deve ter no mínimo 3 caracteres")
    .max(50, "O nome deve ter no máximo 50 caracteres"),
  email: yup
    .string()
    .required("O email é obrigatório")
    .min(3, "O nome deve ter no mínimo 3 caracteres")
    .max(50, "O nome deve ter no máximo 50 caracteres"),
  phone: yup
    .string()
    .required("O telefone é obrigatório")
    .test("is-valid-mobile", "Número inválido", value => {
      return isValidPhoneNumber(value ?? "");
    }),
});

type ISchema = yup.TypeOf<typeof schema>;

function Form() {
  const { colorMode } = useColorMode();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISchema>({
    resolver: yupResolver(schema),
  });
  const onSubmit = handleSubmit(data => {
    console.log(data);
  });
  return (
    <>
      <ModalOverlay />
      <ModalContent
        w="480px"
        h="555px"
        borderRadius="10px"
        alignItems="center"
        justifyContent="center"
        bgGradient="linear(90deg, #0066FF 20.83%, #6EBC00 74.48%)"
      >
        <Flex
          w="99%"
          h="99%"
          flexDirection="column"
          bg={`brand.${colorMode}.background`}
          p="30px 30px 56px 40px"
          borderRadius="7px"
        >
          <ModalHeader textAlign="center" mb={12}>
            <AfrostIcon
              color={`brand.${colorMode}.color`}
              _hover={{ opacity: 0.8 }}
              h={{ base: "30px", md: "42px" }}
            />
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody p={0} color={`brand.${colorMode}.color`}>
            <form onSubmit={onSubmit}>
              <Text fontSize="md">Nome</Text>
              <Input
                error={errors.firstName}
                h={12}
                bg={colorMode === "dark" ? "#181A16" : "#fff"}
                border={`2px solid ${
                  colorMode === "dark" ? "#252622" : "#E5E5E5"
                }`}
                {...register("firstName")}
              />
              <Text mt={4} fontSize="md">
                Email
              </Text>
              <Input
                error={errors.email}
                h={12}
                bg={colorMode === "dark" ? "#181A16" : "#fff"}
                border={`2px solid ${
                  colorMode === "dark" ? "#252622" : "#E5E5E5"
                }`}
                {...register("email")}
              />
              <Text mt={4} fontSize="md">
                Telefone
              </Text>
              <Input
                error={errors.phone}
                h={12}
                bg={colorMode === "dark" ? "#181A16" : "#fff"}
                border={`2px solid ${
                  colorMode === "dark" ? "#252622" : "#E5E5E5"
                }`}
                {...register("phone")}
                mask="+55 (99) \99999-9999"
              />
              <Button
                type="submit"
                fontSize="md"
                variant="primary"
                w="100%"
                height="50px"
                mt={12}
              >
                Entrar no grupo do Telegram
              </Button>
            </form>
          </ModalBody>
        </Flex>
      </ModalContent>
      ;
    </>
  );
}

export default Form;
