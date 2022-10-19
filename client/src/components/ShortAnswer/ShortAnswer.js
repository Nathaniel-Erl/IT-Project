import { Box, Button, IconButton, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Form, SABox } from './styles';
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createQuestion, updateQuestion } from '../../actions/questions';

const ShortAnswer = ({ setOpen, update=false, quizId, questionId }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const quiz = JSON.parse(localStorage.getItem("quiz"));
    const [correctAnswerStr, setCorrectAnswerStr] = useState('')
    const selectedQuestion = questionId ? quiz.questions.find(q => q._id === questionId) : null
   
    const [shortAnswer, setShortAnswer] = useState({
      quizId: quiz._id,
      question: '',
      type: 'shortAnswer',
      correctAnswer: new Array(0),
      incorrectAnswer: []
    })
    
    const handleSubmit = (e) => {
      e.preventDefault()
      
      setShortAnswer({
        ...shortAnswer,
        correctAnswer: shortAnswer.correctAnswer.push(correctAnswerStr)
      })
      
      if (!update) {
        dispatch(createQuestion(shortAnswer, navigate, quiz._id));
      }
      else {
        setOpen(false)
        dispatch(updateQuestion(quizId, questionId, shortAnswer));
      }
    }
  
  useEffect(() => {
    if (selectedQuestion) {
      const { question, correctAnswer } = selectedQuestion
      setCorrectAnswerStr(correctAnswer[0])
      setShortAnswer({ ...shortAnswer, question })
    }
  }, [update])

    return (
      <SABox>
        <Form onSubmit={handleSubmit}>
          <Box display="flex" justifyContent="space-between">
            <Typography
              variant="h5"
              color="#666666"
              align="center"
              marginRight="auto"
            >
              Write Question
            </Typography>

            <IconButton>
              <CloseIcon onClick={() => {
                setOpen(false);
              }} />
            </IconButton>
          </Box>

          <hr style={{ marginTop: "-3rem" }} />

          <Box display="flex" flexDirection="column" gap="2rem">
            <TextField
              value={shortAnswer.question && shortAnswer.question}
              required
              id="outlined-basic"
              label="Question"
              variant="outlined"
              autoComplete="off"
              onChange={(e) =>
                setShortAnswer({ ...shortAnswer, question: e.target.value })
              }
            />
            <TextField
              value={correctAnswerStr}
              required
              id="outlined-multiline-static"
              label="Answer"
              multiline
              rows="7"
              variant="outlined"
              autoComplete="off"
              onChange={(e) => setCorrectAnswerStr(e.target.value)}
            />
          </Box>
          <Button
            type="submit"
            variant="contained"
            color="error"
            style={{ marginLeft: "auto", padding: "0.5rem 5rem" }}
          >
            Submit
          </Button>
        </Form>
      </SABox>
    );
}

export default ShortAnswer