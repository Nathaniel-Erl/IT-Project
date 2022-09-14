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

const QuizBlock = ({ title }) => {
  return (
    <>
      <Card sx={{ margin: 5, width: 427, hight: 432, borderRadius: 5 }}>
        <CardMedia
          component="img"
          height="194"
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
          title="Biology"
          subheader="Question 1 of 12"
        />
      </Card>
    </>
  );
};

export default QuizBlock;
