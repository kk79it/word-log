import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  useSystemColorMode: true,
  initialColorMode: "system",
};

const theme = extendTheme({ config });

export default theme;
