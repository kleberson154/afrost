import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { colors } from "./foundations/colors";
import { fonts } from "./foundations/fonts";
import { Button } from "./components/Button";
import { styles } from "./styles";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  styles,
  colors,
  fonts,
  components: {
    Button,
  },
});
