import { Box, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import validator from "validator";
import { useEffect, useRef, useState } from "react";

import BackArrowIcon from "../assets/icons/backArrow.svg?react";
import { TAB1_TYPE, set as setTabs } from "../store/tabsSlice";
import axiosInstance from "../utilities/axiosInstance";
import SearchBox from "./searchBox";
import UserTile from "../components/userTile";
import ErrorTile from "../components/errorTile";
import SkeletonTile from "../components/skeltonTile";

type NewChatSearchBoxPropsType = {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  setData: React.Dispatch<React.SetStateAction<null | object>>;
};

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

const NewChatSearchBox = ({
  loading,
  setLoading,
  setError,
  setData,
}: NewChatSearchBoxPropsType) => {
  const [searchText, setSearchText] = useState<string>("");

  const requestRef = useRef<AbortController>();

  const searchNewChat = () => {
    if (!validator.isEmail(searchText)) return;

    if (requestRef.current) {
      requestRef.current.abort();
    }

    setLoading(true);
    setError(null);
    setData(null);

    requestRef.current = new AbortController();

    axiosInstance
      .get(`/chats/searchNewChat/${searchText}`, {
        signal: requestRef.current.signal,
      })
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        setError(err?.response?.data?.message ?? "Something went wrong");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    searchNewChat();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  return (
    <Box
      component='div'
      style={{
        height: "50px",
        padding: "0px 12px",
      }}
      className='flex items-center'
    >
      <SearchBox
        placeholder='Search Email'
        loading={loading}
        setSearchText={setSearchText}
      />
    </Box>
  );
};

const NewChat = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<null | object>();

  return (
    <Box component='div' className='h-full'>
      <NewChatHeader />

      <NewChatSearchBox
        loading={loading}
        setLoading={setLoading}
        setError={setError}
        setData={setData}
      />

      <Box
        component='div'
        style={{
          height: "calc(100% - 110px)",
        }}
        sx={{
          paddingTop: "32px",
        }}
      >
        {loading ? <SkeletonTile /> : null}
        {error ? <ErrorTile error={error} /> : null}
        {data ? <UserTile data={data}></UserTile> : null}
      </Box>
    </Box>
  );
};

export default NewChat;
