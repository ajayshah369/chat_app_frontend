import { createTheme } from "@mui/material";

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    icon: {
      main: SimplePaletteColorOptions["main"];
      dark: SimplePaletteColorOptions["dark"];
    };
  }
  interface PaletteOptions {
    icon?: {
      main: SimplePaletteColorOptions["main"];
      dark: SimplePaletteColorOptions["dark"];
    };
  }
}

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#00a884",
      dark: "#008069",
    },
    text: {
      primary: "#3b4a54",
      secondary: "#41525d",
    },
  },
  typography: {
    allVariants: {
      marginBottom: "0",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#111b21",
    },
    primary: {
      main: "#00a884",
      dark: "#008069",
    },
  },
  typography: {
    allVariants: {
      marginBottom: "0",
    },
  },
});

export const appDarkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#111b21",
      paper: "#182229",
    },
    primary: {
      main: "#005c4b",
      dark: "#025144",
      light: "#00a884",
      contrastText: "#008069",
      A400: "#06cf96",
    },
    secondary: {
      main: "#202c33",
      light: "#2a3942",
      dark: "#1d282f",
      contrastText: "#222e35",
      A400: "#233138",
      A100: "#d1d7db",
    },
    text: {
      primary: "#e9edef",
      secondary: "#8696a0",
      disabled: "#667781",
    },
    divider: "rgba(134, 150, 160, .15)",
    icon: {
      main: "#aebac1",
      dark: "#8696a0",
    },
    action: {},
    common: {},
  },
  typography: {
    allVariants: {
      marginBottom: "0",
    },
  },
});
