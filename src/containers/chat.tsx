import { Avatar, Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";

import { ChatType } from "../store/chatsSlice";
import { RootState } from "../store";
import ProfileIcon from "../assets/icons/profile.svg?react";

type ChatHeaderPropsType = {
  chat: ChatType;
};

const ChatHeader = ({ chat }: ChatHeaderPropsType) => {
  return (
    <Box
      component='header'
      sx={{
        padding: "10px 16px",
        height: "60px",
        bgcolor: "secondary.main",
      }}
      style={{
        boxShadow: "0 1px 3px rgba(11, 20, 26, .4)",
      }}
      className='flex items-center'
    >
      <Box
        component='div'
        className='flex-grow flex items-center cursor-pointer'
      >
        <Avatar
          variant='circular'
          sx={{
            height: "40px",
            width: "40px",
            marginRight: "15px",
          }}
        >
          <ProfileIcon height={40} width={40} />
        </Avatar>

        <Box component='div' className='flex-grow'>
          <Typography
            component='h2'
            sx={{
              fontWeight: 500,
              fontSize: 16,
              lineHeight: "21px",
              color: "text.primary",
              textOverflow: "ellipsis",
            }}
          >
            {chat.title ?? chat.name ?? chat.email}
          </Typography>

          {!chat.title && chat.name && chat.email ? (
            <Typography
              component='h3'
              sx={{
                fontSize: 13,
                color: "text.secondary",
                textOverflow: "ellipsis",
              }}
            >
              {chat.email}
            </Typography>
          ) : null}
        </Box>
      </Box>
    </Box>
  );
};

const ChatBottom = () => {
  return (
    <Box
      component='footer'
      sx={{
        padding: "5px 16px",
        bgcolor: "secondary.main",
        height: "66px",
      }}
    ></Box>
  );
};

const Chat = () => {
  const chat = useSelector((state: RootState) => state.chats.activeChat);

  if (!chat) {
    return <></>;
  }

  return (
    <Box component='div' className='h-full'>
      <ChatHeader chat={chat} />

      <Box
        component='main'
        style={{
          height: "calc(100% - 60px - 66px)",
        }}
      ></Box>

      <ChatBottom />
    </Box>
  );
};

export default Chat;
