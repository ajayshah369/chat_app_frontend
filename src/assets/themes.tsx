import { createTheme } from "@mui/material";

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
