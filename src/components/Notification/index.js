import React from 'react';
import { Box, Snackbar } from '@material-ui/core/';
import MuiAlert from '@material-ui/lab/Alert';

const Notification = ({ error, setError, anchorOrigin, autoHideDuration, errorText }) => {
  return (
    <Snackbar
      open={error}
      anchorOrigin={anchorOrigin}
      onClose={() => {
        setError(false);
      }}
      autoHideDuration={autoHideDuration || 0}>
      <Box maxWidth={300}>
        <MuiAlert
          elevation={6}
          variant="filled"
          severity="error"
          color="error"
          onClose={() => {
            setError(false);
          }}>
          {errorText}
        </MuiAlert>
      </Box>
    </Snackbar>
  );
};

export default Notification;
