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
} from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import ModeIcon from "@mui/icons-material/Mode";
import DeleteIcon from "@mui/icons-material/Delete";
import {} from "./styles.js";
// import * as url from "src/images/badge3.png";

const QuizBlock = ({ title, numQuestions, description }) => {
  return (
    <>
      <Card sx={{ margin: 5, width: 427, hight: 432, borderRadius: 5 }}>
        <CardMedia
          // border as i cant render image, placeholder
          sx={{ border: 5, objectFit: "contain" }}
          component="img"
          height="200"
          image="src/images/badge3.png"
          alt="quiz"
        />
        <CardHeader
          action={
            <IconButton aria-label="add to favorites">
              <Checkbox
                icon={<StarBorderIcon />}
                checkedIcon={<StarIcon sx={{ color: "orange" }} />}
              />
            </IconButton>
          }
          title={title}
          subheader={
            numQuestions == "1"
              ? `${numQuestions} Question`
              : `${numQuestions} Questions`
          }
        />
        <CardContent>
          <Typography variant="h6" fontWeight={100}>
            What is the power house of the cell ?
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default QuizBlock;
