import { Alert, Snackbar } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

import { reset as resetSnackbar } from "../store/snackbarSlice";
import { RootState } from "../store/index";

const SnackbarComponent = () => {
  const dispatch = useDispatch();
  const snackbar = useSelector((state: RootState) => state.snackbar);

  const closeSnackbar = () => {
    dispatch(resetSnackbar());
  };

  return (
    <Snackbar
      open={snackbar.open}
      autoHideDuration={snackbar.autoHideDuration}
      onClose={closeSnackbar}
    >
      <Alert
        onClose={closeSnackbar}
        variant='standard'
        severity={snackbar.severity}
      >
        {snackbar.message}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarComponent;
