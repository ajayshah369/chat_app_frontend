import {
  Box,
  Tooltip,
  styled,
  TooltipProps,
  tooltipClasses,
  Typography,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/index";

import { TAB1_TYPE as TAB, set as setTabs } from "../store/tabsSlice";

type WrapperProps = {
  wrapper: (children: JSX.Element) => JSX.Element;
  children: JSX.Element;
};

const Wrapper = ({ wrapper, children }: WrapperProps) => {
  return wrapper(children);
};

const CustomTooltip1 = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#ffffff",
    color: "rgba(0, 0, 0, 0.87)",
    borderRadius: "100px",
    fontSize: "13px",
    padding: "6px 18px",
  },
}));

// const CustomTooltip2 = styled(({ className, ...props }: TooltipProps) => (
//   <Tooltip {...props} classes={{ popper: className }} />
// ))(({ theme }) => ({
//   [`& .${tooltipClasses.tooltip}`]: {
//     color: theme.palette.text.primary,
//     borderRadius: "0",
//     fontSize: "11px",
//     fontWeight: "300",
//     backgroundColor: theme.palette.background.paper,
//     border: `0.5px solid ${theme.palette.divider}`,
//   },
// }));

type Props = {
  tooltip: string;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  count?: number;
  tab: TAB;
  inNavBar?: boolean;
};

const NavItem = (props: Props) => {
  const { tooltip, Icon, count, tab, inNavBar = true } = props;
  const dispatch = useDispatch();
  const activeTab1 = useSelector((state: RootState) => state.tabs.activeTab1);
  const active: boolean = tab === activeTab1;
  const tooltipPlacement: TooltipProps["placement"] = inNavBar
    ? "right"
    : "bottom-start";

  const selectTab = () => {
    dispatch(
      setTabs({
        activeTab1: tab,
      })
    );
  };

  return (
    <Wrapper
      wrapper={(children) =>
        inNavBar ? (
          <CustomTooltip1 title={tooltip} placement={tooltipPlacement}>
            {children}
          </CustomTooltip1>
        ) : (
          <>{children}</>
        )
      }
    >
      <Box
        component='div'
        style={{
          width: "40px",
          height: "40px",
          marginTop: inNavBar ? "10px" : "0px",
          borderRadius: "50%",
          transition: "background-color .3s ease",
          backgroundColor: active ? "rgba(255, 255, 255, .1)" : "transparent",
        }}
        className='!aspect-square w-full flex items-center justify-center relative cursor-pointer'
        color='icon.main'
        onClick={selectTab}
      >
        <Icon />
        {count ? (
          <Box
            component='div'
            className='!aspect-square w-5 h-5 rounded-full p-1 absolute flex items-center justify-center'
            bgcolor='primary.light'
            style={{
              right: "-4px",
              top: "-4px",
            }}
          >
            <Typography
              component='span'
              style={{
                fontSize: "12px",
                color: "black",
              }}
            >
              {count}
            </Typography>
          </Box>
        ) : null}
      </Box>
    </Wrapper>
  );
};

export default NavItem;
