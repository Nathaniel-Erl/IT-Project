import { Box, CircularProgress, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import QuizBlock from './QuizBlock/QuizBlock';
import { useSelector } from "react-redux";

const Quizzes = ({ images, setOpenQuizForm, currentQuizId, setCurrentQuizId }) => {
  let quizzes = useSelector((store) => store.quizzes)
  const [isLoading, setLoading] = useState(true);
  const user = JSON.parse(localStorage.getItem("profile"))

  useEffect(() => {
     setTimeout(() => {
       setLoading(false);
     }, 1000);
  }, []);
  
  if (isLoading) {
    return <Box alignSelf='center'>
      <CircularProgress margin="auto"/>
    </Box>
  }

  return !quizzes.length ? (
      <Typography variant='h6' align="center" marginTop='12rem'>No quizzes available</Typography>
    ) : (
      <Grid
        container
        spacing={{ xs: 4, md: 8 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {quizzes.filter(quiz => quiz.createdBy === user.result.userName).
          map((quiz) => (
          <Grid key={quiz._id} item xs={12} sm={4} md={4}>
            <QuizBlock
              images={images}
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