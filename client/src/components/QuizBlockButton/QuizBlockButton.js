import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

/**
 *
 * @param {text to be entered} text to be entered
 * @returns
 */
const QuizBlockButton = ({ text, color, link }) => {
  return (
    <>
      <Button
        sx={{
          margin: 2,
          fontSize: 30,
          color: "white",
          backgroundColor: { color },
        }}
        // component={Link}
        to={link}
      >
        {text}
      </Button>
    </>
  );
};

export default QuizBlockButton;
