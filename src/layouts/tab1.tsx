import { Box } from "@mui/material";

import Chats from "../containers/chats";

const Tab1 = () => {
  return (
    <Box id='tab-1' component='div' className='border-r' borderColor='divider'>
      <Chats />
    </Box>
  );
};

export default Tab1;
