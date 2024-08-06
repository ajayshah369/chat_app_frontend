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

  let message: string | null = snackbar.message;

  if (!message) {
    switch (snackbar.severity) {
      case "error":
        message = "Something went wrong!";
        break;
      case "success":
        message = "Success!";
        break;
      case "warning":
        message = "Warning!";
        break;
      case "info":
        message = "Info!";
        break;
      default:
        break;
    }
  }

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
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarComponent;
