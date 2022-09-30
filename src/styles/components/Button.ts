import type { ComponentStyleConfig } from "@chakra-ui/theme";

export const Button: ComponentStyleConfig = {
  variants: {
    primary: {
      textTransform: "uppercase",
      fontSize: { base: "small", sm: "sm", md: "xl", lg: "2xl" },
      height: { base: 14, md: 20 },
      whiteSpace: "normal",
      color: "#fff",
      bgGradient: "linear(90deg, #0066FF 20.83%, #FF00B8 74.48%)",
      fontWeight: "700",
      cursor: "pointer",
      _hover: {
        opacity: 0.8,
      },
    },
    secondary: {
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
  },
};
