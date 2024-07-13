import {
  Button,
  InputAdornment,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import { FormEvent, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prev) => {
      return !prev;
    });
  };

  const submit = (event: FormEvent) => {
    event.preventDefault();
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
