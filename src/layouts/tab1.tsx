import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../store/index";

import Chats from "../containers/chats";
import NewChat from "../containers/newChat";
import { TAB1_TYPE } from "../store/tabsSlice";

const Tab1 = () => {
  const tab1 = useSelector((state: RootState) => state.tabs.activeTab1);

  return (
    <Box id='tab-1' component='div' className='border-r' borderColor='divider'>
      {((): JSX.Element => {
        switch (tab1) {
          case TAB1_TYPE.CHATS:
            return <Chats />;
          case TAB1_TYPE.NEW_CHAT:
            return <NewChat />;
          default:
            return <></>;
        }
      })()}
    </Box>
  );
};

export default Tab1;
