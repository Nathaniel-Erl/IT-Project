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
import React, { useState } from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import ModeIcon from "@mui/icons-material/Mode";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteQuestion } from "../../actions/questions";
import { useDispatch } from "react-redux";
import { StyledModal } from "../TypeBox/styles"
import DeleteBox from "../DeleteBox/DeleteBox";
import ShortAnswer from '../ShortAnswer/ShortAnswer'
import MultipleChoice from "../MultipleChoice/MultipleChoice";


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
  const [openDelete, setOpenDelete] = useState(false);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteQuestion(quizId, questionId));
  };


  return (
    <>
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
            <IconButton aria-label="Edit">
              <ModeIcon onClick={() => setOpen(true)} />
            </IconButton>
          </Tooltip>

          <Tooltip title="Delete" placement="top">
            <IconButton aria-label="share">
              <DeleteIcon onClick={() => setOpenDelete(true)} />
            </IconButton>
          </Tooltip>
        </CardActions>
      </Card>

      <StyledModal
        open={openDelete}
        onClose={() => {
          setOpenDelete(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <DeleteBox handleDelete={handleDelete} setOpenDelete={setOpenDelete} />
      </StyledModal>

      <StyledModal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {type === "shortAnswer" ? (
          <ShortAnswer
            setOpen={setOpen}
            update={true}
            quizId={quizId}
            questionId={questionId}
          />
        ) : (
          <MultipleChoice
            setOpen={setOpen}
            update={true}
            quizId={quizId}
            questionId={questionId}
          />
        )}
      </StyledModal>
    </>
  );
};

export default Question;
