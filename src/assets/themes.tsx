import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#00a884",
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
    },
  },
  typography: {
    allVariants: {
      marginBottom: "0",
    },
  },
});
