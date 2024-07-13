import {
  Button,
  InputAdornment,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import { FormEvent, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useDispatch } from "react-redux";

import axiosInstance from "../../utilities/axiosInstance";
import { set as setAuth } from "../../store/authSlice";
import { set as setSnackbar } from "../../store/snackbarSlice";

type LoginData = {
  email: string;
  password: string;
};

const Login = () => {
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const toggleShowPassword = () => {
    setShowPassword((prev) => {
      return !prev;
    });
  };

  const login = (data: LoginData) => {
    setLoading(true);

    axiosInstance
      .post("/auth/login", data)
      .then((res) => {
        dispatch(
          setAuth({
            authenticated: true,
            user: res.data.data,
          })
        );

        dispatch(
          setSnackbar({
            message: res?.data?.message ?? "Success!",
            open: true,
            severity: "success",
            autoHideDuration: 1000,
          })
        );
      })
      .catch((err) => {
        dispatch(
          setSnackbar({
            message: err?.response?.data?.message ?? "Something went wrong!",
            open: true,
            severity: "error",
            autoHideDuration: 1000,
          })
        );
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const submit = (event: FormEvent) => {
    event.preventDefault();

    if (loading) return;

    const data: LoginData = {
      email: email,
      password: password,
    };

    login(data);
  };

  return (
    <Box
      component='div'
      className='p-8 flex flex-col items-center justify-center gap-8'
    >
      <Typography variant='h5'>Login</Typography>

      <Box
        component='form'
        onSubmit={submit}
        className='flex flex-col items-center gap-8'
        style={{
          width: "100%",
          maxWidth: "360px",
        }}
      >
        <TextField
          name='email'
          required
          type='email'
          label='Email'
          size='small'
          fullWidth
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          name='password'
          required
          type={showPassword ? "text" : "password"}
          label='Password'
          size='small'
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment
                position='end'
                className='cursor-pointer'
                onClick={toggleShowPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </InputAdornment>
            ),
          }}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <Button
          type='submit'
          variant='contained'
          color='primary'
          className='!rounded-full'
          size='medium'
          style={{
            width: "90%",
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
