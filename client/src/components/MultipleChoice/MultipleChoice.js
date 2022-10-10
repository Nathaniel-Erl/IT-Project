import { Button, Checkbox, Grid, IconButton, InputAdornment, MenuItem, TextField, Typography, Box } from '@mui/material';
import React, { useState } from 'react'
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { MCBox, Form } from './styles';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createQuestion } from '../../actions/questions';

const MultipleChoice = ({ setOpen }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const quiz = JSON.parse(localStorage.getItem("quiz"));
  const [answer, setAnswer] = useState(0)
  const answers = [0, 1, 2, 3, 4, 5, 6]
  const [multipleChoiceAnswer, setMultipleChoiceAnswer] = useState({
    quizId: quiz._id,
    question: "",
    type: "multipleChoice",
    correctAnswer: new Array(0),
    incorrectAnswer: new Array(0),
  });
 
  var data = [];

  const setData = (numAnswers) => {
    data = new Array(numAnswers)
    for (let i = 0; i < numAnswers; i++) {
      data[i] = { correct: false, answer: "" }
    } 
  }

  const inputOnChange = (id, value) => {
    if (data) {
      data[id] = {...data[id], answer: value };
    }
  };

  const markCorrect = (id, checked) => {
    if (data && checked === true) {
      for (let i = 0; i < data.length; i++) {
        if (i === id) {
          data[id] = { ...data[id], correct: true };
        } else {
          if (!data[i].correct) {
             data[i] = { ...data[i], correct: false };
          }
        }
      }
    } else if (data && checked === false) {
      data[id] = { ...data[id], correct: false };
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const correctObj = data.filter(d => d.correct === true)
    const incorrectObj = data.filter((d) => d.correct === false);

    for (let i = 0; i < correctObj.length; i++) {
      setMultipleChoiceAnswer({
      ...multipleChoiceAnswer,
      correctAnswer: multipleChoiceAnswer.correctAnswer.push(correctObj[i].answer),
    });
    }

    for (let i = 0; i < incorrectObj.length; i++) {
      setMultipleChoiceAnswer({
      ...multipleChoiceAnswer,
      incorrectAnswer: multipleChoiceAnswer.incorrectAnswer.push(incorrectObj[i].answer),
    });
    }
    dispatch(createQuestion(multipleChoiceAnswer, navigate, quiz._id));
  };

 
  return (
    <MCBox>
      <Form onSubmit={handleSubmit}>
        <Box display="flex">
          <Typography
            variant="h5"
            color="#666666"
            align="center"
            marginRight="auto"
          >
            Write Question
          </Typography>

          <IconButton>
            <CloseIcon onClick={() => setOpen(false)} />
          </IconButton>
        </Box>

        <hr style={{ marginTop: "-3rem" }} />

        <Box
          display="flex"
          flexDirection="column"
          gap="2rem"
          flexGrow={1}
          flexBasis={0}
        >
          <TextField
            required
            id="outlined-basic"
            label="Question"
            variant="outlined"
            autoComplete="off"
            onChange={(e) => setMultipleChoiceAnswer({...multipleChoiceAnswer, question: e.target.value}) }
          />

          <TextField
            id="outlined-select-answer"
            select
            label="Select"
            value={answer}
            onChange={(e) => {
              setAnswer(e.target.value)
              setData(e.target.value)
            }}
            helperText="Please select number of answers"
          >
            {answers.map((value) => (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            ))}
          </TextField>

          <Grid container spacing={2} justify="center">
            {[...Array(answer)].map((ans, id) => {
              return (
                <Grid item key={id} xs={12} sm={6}>
                  <TextField
                    id="outlined-multiline-static"
                    label={`Answer ${id + 1}`}
                    multiline
                    rows="2"
                    variant="outlined"
                    fullWidth
                    onChange={(e) => inputOnChange(id, e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <IconButton aria-label="add to favorites">
                            <Checkbox
                              onChange={(e) => markCorrect(id, e.target.checked)}
                              icon={<DoneOutlineIcon />}
                              checkedIcon={
                                <CheckIcon sx={{ color: "green" }} />
                              }
                            />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Box>

        <Box display="flex" alignItems="center">
          <Typography color="error">
            * Please indicate correct answer by checking box next to answer
          </Typography>
          <Button
            type='submit'
            variant="contained"
            color="error"
            style={{ marginLeft: "auto", padding: "0.5rem 5rem" }}
          >
            Submit
          </Button>
        </Box>
      </Form>
    </MCBox>
  );
}

export default MultipleChoice