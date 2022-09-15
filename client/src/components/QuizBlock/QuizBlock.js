import React from "react";
import { Card, CardContent, CardHeader, CardMedia } from "@mui/material";
import {} from "./styles.js";
import logo from "../../images/badge3.png";
import {
  MAX_DESCRIPTION_DISPLAY_LENGTH,
  MAX_TITLE_DISPLAY_LENGTH,
} from "../../static/Constants.js";
import * as colors from "../../static/Colors.js";
import QuizBlockButton from "../QuizBlockButton/QuizBlockButton.js";
import * as font_sizes from "../../static/FontSizes.js";

const QuizBlock = ({ title, numQuestions, description }) => {
  // limit length of display name and title
  const displayTitle =
    title.length < MAX_TITLE_DISPLAY_LENGTH
      ? title
      : title.substring(0, MAX_TITLE_DISPLAY_LENGTH) + "...";
  const displayDescription =
    description.length < MAX_DESCRIPTION_DISPLAY_LENGTH
      ? description
      : description.substring(0, MAX_DESCRIPTION_DISPLAY_LENGTH) + "...";

  return (
    <>
      <Card sx={{ margin: 5, width: 427, hight: 432, borderRadius: 5 }}>
        <CardMedia
          // border as i cant render image, placeholder
          sx={{ objectFit: "cover" }}
          component="img"
          height="200"
          image={logo}
          alt="quiz"
        />
        <CardHeader
          title={displayTitle}
          sx={{ fontSize: font_sizes.FONT_XL }}
          subheader={
            numQuestions === "1"
              ? `${numQuestions} Question`
              : `${numQuestions} Questions`
          }
        ></CardHeader>
        <CardContent>{displayDescription}</CardContent>

        <QuizBlockButton
          text="review"
          link="/questions"
          color={colors.BLUE}
        ></QuizBlockButton>
        <QuizBlockButton
          text="test"
          link="/dashboard"
          color={colors.RED}
          onClick={() => {
            alert("to test page (when implemented)");
          }}
        ></QuizBlockButton>
      </Card>
    </>
  );
};

export default QuizBlock;
