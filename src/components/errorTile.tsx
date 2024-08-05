import { Box, Typography } from "@mui/material";

const ErrorTile = ({ error }: { error: string }) => {
  return (
    <Box
      component='div'
      height={72}
      className='flex items-center justify-center'
    >
      <Typography
        component='p'
        color='error'
        sx={{
          padding: "0px 12px",
        }}
      >
        {error}
      </Typography>
    </Box>
  );
};

export default ErrorTile;
