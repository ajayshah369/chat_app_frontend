import { Avatar, Box, Typography, InputBase } from "@mui/material";
import { useSelector } from "react-redux";
import { useState } from "react";

import { ChatType } from "../store/chatsSlice";
import { RootState } from "../store";
import ProfileIcon from "../assets/icons/profile.svg?react";
import SmileyIcon from "../assets/icons/smiley.svg?react";
import AttachIcon from "../assets/icons/attach.svg?react";
import MicIcon from "../assets/icons/mic.svg?react";
import SendIcon from "../assets/icons/send.svg?react";

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
  const [text, setText] = useState<string>("");

  return (
    <Box
      component='footer'
      sx={{
        padding: "5px 16px",
        bgcolor: "secondary.main",
        minHeight: "66px",
      }}
      className='flex items-center'
    >
      <Box
        component='div'
        className='flex items-center justify-center cursor-pointer'
        sx={{
          height: "42px",
          width: "42px",
          color: "icon.dark",
        }}
      >
        <SmileyIcon
          style={{
            height: "26px",
            width: "26px",
          }}
        />
      </Box>

      <Box
        component='div'
        className='flex items-center justify-center cursor-pointer'
        sx={{
          height: "46px",
          width: "46px",
          color: "icon.dark",
        }}
      >
        <AttachIcon />
      </Box>

      <Box
        component='div'
        className='flex-grow'
        sx={{
          margin: "5px 8px",
          padding: "9px 12px",
          bgcolor: "secondary.light",
          borderRadius: "8px",
        }}
      >
        <InputBase
          name='Message'
          fullWidth
          placeholder={"Type a message"}
          size='small'
          sx={{
            fontWeight: 300,
            fontSize: 15,
            padding: 0,
            margin: 0,
            "::placeholder": {
              color: "icon.dark",
              fontSize: 14,
            },
            "& input": {
              padding: 0,
              margin: 0,
              color: "secondary.A100",
            },
          }}
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </Box>

      {text ? (
        <Box
          component='div'
          className='flex items-center justify-center cursor-pointer'
          sx={{
            height: "40px",
            width: "40px",
            color: "icon.dark",
          }}
        >
          <SendIcon />
        </Box>
      ) : (
        <Box
          component='div'
          className='flex items-center justify-center cursor-pointer'
          sx={{
            height: "40px",
            width: "40px",
            color: "icon.dark",
          }}
        >
          <MicIcon />
        </Box>
      )}
    </Box>
  );
};

const Chat = () => {
  const chat = useSelector((state: RootState) => state.chats.activeChat);

  if (!chat) {
    return <></>;
  }

  return (
    <Box component='div' className='h-full flex flex-col'>
      <ChatHeader chat={chat} />

      <Box component='main' className='flex-grow'></Box>

      <ChatBottom />
    </Box>
  );
};

export default Chat;
