import React from "react";
import Alert from "@material-ui/lab/Alert";

function DisplayError({
  error: { message },
}: {
  error: { message?: string | undefined };
}) {
  return message ? <Alert severity="error">{message}</Alert> : null;
}

export default DisplayError;
