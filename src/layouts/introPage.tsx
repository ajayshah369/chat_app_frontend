import { Box, Typography } from "@mui/material";
import { Lock } from "@mui/icons-material";

import IntroImage from "../assets/intro.svg?react";

const IntroPage = () => {
  return (
    <Box
      component='div'
      bgcolor='secondary.contrastText'
      className='h-full flex justify-center items-center py-7 relative'
    >
      <Box
        component='div'
        style={{
          width: "80%",
          maxWidth: "520px",
          marginTop: "-20px",
        }}
        className='flex flex-col items-center text-center'
      >
        <IntroImage />

        <Typography
          component='h1'
          color='text.primary'
          style={{
            opacity: "0.88",
            fontWeight: "300",
            fontSize: "32px",
            marginTop: "40px",
          }}
        >
          Chat App
        </Typography>

        <Typography
          component='p'
          color='text.secondary'
          style={{ fontSize: "14px", marginTop: "16px" }}
        >
          Send and receive messages without keeping your phone online.
        </Typography>
      </Box>

      <Box
        component='div'
        color='text.disabled'
        className='absolute left-0 right-0 bottom-10 flex justify-center items-center gap-1'
        style={{
          fontSize: "14px",
        }}
      >
        <Lock
          style={{
            fontSize: "12px",
          }}
        />{" "}
        Your personal messages are end-to-end encrypted
      </Box>
    </Box>
  );
};

export default IntroPage;
