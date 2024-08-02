import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { Box, InputBase } from "@mui/material";

import CrossIcon from "../assets/icons/cross.svg?react";
import SearchIcon from "../assets/icons/search.svg?react";
import BackArrowIcon from "../assets/icons/backArrow.svg?react";
import Filter from "../components/filter";

type SearchInputProps = {
  setFocused: React.Dispatch<React.SetStateAction<boolean>>;
  setText: React.Dispatch<React.SetStateAction<string>>;
  text: string;
};

type LeftOfSearchInputType = {
  focused: boolean;
  handleFocus: () => void;
  setText: React.Dispatch<React.SetStateAction<string>>;
};

type RightOfSearchInputType = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  handleFocus: () => void;
};

const LeftOfSearchInput = ({
  focused,
  handleFocus,
  setText,
}: LeftOfSearchInputType) => {
  return (
    <Box
      component='div'
      style={{
        width: "60px",
        height: "24px",
      }}
      className='flex items-center relative [&>*]:cursor-pointer'
    >
      <Box
        component='div'
        className='flex items-center transition-all duration-500 absolute left-2 top-1/2'
        color='icon.dark'
        style={{
          transform: `translateY(-50%) ${
            focused ? "rotate(180deg)" : "rotate(0deg)"
          }`,
          opacity: focused ? "0" : "1",
          zIndex: focused ? "-1" : "1",
        }}
        onClick={() => {
          handleFocus();
        }}
      >
        <SearchIcon />
      </Box>

      <Box
        component='div'
        className='flex items-center transition-all duration-500 absolute left-2 top-1/2'
        color='primary.light'
        style={{
          transform: `translateY(-50%) ${
            focused ? "rotate(360deg)" : "rotate(180deg)"
          }`,
          opacity: focused ? "1" : "0",
          zIndex: focused ? "1" : "-1",
        }}
        onClick={() => {
          setText("");
        }}
      >
        <BackArrowIcon />
      </Box>
    </Box>
  );
};

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ setFocused, setText, text }, ref) => {
    const localRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
      ...(localRef.current as HTMLInputElement),
      focus: () => {
        localRef.current?.focus();
      },
    }));

    return (
      <Box component='div' className='flex-grow'>
        <InputBase
          inputRef={localRef}
          fullWidth
          placeholder='Search'
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
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
        />
      </Box>
    );
  }
);

const RightOfSearchInput = ({
  text,
  setText,
  handleFocus,
}: RightOfSearchInputType) => {
  return (
    <Box
      component='div'
      className='flex items-center justify-center'
      sx={{
        height: 28,
        width: 28,
        color: "icon.dark",
      }}
    >
      {text ? (
        <CrossIcon
          className='cursor-pointer'
          onClick={() => {
            setText("");
            handleFocus();
          }}
        />
      ) : null}
    </Box>
  );
};

const SearchBox = () => {
  const [focused, setFocused] = useState<boolean>(false);
  const [text, setText] = useState<string>("");

  const childRef = useRef<HTMLInputElement & { focus: () => void }>(null);

  const handleFocus = () => {
    if (childRef.current) {
      childRef.current.focus();
    }
  };

  return (
    <Box
      component='div'
      style={{
        height: "50px",
        marginLeft: "12px",
      }}
      className='flex items-center'
    >
      <Box
        component='div'
        className='flex-grow flex items-center px-1'
        bgcolor='secondary.main'
        style={{
          borderRadius: "8px",
          overflow: "hidden",
          height: "35px",
        }}
      >
        <LeftOfSearchInput
          focused={focused}
          handleFocus={handleFocus}
          setText={setText}
        />

        <SearchInput
          setFocused={setFocused}
          setText={setText}
          text={text}
          ref={childRef}
        />

        <RightOfSearchInput
          text={text}
          setText={setText}
          handleFocus={handleFocus}
        />
      </Box>

      <Filter />
    </Box>
  );
};

export default SearchBox;
