import { Box } from "@mui/material";

const NavBar = () => {
  return (
    <Box
      component='header'
      style={{
        width: "60px",
      }}
      className='border-r'
      bgcolor='secondary.main'
      borderColor='divider'
    ></Box>
  );
};

export default NavBar;
