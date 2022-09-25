import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Question from "../Question/Question";

const Questions = ({
  images,
  setOpenquestionForm,
  currentquestionId,
  setCurrentquestionId,
}) => {
  let question = useSelector((store) => store.Questions);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <Box alignSelf="center">
        <CircularProgress margin="auto" />
      </Box>
    );
  }

  return !Questions.length ? (
    <Typography variant="h6" align="center" marginTop="12rem">
      No Questions available
    </Typography>
  ) : (
    <Grid
      container
      spacing={{ xs: 4, md: 8 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {Questions.map((question) => (
        <Grid key={question._id} item xs={12} sm={4} md={4}>
          <Question
            images={images}
            question={question}
            currentquestionId={currentquestionId}
            setCurrentquestionId={setCurrentquestionId}
            setOpenquestionForm={setOpenquestionForm}
          ></Question>
        </Grid>
      ))}
    </Grid>
  );
};

export default Questions;
