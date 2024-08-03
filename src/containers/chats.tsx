import { Box, Typography } from "@mui/material";
import { useDispatch } from "react-redux";

import NavItem from "../components/navItem";
import NewIcon from "../assets/icons/new.svg?react";
import { TAB1_TYPE } from "../store/tabsSlice";
import { VerticalMoreButton } from "../components/tooltipOptionsButtons";
import ChatSearchBox from "./chatSearchBox";
import { setLogoutModal } from "../store/authSlice";

const ChatsHeader = () => {
  const dispatch = useDispatch();

  const openLogoutModal = () => {
    dispatch(setLogoutModal(true));
  };

  return (
    <Box
      component='header'
      className='flex items-center justify-between'
      style={{
        height: "60px",
        paddingLeft: "25px",
        paddingRight: "20px",
      }}
    >
      <Typography
        component='h1'
        fontWeight='500'
        style={{
          fontSize: "22px",
        }}
        color='text.primary'
      >
        Chats
      </Typography>

      <Box component='div' className='flex items-center'>
        <NavItem
          tooltip='New Chat'
          Icon={NewIcon}
          tab={TAB1_TYPE.NEW_CHAT}
          inNavBar={false}
        />

        <VerticalMoreButton
          list={[
            { text: "New group" },
            { text: "Starred messages" },
            { text: "Log out", action: openLogoutModal },
          ]}
        />
      </Box>
    </Box>
  );
};

const Chats = () => {
  return (
    <Box component='div' className='h-full'>
      <ChatsHeader />

      <ChatSearchBox />
    </Box>
  );
};

export default Chats;
