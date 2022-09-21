import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import * as colors from "../../static/Colors";
import * as font_sizes from "../../static/FontSizes";

/**
 * @returns returns a button for quiz block.
 */
const QuizBlockButton = ({ text, color, link }) => {
  return (
    <>
      <Button
        sx={{
          margin: 2,
          fontSize: font_sizes.FONT_M,
          color: colors.WHITE,
          backgroundColor: color,
        }}
        component={Link}
        to={link}
      >
        {text}
      </Button>
    </>
  );
};

export default QuizBlockButton;
