import React from "react";
import { Fab } from "@mui/material";

const SignOutButton = ({title}) => {
  return (
    <Fab
      variant="extended"
      size="medium"
      color="error"
      aria-label="add"
      sx={{
        borderRadius: 1,
        position: "fixed",
        bottom: 20,
        right: { xs: "calc(50% - 175px)", md: 30 },
      }}
    >
      {`${title}`}
    </Fab>
  );
};

export default SignOutButton;
