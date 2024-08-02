import { CircularProgress } from "@mui/material";

type Props = {
  color?: string;
  size?: number;
};

const Spinner = ({ color, size }: Props) => {
  return (
    <CircularProgress
      size={size ? size : 24}
      sx={{
        color: color ? color : "common.white",
      }}
    />
  );
};

export default Spinner;
