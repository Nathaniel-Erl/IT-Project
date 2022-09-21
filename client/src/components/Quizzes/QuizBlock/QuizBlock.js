import React from "react";
import { Button, Card, CardActions, CardContent, CardMedia, IconButton, Tooltip, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { deleteQuiz } from "../../../actions/quizzes";

const QuizBlock = ({ quiz }) => {
  // limit length of display name and title

  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deleteQuiz(quiz._id))
  }

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
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button component={Link} to={"/questions"}>
          Review
        </Button>

        <Tooltip title="Delete" placement="top">
          <IconButton aria-label="share" onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
};

export default QuizBlock;
