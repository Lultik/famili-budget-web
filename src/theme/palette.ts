import { PaletteOptions } from "@mui/material/styles";

const GREY = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#000000",
  900: "#161C24",
};

export const palette: PaletteOptions = {
  common: { black: "#000000", white: "#FFFFFF", main: "#008768" },
  primary: {
    lighter: "#64DBB4",
    light: "#44BF99",
    main: "#1CA380",
    dark: "#006C52",
    darker: "#00513D",
    contrastText: "#FFFFFF",
  },
  secondary: {
    lighter: "#E6DBFE",
    light: "#B195FE",
    main: "#754FFE",
    dark: "#4027B6",
    darker: "#1C0F79",
    contrastText: "#FFFFFF",
  },
  info: {
    lighter: "#CAFDF5",
    light: "#61F3F3",
    main: "#00B8D9",
    dark: "#006C9C",
    darker: "#003768",
    contrastText: "#FFFFFF",
  },
  success: {
    lighter: "#D8FBDE",
    light: "#86E8AB",
    main: "#36B37E",
    dark: "#1B806A",
    darker: "#0A5554",
    contrastText: "#FFFFFF",
  },
  warning: {
    lighter: "#FFF5CC",
    light: "#FFD666",
    main: "#FFAB00",
    dark: "#B76E00",
    darker: "#7A4100",
    contrastText: GREY[800],
  },
  error: {
    lighter: "#FFE9D5",
    light: "#FFAC82",
    main: "#FF5630",
    dark: "#B71D18",
    darker: "#7A0916",
    contrastText: "#FFFFFF",
  },
  text: {
    primary: "#444745",
    secondary: "#747875",
    disabled: "#A3A4A6",
  },
  background: { paper: "#FFFFFF", default: "#F9FBF8", neutral: GREY[100], nav: "#002117", header: "#D4F4E4" },
  grey: GREY,
} as const;
