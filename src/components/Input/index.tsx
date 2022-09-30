import {
  FormControl,
  InputGroup,
  InputLeftElement,
  InputProps,
  Input as ChakraInput,
  InputRightElement,
  FormErrorMessage,
  Icon,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction, ReactNode } from "react";
import { FieldError } from "react-hook-form";
import { IconType } from "react-icons";
import InputMask from "react-input-mask";

type inputVariants = "primary";

interface IInputProps extends InputProps {
  name: string;
  variant?: inputVariants;
  mask?: string;
  iconLeft?: IconType | undefined;
  iconRight?: IconType | undefined;
  error?: FieldError;
  children?: ReactNode;
  maskChar?: string | null;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, IInputProps> = (
  {
    name,
    variant = "primary",
    error = undefined,
    iconLeft = undefined,
    iconRight = undefined,
    mask = null,
    children,
    maskChar,
    ...rest
  },
  ref,
) => {
  const iconColor = () => {
    if (error) return "red.500";
    return "pink.500";
  };

  return (
    <FormControl isInvalid={!!error}>
      <InputGroup>
        {iconLeft && (
          <InputLeftElement pointerEvents="none">
            <Icon color={iconColor()} h="1.5rem" w="1.5rem" as={iconLeft} />
          </InputLeftElement>
        )}
        <ChakraInput
          variant={variant}
          borderColor={error ? "red.500" : "gray.50"}
          paddingInlineStart={iconLeft ? "4rem" : "4"}
          paddingInlineEnd={iconRight ? "4rem" : "4"}
          name={name}
          id={name}
          ref={ref}
          as={mask ? InputMask : ChakraInput}
          mask={mask}
          _hover={{ borderColor: error ? "red.600" : "gray.300" }}
          {...(mask ? { maskChar: maskChar } : {})}
          {...rest}
        />
        {children}
        {iconRight && (
          <InputRightElement pointerEvents="none">
            <Icon color={iconColor()} h="1.5rem" w="1.5rem" as={iconRight} />
          </InputRightElement>
        )}
      </InputGroup>
      {error && <FormErrorMessage mt={1}>* {error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
