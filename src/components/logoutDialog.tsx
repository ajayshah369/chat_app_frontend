import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { RootState, resetAll } from "../store/index";
import { setLogoutModal } from "../store/authSlice";
import { set as setSnackbar } from "../store/snackbarSlice";
import axiosInstance from "../utilities/axiosInstance";
import Spinner from "./spinner";

const LogoutDialog = () => {
  const dispatch = useDispatch();
  const showLogoutDialog = useSelector(
    (state: RootState) => state.auth.showLogoutDialog
  );
  const [loading, setLoading] = useState<boolean>(false);

  const closeDialog = () => {
    dispatch(setLogoutModal(false));
  };

  const logout = () => {
    setLoading(true);

    axiosInstance
      .post("/auth/logout")
      .then((res) => {
        dispatch(
          setSnackbar({
            open: true,
            severity: "success",
            message: res.data.message ?? "Successfully logout!",
          })
        );
        resetAll();
      })
      .catch((err) => {
        dispatch(
          setSnackbar({
            open: true,
            severity: "error",
            message: err?.response?.data?.message ?? "Something went wrong!",
          })
        );
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Dialog
      open={showLogoutDialog}
      onClose={closeDialog}
      fullWidth
      sx={{
        "& .MuiBackdrop-root": {
          backgroundColor: "var(--modal-backdrop)",
        },
        "& .MuiPaper-root": {
          backgroundImage: "none",
          backgroundColor: "var(--modal-background)",
          maxWidth: "500px",
          padding: "22px",
          margin: "0px",
        },
        boxShadow:
          "0 17px 50px 0 rgba(11, 20, 26, .19), 0 12px 15px 0 rgba(11, 20, 26, .24)",
      }}
    >
      <DialogTitle
        fontSize={20}
        fontWeight={400}
        sx={{
          color: "secondary.A100",
          fontSize: 20,
          fontWeight: 400,
          padding: "0px",
          marginBottom: "20px",
        }}
      >
        Log out?
      </DialogTitle>

      <DialogContent
        sx={{
          padding: "0px",
        }}
      >
        <DialogContentText sx={{ fontSize: 14, color: "secondary.A100" }}>
          Are you sure you want to logout?
        </DialogContentText>
      </DialogContent>

      <DialogActions
        sx={{
          marginTop: "50px",
          padding: "0px 5px",
          gap: "16px",
          "& .MuiButtonBase-root": {
            textTransform: "none",
            fontSize: 13,
            padding: "6px 24px",
            borderRadius: "50px",
            width: "92px",
            minHeight: "36px",
            maxHeight: "38px",
            margin: "0px",
            ":hover": {
              boxShadow:
                "0 2px 7px rgba(11, 20, 26, .09), 0 1px 2px rgba(11, 20, 26, .05)",
            },
          },
        }}
      >
        <Button
          onClick={closeDialog}
          sx={{
            color: "primary.light",
            border: "1px solid var(--button-secondary-border)",
            bgcolor: "transparent",
            ":hover": {
              color: "primary.A400",
              bgcolor: "transparent",
            },
          }}
        >
          Cancel
        </Button>
        <Button
          disabled={loading}
          onClick={logout}
          sx={{
            bgcolor: "primary.light",
            color: "background.default",
            marginLeft: "0px",
            ":hover": {
              bgcolor: "primary.A400",
            },
            ":disabled": {
              color: "background.default",
              marginLeft: "0px",
            },
          }}
        >
          {loading ? (
            <Spinner color='background.default' size={20} />
          ) : (
            "Logout"
          )}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LogoutDialog;
