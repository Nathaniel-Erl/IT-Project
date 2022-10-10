import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  IconButton,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import ModeIcon from "@mui/icons-material/Mode";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteQuestion } from "../../actions/questions";
import { useDispatch } from "react-redux";

const Question = ({
  subject,
  correctAnswer,
  incorrectAnswer,
  question,
  type,
  index,
  total,
  questionId,
  quizId,
}) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteQuestion(quizId, questionId));
  };

  return (
    <Card sx={{ margin: 4 }}>
      <CardHeader
        action={
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<StarBorderIcon />}
              checkedIcon={<StarIcon sx={{ color: "orange" }} />}
            />
          </IconButton>
        }
        title={subject}
        subheader={`Question ${index} of ${total}`}
      />
      <CardContent>
        <Typography variant="h6" fontWeight={100}>
          {question}
        </Typography>

        {type === "shortAnswer" ? (
          <Paper
            variant="outlined"
            sx={{
              padding: 5,
              border: 1,
              borderColor: "grey.500",
              marginTop: 2,
            }}
          >
            {correctAnswer.map((correct) => (
              <Typography variant="body1" fontWeight={100}>
                {correct}
              </Typography>
            ))}
          </Paper>
        ) : (
          <Paper
            variant="outlined"
            sx={{
              padding: 5,
              border: 1,
              borderColor: "grey.500",
              marginTop: 2,
            }}
          >
            {correctAnswer.map((correct, id) => (
              <Typography color="red" variant="body1" fontWeight={100}>
                {id + 1}. {correct}
              </Typography>
            ))}
            {incorrectAnswer.map((incorrect, id) => (
              <Typography variant="body1" fontWeight={100}>
                {id + correctAnswer.length + 1}. {incorrect}
              </Typography>
            ))}
          </Paper>
        )}
      </CardContent>
      <CardActions
        disableSpacing
        sx={{ display: "flex", justifyContent: "flex-end" }}
      >
        <Tooltip title="Edit" placement="top">
          <IconButton aria-label="add to favorites">
            <ModeIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Delete" placement="top">
          <IconButton aria-label="share">
            <DeleteIcon onClick={handleDelete} />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
};

export default Question;
