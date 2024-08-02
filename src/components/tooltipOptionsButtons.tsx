import {
  Box,
  Tooltip,
  TooltipProps,
  styled,
  tooltipClasses,
  ClickAwayListener,
  List as MUIList,
  ListItem as MUIListItem,
  ListItemText,
} from "@mui/material";
import { useState } from "react";

import VerticalMoreIcon from "../assets/icons/moreVertical.svg?react";
import FilterListIcon from "../assets/icons/filterList.svg?react";

type ListItemProps = {
  text: string;
};

type ListProps = {
  list: ListItemProps[];
};

const ListItem = ({ text }: ListItemProps) => {
  return (
    <MUIListItem
      sx={{
        height: 40,
        padding: "8px 24px",
        color: "secondary.A100",
        cursor: "pointer",
        ":hover": {
          bgcolor: "background.paper",
        },
      }}
    >
      <ListItemText
        style={{
          fontSize: "14px",
          lineHeight: "14px",
          fontWeight: 300,
        }}
        disableTypography
      >
        {text}
      </ListItemText>
    </MUIListItem>
  );
};

const List = ({ list }: ListProps) => {
  return (
    <MUIList
      component='div'
      sx={{
        width: 240,
        bgcolor: "secondary.A400",
      }}
    >
      {list.map((e) => {
        return <ListItem text={e.text} />;
      })}
    </MUIList>
  );
};

const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "transparent",
    borderRadius: "2px",
    padding: "0",
    overflow: "hidden",
  },
}));

export const VerticalMoreButton = ({ list = [] }: ListProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <Box component='div'>
        <CustomTooltip
          title={<List list={list} />}
          placement='bottom-end'
          slotProps={{
            popper: {
              modifiers: [
                {
                  name: "offset",
                  options: {
                    offset: [0, -10],
                  },
                },
              ],
            },
          }}
          PopperProps={{
            disablePortal: true,
          }}
          open={open}
          disableFocusListener
          disableHoverListener
          disableTouchListener
          onClose={handleTooltipClose}
        >
          <Box
            component='div'
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              marginLeft: "4px",
              backgroundColor: open ? "rgba(255, 255, 255, .1)" : "transparent",
            }}
            className='flex items-center justify-center cursor-pointer'
            color='icon.main'
            onClick={handleTooltipToggle}
          >
            <VerticalMoreIcon />
          </Box>
        </CustomTooltip>
      </Box>
    </ClickAwayListener>
  );
};

export const Filter = () => {
  return (
    <Box
      component='div'
      style={{
        margin: "0 8px",
        height: "26px",
        width: "26px",
      }}
      className='cursor-pointer flex items-center justify-center'
      color='icon.dark'
    >
      <FilterListIcon />
    </Box>
  );
};
