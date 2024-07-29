import { Box } from "@mui/material";

import NavBar from "../../layouts/navBar";
import Tab1 from "../../layouts/tab1";
import Tab2 from "../../layouts/tab2";

const Home = () => {
  return (
    <Box component='div' className='overflow-auto' id='app'>
      <Box
        id='main'
        component='div'
        className='overflow-auto flex [&>*]:h-full'
        bgcolor='background.default'
      >
        <NavBar />
        <Tab1 />
        <Tab2 />
      </Box>
    </Box>
  );
};

export default Home;
