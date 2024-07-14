import { Box } from "@mui/material";

const Home = () => {
  return (
    <Box component='div' className='overflow-auto' id='app'>
      <Box
        id='main'
        component='div'
        className='overflow-auto'
        bgcolor='background.default'
      ></Box>
    </Box>
  );
};

export default Home;
