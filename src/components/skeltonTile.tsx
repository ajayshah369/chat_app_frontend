import { Skeleton } from "@mui/material";

const SkeletonTile = () => {
  return (
    <Skeleton
      variant='rectangular'
      height={72}
      sx={{
        margin: "0px 12px",
        borderRadius: "8px",
      }}
    />
  );
};

export default SkeletonTile;
