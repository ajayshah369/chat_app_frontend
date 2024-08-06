import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../store";

import { TAB2_TYPE } from "../store/tabsSlice";
import IntroPage from "./introPage";
import Chat from "../containers/chat";

const Tab2 = () => {
  const tab2 = useSelector((state: RootState) => state.tabs.activeTab2);
  const activeChat = useSelector((state: RootState) => state.chats.activeChat);

  return (
    <Box id='tab-2' component='div' className='flex-grow'>
      {((): JSX.Element => {
        switch (tab2) {
          case TAB2_TYPE.CHAT:
            if (activeChat) {
              return <Chat />;
            } else {
              return <IntroPage />;
            }
          default:
            return <IntroPage />;
        }
      })()}
    </Box>
  );
};

export default Tab2;
