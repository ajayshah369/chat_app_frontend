import { Box } from "@mui/material";

import { Filter } from "../components/tooltipOptionsButtons";
import UnreadChatsIcon from "../assets/icons/unreadChats.svg?react";
import GroupIcon from "../assets/icons/group.svg?react";

import SearchBox from "./searchBox";

const ChatSearchBox = () => {
  return (
    <Box
      component='div'
      style={{
        height: "50px",
        marginLeft: "12px",
      }}
      className='flex items-center'
    >
      <SearchBox />

      <Filter
        list={[
          { text: "Unread chats", Icon: UnreadChatsIcon },
          { text: "Groups", Icon: GroupIcon },
        ]}
      />
    </Box>
  );
};

export default ChatSearchBox;
