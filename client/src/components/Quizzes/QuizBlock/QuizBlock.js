import React from "react";
import { Box, Button, Card, CardActions, CardContent, CardMedia, IconButton, Tooltip, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeIcon from "@mui/icons-material/Mode";
import { useDispatch } from "react-redux";
import { deleteQuiz } from "../../../actions/quizzes";
import { HEX_LENGTH } from "../../../static/constants";
import { getQuestions } from "../../../actions/questions";
import { REST_QUESTIONS } from "../../../static/actionType";

const QuizBlock = ({ setOpenQuizForm, quiz, setCurrentQuizId }) => {
  // limit length of display name and title

  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deleteQuiz(quiz._id))
  }

  const handleUpdate = () => {
    setCurrentQuizId(quiz._id)
    setOpenQuizForm(true)
  }

  return (
    <Card>
      {quiz.image.length > HEX_LENGTH ? (
        <CardMedia
          sx={{ objectFit: "cover" }}
          component="img"
          height="140"
          image={quiz.image}
        />
      ) : (
        <Box
          sx={{
            height: 140,
            backgroundColor: quiz.image,
          }}
        />
      )}

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {quiz.subject}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {quiz.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button component={Link} to={`/quiz/${quiz._id}`} onClick={() => {
          dispatch({type: REST_QUESTIONS})
          dispatch(getQuestions(quiz._id))
        }}>
          Add Questions
        </Button>

        <Box>
          <Tooltip title="Edit" placement="top">
            <IconButton aria-label="add to favorites" onClick={handleUpdate}>
              <ModeIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Delete" placement="top">
            <IconButton aria-label="share" onClick={handleDelete}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </CardActions>
    </Card>
  );
};

export default QuizBlock;
