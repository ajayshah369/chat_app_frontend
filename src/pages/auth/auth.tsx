import { Box, Typography, ThemeProvider } from "@mui/material";

import { lightTheme } from "../../assets/themes";

import logo from "../../assets/logo.svg";
import SignUp from "./signUp";

const Auth = () => {
  return (
    <Box
      component='div'
      className='h-screen relative overflow-auto'
      bgcolor='background.default'
    >
      <Box
        component='div'
        style={{
          height: "240px",
          padding: "2rem 0",
        }}
        bgcolor='primary.main'
      >
        <Box
          component='div'
          className='flex items-center gap-2'
          style={{
            width: "90%",
            margin: "0 auto",
            height: "40px",
          }}
        >
          <Box component='img' alt='Logo' src={logo} />
          <Typography
            variant='h6'
            className='uppercase text-white font-medium text-lg'
          >
            Chat App
          </Typography>
        </Box>
      </Box>

      <Box
        component='div'
        className='bg-white rounded absolute grid grid-rows-1 grid-cols-2 overflow-hidden'
        style={{
          height: "calc(100vh - 6rem - 40px)",
          width: "90%",
          margin: "0 auto",
          top: "calc(4rem + 40px)",
          left: "5%",
        }}
      >
        <ThemeProvider theme={lightTheme}>
          <SignUp />
        </ThemeProvider>

        <Box component='div' bgcolor='secondary.light'></Box>
      </Box>
    </Box>
  );
};

export default Auth;
