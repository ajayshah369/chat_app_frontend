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
  ListItemIcon,
  ListSubheader,
} from "@mui/material";
import React, {
  useImperativeHandle,
  forwardRef,
  useState,
  useEffect,
  useRef,
} from "react";

import VerticalMoreIcon from "../assets/icons/moreVertical.svg?react";
import FilterListIcon from "../assets/icons/filterList.svg?react";

enum Size {
  NORMAL = "normal",
  SMALL = "small",
}

interface ListItemType {
  text: string;
  Icon?: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string;
    }
  >;
  action?: () => void;
}

interface ListItemPropsType extends ListItemType {
  size?: Size;
  handleTooltipToggle?: () => void;
}

interface ListType {
  list: ListItemType[];
}

interface ListPropsType {
  list: ListItemPropsType[];
  title?: string;
  size?: Size;
  handleTooltipToggle: () => void;
}

interface TooltipButtonPropsType extends ListType {
  title?: string;
  size?: Size;
  children: JSX.Element;
  setToolTipStatus?: (tooltipStatus: boolean) => void;
  offset: [number, number];
  placement: TooltipProps["placement"];
}

interface TooltipButtonRef {
  handleTooltipToggle: () => void;
}

const ListTitle = ({ text }: { text: string }) => {
  return (
    <ListSubheader
      sx={{
        height: 36,
        padding: "8px 24px",
        color: "text.primary",
      }}
      style={{
        fontSize: "16px",
        lineHeight: "16px",
        fontWeight: 400,
        backgroundColor: "transparent",
      }}
      component='h2'
    >
      {text}
    </ListSubheader>
  );
};

const ListItem = ({
  text,
  size,
  Icon,
  action,
  handleTooltipToggle,
}: ListItemPropsType) => {
  return (
    <MUIListItem
      sx={{
        height: 40,
        padding: "8px 24px",
        color: size === Size.SMALL ? "text.secondary" : "secondary.A100",
        cursor: "pointer",
        ":hover": {
          bgcolor: "background.paper",
        },
        gap: 1,
      }}
      onClick={() => {
        handleTooltipToggle?.();
        action?.();
      }}
    >
      {Icon ? (
        <ListItemIcon
          sx={{
            minWidth: 24,
            color: size === Size.SMALL ? "text.secondary" : "secondary.A100",
          }}
        >
          <Icon />
        </ListItemIcon>
      ) : null}

      <ListItemText
        style={{
          fontSize: size === Size.SMALL ? "13px" : "14px",
          lineHeight: size === Size.SMALL ? "13px" : "14px",
          fontWeight: 400,
        }}
        disableTypography
      >
        {text}
      </ListItemText>
    </MUIListItem>
  );
};

const List = ({
  list,
  title,
  size = Size.NORMAL,
  handleTooltipToggle,
}: ListPropsType) => {
  return (
    <MUIList
      component='div'
      sx={{
        width: size === Size.SMALL ? 160 : 200,
        bgcolor: "secondary.A400",
      }}
    >
      {title ? <ListTitle text={title} /> : null}
      {list.map((e, index) => {
        return (
          <ListItem
            key={e.text + index}
            text={e.text}
            Icon={e.Icon}
            size={size}
            action={e.action}
            handleTooltipToggle={handleTooltipToggle}
          />
        );
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
    boxShadow:
      "0 2px 5px 0 rgba(11, 20, 26, .26), 0 2px 10px 0 rgba(11, 20, 26, .16)",
  },
}));

const TooltipButton = forwardRef(
  (
    {
      list,
      size,
      title,
      children,
      setToolTipStatus,
      placement,
      offset,
    }: TooltipButtonPropsType,
    ref
  ) => {
    const [open, setOpen] = useState<boolean>(false);

    const handleTooltipClose = () => {
      setOpen(false);
    };

    const handleTooltipToggle = () => {
      setOpen((prev) => !prev);
    };

    useEffect(() => {
      setToolTipStatus?.(open);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open]);

    useImperativeHandle(ref, () => ({
      handleTooltipToggle() {
        handleTooltipToggle();
      },
    }));

    return (
      <ClickAwayListener onClickAway={handleTooltipClose}>
        <Box component='div'>
          <CustomTooltip
            title={
              <List
                list={list}
                size={size}
                title={title}
                handleTooltipToggle={handleTooltipToggle}
              />
            }
            placement={placement}
            slotProps={{
              popper: {
                modifiers: [
                  {
                    name: "offset",
                    options: {
                      offset: offset,
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
            {children}
          </CustomTooltip>
        </Box>
      </ClickAwayListener>
    );
  }
);

export const VerticalMoreButton = ({ list }: ListType) => {
  const [open, setOpen] = useState<boolean>(false);

  const childRef = useRef<TooltipButtonRef>();

  const handleTooltipToggle = () => {
    if (childRef.current) {
      childRef.current.handleTooltipToggle();
    }
  };

  return (
    <TooltipButton
      list={list}
      setToolTipStatus={setOpen}
      ref={childRef}
      placement={"bottom-end"}
      offset={[0, -10]}
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
    </TooltipButton>
  );
};

export const Filter = ({ list }: ListType) => {
  const childRef = useRef<TooltipButtonRef>();

  const handleTooltipToggle = () => {
    if (childRef.current) {
      childRef.current.handleTooltipToggle();
    }
  };

  return (
    <TooltipButton
      list={list}
      size={Size.SMALL}
      title='Chats'
      ref={childRef}
      placement='bottom-start'
      offset={[4, -14]}
    >
      <Box
        component='div'
        style={{
          margin: "0 8px",
          height: "26px",
          width: "26px",
        }}
        className='cursor-pointer flex items-center justify-center'
        color='icon.dark'
        onClick={handleTooltipToggle}
      >
        <FilterListIcon />
      </Box>
    </TooltipButton>
  );
};
