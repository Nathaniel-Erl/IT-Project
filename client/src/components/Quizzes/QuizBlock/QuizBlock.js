import React from "react";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const QuizBlock = ({ quiz }) => {
  // limit length of display name and title

  return (
    <Card>
      <CardMedia
        sx={{ objectFit: "cover" }}
        component="img"
        height="140"
        image={quiz.image}
        alt="quiz"
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {quiz.subject}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {quiz.description}
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
