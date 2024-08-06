import { Box, Avatar, Typography } from "@mui/material";
import { useDispatch } from "react-redux";

import axiosInstance from "../utilities/axiosInstance";
import ProfileIcon from "../assets/icons/profile.svg?react";
import { set as setSnackbar } from "../store/snackbarSlice";

type UserType = {
  uuid?: string;
  name?: string;
  email?: string;
};

type UserTilePropsType = {
  data: UserType;
};

const UserTile = ({ data }: UserTilePropsType) => {
  const dispatch = useDispatch();

  const getOrCreateChat = () => {
    axiosInstance
      .get(`/chats/getOrCreateChat/${data.uuid}`)
      .then(() => {})
      .catch((err) => {
        dispatch(
          setSnackbar({
            open: true,
            severity: "error",
            message: err?.response?.data?.message,
          })
        );
      });
  };

  return (
    <Box
      component='div'
      sx={{
        height: "72px",
        ":hover": {
          bgcolor: "secondary.main",
        },
      }}
      className='flex items-center cursor-pointer'
      onClick={getOrCreateChat}
    >
      <Box
        component='div'
        sx={{
          padding: "0px 14px",
        }}
        className='flex items-center'
      >
        <Avatar
          sx={{
            height: "49px",
            width: "49px",
          }}
        >
          <ProfileIcon height={49} width={49} />
        </Avatar>
      </Box>

      <Box
        component='div'
        sx={{
          paddingRight: "15px",
          borderTop: "1px solid",
          borderTopColor: "divider",
        }}
        className='flex-grow flex flex-col items-start justify-center h-full'
      >
        <Typography
          component='h1'
          sx={{
            fontSize: "17px",
            color: "text.primary",
            textOverflow: "ellipsis",
          }}
        >
          {data?.name}
        </Typography>

        <Typography
          component='h2'
          sx={{
            fontSize: 13,
            color: "text.secondary",
            textOverflow: "ellipsis",
          }}
        >
          {data?.email}
        </Typography>
      </Box>
    </Box>
  );
};

export default UserTile;
