import { Box } from "@mui/material";

import IntroPage from "./introPage";

const Tab1 = () => {
  return (
    <Box id='tab-2' component='div' className='flex-grow [&>*]:h-full'>
      <IntroPage />
    </Box>
  );
};

export default Tab1;
