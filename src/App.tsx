import { ThemeProvider } from "@mui/material";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";

import { RootState } from "./store/index";
import { darkTheme } from "./assets/themes";
import Snackbar from "./components/snackbar";
import AuthLoading from "./pages/auth/authLoading";
import Auth from "./pages/auth/auth";
import Home from "./pages/home/home";

function App() {
  const auth = useSelector((state: RootState) => state.auth);

  const router = createBrowserRouter([
    {
      path: "/",
      element: auth.loading ? (
        <AuthLoading />
      ) : !auth.authenticated ? (
        <Auth />
      ) : (
        <Home />
      ),
    },
    {
      path: "*",
      element: <Navigate to={"/"} replace />,
    },
  ]);

  return (
    <ThemeProvider theme={darkTheme}>
      <Snackbar />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
