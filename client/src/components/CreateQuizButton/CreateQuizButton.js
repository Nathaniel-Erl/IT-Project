import React from "react";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import { WHITE } from "../../static/Colors";

const CreateQuizButton = ({ link }) => {
  return (
    <Fab
      component={Link}
      to={`${link}`}
      variant="extended"
      size="medium"
      color={WHITE}
      aria-label="add"
      sx={{
        borderRadius: 1,
        position: "fixed",
        bottom: 20,
        right: { xs: "calc(50% - 175px)", md: 350 },
      }}
    >
      <AddIcon />
    </Fab>
  );
};

export default CreateQuizButton;
