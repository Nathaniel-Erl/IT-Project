import React, { useState } from "react";
import { Box, Card, CardActions, CardContent, CardMedia, IconButton, Tooltip, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeIcon from "@mui/icons-material/Mode";
import { useDispatch } from "react-redux";
import { deleteQuiz } from "../../../actions/quizzes";
import { HEX_LENGTH } from "../../../static/constants";
import { getQuestions } from "../../../actions/questions";
import { RESET_QUESTIONS } from "../../../static/actionType";
import { StyledModal } from "../../TypeBox/styles";
import DeleteBox from "../../DeleteBox/DeleteBox";

const QuizBlock = ({ setOpenQuizForm, quiz, setCurrentQuizId }) => {
  const [openDelete, setOpenDelete] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleDelete = () => {
    dispatch(deleteQuiz(quiz._id))
  }

  const handleUpdate = () => {
    setCurrentQuizId(quiz._id)
    setOpenQuizForm(true)
  }

  return (
    <>
      <Card
        sx={{ cursor: "pointer" }}
        onClick={() => {
          dispatch({ type: RESET_QUESTIONS });
          dispatch(getQuestions(quiz._id));
          navigate(`/quiz/${quiz._id}`)
        }}
      >
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
        <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Box>
            <Tooltip title="Edit" placement="top">
              <IconButton aria-label="add to favorites" onClick={(e) => {
                e.stopPropagation();  
                handleUpdate()
              }}>
                <ModeIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Delete" placement="top">
              <IconButton
                aria-label="share"
                onClick={(e) => {
                  e.stopPropagation();  
                  setOpenDelete(true)
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </Box>
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
    </>
  );
};

export default QuizBlock;
