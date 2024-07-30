import { Box } from "@mui/material";

import NavItem from "../components/navItem";

import ChatIcon from "../assets/icons/chats.svg?react";
import StatusIcon from "../assets/icons/status.svg?react";
import SettingsIcon from "../assets/icons/settings.svg?react";
import ProfileIcon from "../assets/icons/profile.svg?react";

import { TAB1_TYPE } from "../store/tabsSlice";

const NavBar = () => {
  return (
    <Box
      component='header'
      style={{
        width: "60px",
        padding: "0 9px",
      }}
      className='border-r flex flex-col [&>*]:w-full items-center'
      bgcolor='secondary.main'
      borderColor='divider'
    >
      <Box component='div'>
        <NavItem tooltip='Chats' Icon={ChatIcon} tab={TAB1_TYPE.CHATS} />
        <NavItem tooltip='Status' Icon={StatusIcon} tab={TAB1_TYPE.STATUS} />
      </Box>

      <Box component='div' className='flex-grow flex-shrink-0'></Box>

      <Box
        component='div'
        style={{
          marginBottom: "10px",
        }}
      >
        <NavItem
          tooltip='Settings'
          Icon={SettingsIcon}
          tab={TAB1_TYPE.SETTINGS}
        />
        <NavItem tooltip='Profile' Icon={ProfileIcon} tab={TAB1_TYPE.PROFILE} />
      </Box>
    </Box>
  );
};

export default NavBar;
