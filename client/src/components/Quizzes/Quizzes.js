import { Grid, Typography } from '@mui/material';
import React from 'react'
import QuizBlock from './QuizBlock/QuizBlock';
import { useSelector } from "react-redux";

const Quizzes = ({ setOpenQuizForm, currentQuizId, setCurrentQuizId }) => {
    const quizzes = useSelector((store) => store.quizzes)
    
    return !quizzes.length ? (
      <Typography align="center">Please add more quizzes</Typography>
    ) : (
      <Grid
        container
        spacing={{ xs: 4, md: 8 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {quizzes.map((quiz) => (
          <Grid key={quiz._id} item xs={12} sm={4} md={4}>
            <QuizBlock
              quiz={quiz}
              currentQuizId={currentQuizId}
              setCurrentQuizId={setCurrentQuizId}
              setOpenQuizForm={setOpenQuizForm}
            ></QuizBlock>
          </Grid>
        ))}
      </Grid>
    );
}

export default Quizzes