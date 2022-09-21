import { Grid } from '@mui/material';
import React from 'react'
import QuizBlock from './QuizBlock/QuizBlock';
import { useSelector } from "react-redux";

const Quizzes = () => {
    const quizzes = useSelector((store) => store.quizzes)
    
    return (
        <Grid
        container
        spacing={{ xs: 4, md: 8 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        >
        {quizzes.map((quiz) => (
                <Grid item xs={12} sm={4} md={4}>
                    <QuizBlock
                        key={quiz._id}
                        quiz={quiz}
                    ></QuizBlock>
                </Grid>
            ))}
        </Grid>
    );
}

export default Quizzes