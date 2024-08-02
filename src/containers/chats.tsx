import { Box, Typography } from "@mui/material";

import NavItem from "../components/navItem";
import NewIcon from "../assets/icons/new.svg?react";
import { TAB1_TYPE } from "../store/tabsSlice";
import { VerticalMoreButton } from "../components/tooltipOptionsButtons";
import SearchBox from "./searchBox";

const ChatsHeader = () => {
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
        color='white'
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
            { text: "Log out" },
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

      <Box component='div'>
        <SearchBox />
      </Box>
    </Box>
  );
};

export default Chats;
