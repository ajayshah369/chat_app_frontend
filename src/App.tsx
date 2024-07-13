import { ThemeProvider } from "@mui/material";

import { darkTheme } from "./assets/themes";

import Auth from "./pages/auth/auth";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Auth />
    </ThemeProvider>
  );
}

export default App;
