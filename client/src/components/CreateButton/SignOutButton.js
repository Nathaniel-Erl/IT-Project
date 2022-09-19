import React from "react";
import { Fab } from "@mui/material";
import { Link } from "react-router-dom";

const SignOutButton = ({ link, title }) => {
  return (
    <Fab
      component={Link}
      to={`${link}`}
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
