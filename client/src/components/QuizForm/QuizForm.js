import React, { useState, useEffect } from 'react'
import { Form, QFBox } from './styles';
import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, IconButton, Paper, TextField, Typography } from '@mui/material';
import FileBase from "react-file-base64";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from 'react-redux';
import { createQuiz, updatedQuiz } from '../../actions/quizzes';
import { MAX_DESCRIPTION_DISPLAY_LENGTH, MAX_TITLE_DISPLAY_LENGTH } from '../../static/constants';

const QuizForm = ({ setOpenQuizForm, currentQuizId, setCurrentQuizId }) => {
  const [quizData, setQuizData] = useState({
    subject: "",
    description: "",
    image: "",
  });

  const dispatch = useDispatch();
  const selectedQuiz = useSelector((store) =>
    currentQuizId
      ? store.quizzes.find((quiz) => quiz._id === currentQuizId)
      : null
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentQuizId === null) {
      dispatch(createQuiz(quizData));
    } else {
      dispatch(updatedQuiz(currentQuizId, quizData));
    }
    setOpenQuizForm(false);
    clear();
  };

  const clear = () => {
    setCurrentQuizId(null);
    setQuizData({
      subject: "",
      description: "",
      image: "",
    });
  };

  useEffect(() => {
    if (selectedQuiz) setQuizData(selectedQuiz);
  }, [selectedQuiz]);

  return (
    <QFBox>
      <Form onSubmit={handleSubmit}>
        <IconButton
          sx={{ marginLeft: "auto" }}
          onClick={() => setOpenQuizForm(false)}
        >
          <CloseIcon onClick={() => clear()} />
        </IconButton>

        <Box display="flex" justifyContent="space-between">
          <Paper
            variant="outlined"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: 5,
              border: 1,
              borderColor: "grey.500",
              flexGrow: 1,
            }}
          >
            <Typography fontWeight={200} marginBottom={2}>
              Upload an image or use default image
            </Typography>

            <IconButton size="large" sx={{ position: "relative" }}>
              <AddIcon
                fontSize="large"
                sx={{ position: "absolute", zIndex: 1 }}
              />
              <Button
                sx={{ opacity: 0, position: "absolute", zIndex: 2, left: -10 }}
              >
                <FileBase
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) =>
                    setQuizData({ ...quizData, image: base64 })
                  }
                />
              </Button>
            </IconButton>
          </Paper>
        </Box>

        {quizData.image && (
          <img
            src={`${quizData.image}`}
            alt="upload"
            style={{ width: "100%", height: "auto" }}
          ></img>
        )}

        <TextField
          id="outlined-basic"
          label="Subject"
          variant="outlined"
          autoComplete="off"
          value={quizData.subject}
          inputProps={{ maxLength: MAX_TITLE_DISPLAY_LENGTH }}
          onChange={(e) =>
            setQuizData({ ...quizData, subject: e.target.value })
          }
        />
        <TextField
          id="outlined-basic"
          label="Description"
          variant="outlined"
          autoComplete="off"
          value={quizData.description}
          inputProps={{ maxLength: MAX_DESCRIPTION_DISPLAY_LENGTH }}
          onChange={(e) =>
            setQuizData({ ...quizData, description: e.target.value })
          }
        />

        <Button
          type="submit"
          variant="contained"
          color="error"
          style={{ marginLeft: "auto", padding: "0.5rem 5rem" }}
        >
          Submit
        </Button>
      </Form>
    </QFBox>
  );
}

export default QuizForm