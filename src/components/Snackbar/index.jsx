import React from "react";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SnackbarPopup = ({ message, type }) => (
    <Snackbar
        open={!!message}
        autoHideDuration={1000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
        <Alert severity={type}>{message}</Alert>
    </Snackbar>
);

export default SnackbarPopup;
