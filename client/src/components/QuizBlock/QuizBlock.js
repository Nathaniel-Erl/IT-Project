import React from "react";
import { Card, CardContent, CardHeader, CardMedia, Grid } from "@mui/material";
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
      <Card sx={{ margin: 1, height: 300, borderRadius: 5 }}>
        {/* to neatly organise  */}
        <Grid container spacing={0.5}>
          <Grid item xs="12">
            <CardMedia
              sx={{ objectFit: "cover" }}
              component="img"
              height="120"
              image={logo}
              alt="quiz"
            />
          </Grid>
          {/* first most row of text */}
          <Grid item>
            {/* this will contain 2 items, front title and number of questions */}
            <Grid container>
              <Grid
                item
                pl={0.5}
                xs={5.5}
                sx={{ fontSize: font_sizes.FONT_S, fontWeight: "bold" }}
              >
                {displayTitle}
              </Grid>
              <Grid item xs={5.5} textAlign="end" pr={0.5}>
                {numQuestions === "1"
                  ? `${numQuestions} Question`
                  : `${numQuestions} Questions`}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
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
