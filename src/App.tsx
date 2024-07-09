import { ThemeProvider, createTheme } from "@mui/material";

import Auth from "./pages/auth/auth";

function App() {
  const originalTheme = createTheme({});

  const lightTheme = createTheme(originalTheme, {
    palette: {
      mode: "light",
      primary: {
        main: "#00a884",
      },
    },
  });

  // const darkTheme = createTheme(originalTheme, {
  //   palette: {
  //     mode: "dark",
  //     primary: {
  //       main: "#00a884",
  //     },
  //   },
  // });

  return (
    <ThemeProvider theme={lightTheme}>
      <Auth />
    </ThemeProvider>
  );
}

export default App;
