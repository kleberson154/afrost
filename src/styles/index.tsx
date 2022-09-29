import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { colors } from "./foundations/colors";
import { fonts } from "./foundations/fonts";
import { Button } from "./components/Button";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  colors,
  fonts,
  components: {
    Button,
  },
});
