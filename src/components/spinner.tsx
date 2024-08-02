import { CircularProgress } from "@mui/material";

const Spinner = () => {
  return (
    <CircularProgress
      size={24}
      sx={{
        color: "common.white",
      }}
    />
  );
};

export default Spinner;
