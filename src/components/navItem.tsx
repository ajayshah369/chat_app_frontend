import {
  Box,
  Tooltip,
  styled,
  TooltipProps,
  tooltipClasses,
  Typography,
} from "@mui/material";

const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
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

type Props = {
  tooltip: string;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  count?: number;
  active?: boolean;
};

const NavItem = (props: Props) => {
  const { tooltip, Icon, count, active } = props;

  return (
    <CustomTooltip title={tooltip} placement='right'>
      <Box
        component='div'
        style={{
          maxWidth: "40px",
          maxHeight: "40px",
          marginTop: "10px",
          borderRadius: "50%",
          transition: "background-color .3s ease",
          backgroundColor: active ? "rgba(255, 255, 255, .1)" : "transparent",
        }}
        className='!aspect-square w-full flex items-center justify-center relative cursor-pointer'
        color='icon.main'
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
    </CustomTooltip>
  );
};

export default NavItem;
