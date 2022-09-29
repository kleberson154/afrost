import type { ComponentStyleConfig } from "@chakra-ui/theme";

export const Button: ComponentStyleConfig = {
  variants: {
    primary: {
      textTransform: "uppercase",
      border: "2px solid ",
      borderRadius: "5px",
      fontWeight: "700",
      fontSize: "md",
      cursor: "pointer",
      _hover: {
        opacity: 0.7,
      },
    },
    secondary: {
      textTransform: "uppercase",
      color: "#fff",
      bgGradient: "linear(90deg, #0066FF 20.83%, #6EBC00 74.48%)",
      fontWeight: "700",
      cursor: "pointer",
      _hover: {
        opacity: 0.8,
      },
    },
  },
};
