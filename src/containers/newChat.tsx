import { Box, Typography } from "@mui/material";
import { useDispatch } from "react-redux";

import BackArrowIcon from "../assets/icons/backArrow.svg?react";
import { TAB1_TYPE, set as setTabs } from "../store/tabsSlice";

const NewChatHeader = () => {
  const dispatch = useDispatch();

  const goBack = () => {
    dispatch(
      setTabs({
        activeTab1: TAB1_TYPE.CHATS,
      })
    );
  };

  return (
    <Box
      component='header'
      className='flex items-center'
      style={{
        height: "60px",
        paddingLeft: "25px",
        paddingRight: "20px",
        gap: "30px",
      }}
    >
      <Box
        component='div'
        color='icon.dark'
        className='cursor-pointer'
        onClick={goBack}
      >
        <BackArrowIcon />
      </Box>
      <Typography
        component='h1'
        fontWeight='400'
        style={{
          fontSize: "16px",
        }}
        color='text.primary'
      >
        New Chat
      </Typography>
    </Box>
  );
};

import SearchBox from "./searchBox";

const NewChatSearchBox = () => {
  return (
    <Box
      component='div'
      style={{
        height: "50px",
        padding: "0px 12px",
      }}
      className='flex items-center'
    >
      <SearchBox placeholder='Search Email' />
    </Box>
  );
};

const NewChat = () => {
  return (
    <Box component='div' className='h-full'>
      <NewChatHeader />

      <NewChatSearchBox />
    </Box>
  );
};

export default NewChat;
