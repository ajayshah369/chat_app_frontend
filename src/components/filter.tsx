import { Box } from "@mui/material";

import FilterListIcon from "../assets/icons/filterList.svg?react";

const Filter = () => {
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

export default Filter;
