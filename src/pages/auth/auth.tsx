import { Box, Typography, ThemeProvider } from "@mui/material";
import { useState, JSX } from "react";

import { lightTheme } from "../../assets/themes";

import logo from "../../assets/logo.svg";
import Login from "../../components/auth/login";
import SignUp from "../../components/auth/signUp";

enum AUTH_TYPE {
  LOGIN = "login",
  SIGN_UP = "signUp",
}

type Props = {
  func: React.Dispatch<React.SetStateAction<AUTH_TYPE>>;
};

const CreateAccount = (props: Props) => {
  const { func } = props;

  return (
    <Typography variant='body2' align='center'>
      Don't have a account!{" "}
      <Typography
        variant='body1'
        className='cursor-pointer'
        color='primary.main'
        onClick={() => {
          func(AUTH_TYPE.SIGN_UP);
        }}
      >
        Create Account.
      </Typography>
    </Typography>
  );
};

const AlreadyHaveAnAccount = (props: Props) => {
  const { func } = props;

  return (
    <Typography variant='body2' align='center'>
      Already have an account!{" "}
      <Typography
        variant='body1'
        className='cursor-pointer'
        color='primary.main'
        onClick={() => {
          func(AUTH_TYPE.LOGIN);
        }}
      >
        Login.
      </Typography>
    </Typography>
  );
};

const Auth = () => {
  const [authType, setAuthType] = useState<AUTH_TYPE>(AUTH_TYPE.LOGIN);

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
          <Box
            component='div'
            className='flex flex-col justify-center items-stretch !w-full'
          >
            {((): JSX.Element => {
              switch (authType) {
                case AUTH_TYPE.LOGIN:
                  return <Login />;
                case AUTH_TYPE.SIGN_UP:
                  return <SignUp />;
                default:
                  return <></>;
              }
            })()}

            <Box component='div' className='flex justify-center'>
              {((): JSX.Element => {
                switch (authType) {
                  case AUTH_TYPE.LOGIN:
                    return <CreateAccount func={setAuthType} />;
                  case AUTH_TYPE.SIGN_UP:
                    return <AlreadyHaveAnAccount func={setAuthType} />;
                  default:
                    return <></>;
                }
              })()}
            </Box>
          </Box>
        </ThemeProvider>

        <Box component='div' bgcolor='secondary.light'></Box>
      </Box>
    </Box>
  );
};

export default Auth;
