import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  IconButton,
  Paper,
  Typography,
  CardMedia,
  Button,
} from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import ModeIcon from "@mui/icons-material/Mode";
import DeleteIcon from "@mui/icons-material/Delete";
import {} from "./styles.js";
import logo from "../../images/badge3.png";
import { Box, ThemeProvider, createTheme } from "@mui/system";
import { Link } from "react-router-dom";
import QuizBlockButton from "../QuizBlockButton/QuizBlockButton.js";
import {
  MAX_DESCRIPTION_DISPLAY_LENGTH,
  MAX_TITLE_DISPLAY_LENGTH,
} from "../../static/Constants.js";
import { BLUE } from "../../static/Colors.js";

const QuizBlock = ({ title, numQuestions, description }) => {
  // console.log({ description }.length);
  var displayTitle = "";
  var displayDescription = "";
  if (title.length < MAX_TITLE_DISPLAY_LENGTH) {
    displayTitle = title;
  } else {
    displayTitle = title.substring(0, MAX_TITLE_DISPLAY_LENGTH) + "...";
  }
  if (description.length < MAX_DESCRIPTION_DISPLAY_LENGTH) {
    displayDescription = description;
  } else {
    displayDescription =
      description.substring(0, MAX_DESCRIPTION_DISPLAY_LENGTH) + "...";
  }
  // const displayTitle = console.log(description.length);
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
          subheader={
            numQuestions == "1"
              ? `${numQuestions} Question`
              : `${numQuestions} Questions`
          }
        ></CardHeader>

        <CardContent>{displayDescription}</CardContent>
        <Button
          sx={{
            margin: 2,
            fontSize: 30,
            color: "white",
            backgroundColor: "#26ABFF",
          }}
          component={Link}
          to="/questions"
        >
          Review
        </Button>
        <Button
          sx={{
            margin: 2,
            fontSize: 30,
            color: "white",
            backgroundColor: "red",
          }}
          onClick={() => {
            alert("to test page (when implemented)");
          }}
        >
          Test
        </Button>
        <QuizBlockButton
          text="review"
          link="/questions"
          color={BLUE}
        ></QuizBlockButton>
      </Card>
    </>
  );
};

export default QuizBlock;
