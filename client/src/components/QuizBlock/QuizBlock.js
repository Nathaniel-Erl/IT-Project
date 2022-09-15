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

const QuizBlock = ({ title, numQuestions, description }) => {
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
          title={title}
          subheader={
            numQuestions == "1"
              ? `${numQuestions} Question`
              : `${numQuestions} Questions`
          }
        ></CardHeader>

        <CardContent>{description}</CardContent>
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
        <QuizBlockButton link="/questions"></QuizBlockButton>
      </Card>
    </>
  );
};

export default QuizBlock;
