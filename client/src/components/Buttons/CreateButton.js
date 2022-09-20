import React from "react";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

const CreateButton = ({ link, title }) => {
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
      <AddIcon sx={{ mr: 1 }} />
      {`${title}`}
    </Fab>
  );
};

export default CreateButton;
