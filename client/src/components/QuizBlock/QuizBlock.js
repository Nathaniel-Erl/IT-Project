import React from "react";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import quizImg from "../../images/quiz.png";
import { Link } from "react-router-dom";

const QuizBlock = ({ title, numQuestions, description }) => {
  // limit length of display name and title

  return (
    <Card>
      <CardMedia
        sx={{ objectFit: "cover" }}
        component="img"
        height="140"
        image={quizImg}
        alt="quiz"
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button component={Link} to={'/questions'} >
          Review
        </Button>
      </CardActions>
    </Card>
  );
};

export default QuizBlock;
